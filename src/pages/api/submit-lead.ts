import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();

    // 1. Validare Honeypot (Dacă bot-ul a completat câmpul invizibil, respingem)
    if (data.b_website && data.b_website.length > 0) {
      console.warn('Bot detectat (Honeypot completat)');
      return new Response(JSON.stringify({ success: true }), {
        status: 200, // Îi dăm succes bot-ului ca să nu încerce iar
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Eliminăm honeypot-ul din datele finale
    delete data.b_website;

    // 2. Adăugăm timestamp generat pe server
    const serverTimestamp = new Date().toISOString();
    
    const payload = {
      ...data,
      timestamp: serverTimestamp
    };

    // 3. Trimitem către Google Apps Script (URL ascuns)
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
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
