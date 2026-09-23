import { z } from 'zod';

// Helper de sanitizare anti-XSS
const sanitizeHtml = (str: string | undefined | null): string => {
  if (!str) return '';
  return str.replace(/[&<>'"]/g, 
    tag => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[tag] || tag)
  );
};

export const formSchema = z.object({
  materie: z.string().optional().default('-'),
  nivel_initial: z.string().optional().default('-'),
  timp_ramas: z.string().optional().default('-'),
  pachet_recomandat: z.string().optional().default('-'),
  pret: z.string().optional().default('-'),
  
  facultate: z.string()
    .min(1, 'Te rog să introduci facultatea.')
    .trim()
    .transform(sanitizeHtml),
    
  an: z.string()
    .min(1, 'Te rog să alegi anul.')
    .trim()
    .transform(sanitizeHtml),
    
  are_subiecte: z.string().optional().default('-'),
  
  nume: z.string()
    .min(2, 'Numele trebuie să aibă cel puțin 2 caractere.')
    .trim()
    .transform(sanitizeHtml),
    
  telefon: z.string()
    .min(10, 'Numărul de telefon trebuie să aibă minim 10 cifre.')
    .regex(/^[0-9+ ]+$/, 'Numărul poate conține doar cifre, spații sau +')
    .trim()
    .transform(sanitizeHtml),
    
  email: z.string()
    .optional()
    .transform(val => val ? val.trim() : '')
    .refine(val => val === '' || z.string().email().safeParse(val).success, {
      message: 'Adresa de email nu este validă.'
    })
    .transform(sanitizeHtml),
    
  newsletter: z.string().optional().default('Nu'),
  
  mentiuni: z.string()
    .optional()
    .default('')
    .transform(val => val ? val.trim() : '')
    .transform(sanitizeHtml),
    
  sursa: z.string().optional().default('-').transform(sanitizeHtml),
  
  b_website: z.string().optional().default(''), // honeypot
  
  loadTime: z.number().optional(), // timestamp pentru anti-spam
  
  acord_legal: z.literal('Da', {
    errorMap: () => ({ message: 'Trebuie să fii de acord cu Termenii și Condițiile pentru a continua.' })
  })
}).refine(data => {
  if (data.newsletter === 'Da') {
    return data.email && data.email.trim().length > 0;
  }
  return true;
}, {
  message: 'Adresa de email este obligatorie pentru a te abona la newsletter.',
  path: ['email']
});

export type FormData = z.infer<typeof formSchema>;
