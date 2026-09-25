import type { APIRoute } from 'astro';
import { formSchema } from '../../utils/schema';

export const POST: APIRoute = async ({ request }) => {
  try {
    const rawData = await request.json();

    // 1. Zod Server-Side Strict Validation (Strat 5)
    const result = formSchema.safeParse(rawData);
    
    if (!result.success) {
      console.warn('Server validation failed:', result.error.issues);
      return new Response(JSON.stringify({ error: 'Date invalide trimise către server.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const data = result.data;

    // 2. Validare Anti-Spam - Honeypot (Strat 3)
    if (data.b_website && data.b_website.length > 0) {
      console.warn('Bot detectat (Honeypot completat)');
      return new Response(JSON.stringify({ success: true }), {
        status: 200, // Îi dăm succes bot-ului ca să nu încerce iar
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // 3. Validare Anti-Spam - Timp (Strat 3)
    const submitTime = Date.now();
    if (data.loadTime && (submitTime - data.loadTime < 3000)) {
      console.warn('Bot detectat (Sub 3 secunde de la randare la submit)');
      return new Response(JSON.stringify({ success: true }), {
        status: 200, // Fals pozitiv pentru boți
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Eliminăm honeypot-ul și loadTime-ul din datele finale
    delete (data as any).b_website;
    delete (data as any).loadTime;

    // 4. Adăugăm timestamp generat pe server
    const serverTimestamp = new Date().toISOString();
    
    const payload = {
      ...data,
      timestamp: serverTimestamp
    };

    // 5. Trimitem către Google Apps Script (URL ascuns)
    const scriptUrl = import.meta.env.GOOGLE_SCRIPT_URL || process.env.GOOGLE_SCRIPT_URL;

    if (!scriptUrl) {
      console.error('GOOGLE_SCRIPT_URL lipsește din .env');
      return new Response(JSON.stringify({ error: 'Configurare server greșită' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const response = await fetch(scriptUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      throw new Error(`Google Apps Script a răspuns cu eroarea: ${response.status}`);
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('Eroare la procesarea webhook-ului:', error);
    // Generic error to prevent Information Disclosure (Strat 4)
    return new Response(JSON.stringify({ error: 'A apărut o eroare de rețea.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
