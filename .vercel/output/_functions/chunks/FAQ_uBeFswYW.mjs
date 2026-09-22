import { S as createAstro, b as unescapeHTML, d as maybeRenderHead, f as renderHead, i as renderComponent, m as createRenderInstruction, p as addAttribute, s as renderSlot, u as renderTemplate } from "./server_DVlsW5S5.mjs";
import { t as createComponent } from "./compiler_BP6hkrya.mjs";
//#region node_modules/astro/dist/runtime/server/render/script.js
async function renderScript(result, id) {
	const inlined = result.inlinedScripts.get(id);
	let content = "";
	if (inlined != null) {
		if (inlined) content = `<script type="module">${inlined}<\/script>`;
	} else {
		const resolved = await result.resolve(id);
		content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"><\/script>`;
	}
	return createRenderInstruction({
		type: "script",
		id,
		content
	});
}
//#endregion
//#region src/components/Navbar.astro
createAstro("https://astro.build");
var $$Navbar = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Navbar;
	const { currentPage = "" } = Astro.props;
	const navLinks = [
		{
			href: "/meditatii-geometrie-descriptiva",
			label: "GD",
			short: "GD"
		},
		{
			href: "/meditatii-analiza-matematica",
			label: "Analiză",
			short: "AM"
		},
		{
			href: "/meditatii-mecanica-1",
			label: "Mecanică 1",
			short: "M1"
		},
		{
			href: "/meditatii-mecanica-2",
			label: "Mecanică 2",
			short: "M2"
		},
		{
			href: "/meditatii-desen-tehnic",
			label: "Desen Tehnic",
			short: "DT"
		}
	];
	return renderTemplate`${maybeRenderHead($$result)}<nav class="navbar" id="navbar"><div class="container navbar__inner"><a href="/" class="navbar__logo"><svg class="navbar__logo-icon" viewBox="0 0 32 32" fill="none"><rect x="2" y="2" width="28" height="28" rx="6" stroke="currentColor" stroke-width="2.5"></rect><path d="M8 24L8 8L24 24H8Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round" fill="currentColor" opacity="0.15"></path><circle cx="16" cy="16" r="2.5" fill="currentColor"></circle></svg>Meditații Poli</a><div class="navbar__links">${navLinks.map((link) => renderTemplate`<a${addAttribute(link.href, "href")}${addAttribute(`navbar__link ${currentPage === link.href ? "navbar__link--active" : ""}`, "class")}>${link.label}</a>`)}<a href="https://wa.me/NUMAR_TAU?text=Salut!%20Am%20nevoie%20de%20ajutor%20la%20o%20materie%20de%20la%20Poli." target="_blank" rel="noopener" class="btn btn--whatsapp navbar__cta"><svg class="btn__icon" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"></path><path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.553 4.126 1.52 5.867L.057 23.306a.75.75 0 0 0 .92.92l5.44-1.463A11.944 11.944 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75c-1.875 0-3.654-.516-5.197-1.477l-.363-.215-3.762 1.011 1.011-3.762-.235-.374A9.698 9.698 0 0 1 2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75z"></path></svg>WhatsApp</a></div><button class="navbar__hamburger" id="hamburger" aria-label="Meniu navigare"><span></span><span></span><span></span></button></div><div class="navbar__mobile-menu" id="mobile-menu"><a href="/" class="navbar__mobile-link">Acasă</a>${navLinks.map((link) => renderTemplate`<a${addAttribute(link.href, "href")} class="navbar__mobile-link">${link.label}</a>`)}<a href="https://wa.me/NUMAR_TAU?text=Salut!%20Am%20nevoie%20de%20ajutor%20la%20o%20materie%20de%20la%20Poli." target="_blank" rel="noopener" class="btn btn--whatsapp" style="margin-top: 1rem;"><svg class="btn__icon" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"></path><path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.553 4.126 1.52 5.867L.057 23.306a.75.75 0 0 0 .92.92l5.44-1.463A11.944 11.944 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"></path></svg>Scrie pe WhatsApp</a></div></nav>${renderScript($$result, "C:/Users/Andrei/Desktop/sites/site meditatii/src/components/Navbar.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Andrei/Desktop/sites/site meditatii/src/components/Navbar.astro", void 0);
//#endregion
//#region src/components/Footer.astro
var $$Footer = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<footer class="footer"><div class="container"><div class="footer__grid"><div><div class="navbar__logo" style="margin-bottom: 0.5rem;"><svg class="navbar__logo-icon" viewBox="0 0 32 32" fill="none" style="width:28px;height:28px;"><rect x="2" y="2" width="28" height="28" rx="6" stroke="currentColor" stroke-width="2.5"></rect><path d="M8 24L8 8L24 24H8Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round" fill="currentColor" opacity="0.15"></path><circle cx="16" cy="16" r="2.5" fill="currentColor"></circle></svg>Meditații Poli</div><p class="footer__brand-desc">Meditații pentru studenții UNSTPB — Geometrie Descriptivă, Analiză Matematică, Mecanică și Desen Tehnic. Online sau fizic lângă campus (Regie / Leu).</p></div><div><h4 class="footer__heading">Materii</h4><div class="footer__links"><a href="/meditatii-geometrie-descriptiva" class="footer__link">Geometrie Descriptivă</a><a href="/meditatii-analiza-matematica" class="footer__link">Analiză Matematică</a><a href="/meditatii-mecanica-1" class="footer__link">Mecanică 1</a><a href="/meditatii-mecanica-2" class="footer__link">Mecanică 2</a><a href="/meditatii-desen-tehnic" class="footer__link">Desen Tehnic</a></div></div><div><h4 class="footer__heading">Contact</h4><div class="footer__links"><a href="https://wa.me/NUMAR_TAU" target="_blank" rel="noopener" class="footer__link">WhatsApp</a><span class="footer__link" style="cursor:default;">Online: Discord / Google Meet</span><span class="footer__link" style="cursor:default;">Fizic: Regie / Grozăvești / Leu</span><span class="footer__link" style="cursor:default;">120 lei/oră | 150 lei/oră urgențe</span></div></div></div><div class="footer__bottom"><span>&copy; ${(/* @__PURE__ */ new Date()).getFullYear()} Meditații Poli. Toate drepturile rezervate.</span><span>Ai prestanță și fără restanță!</span></div></div></footer>`;
}, "C:/Users/Andrei/Desktop/sites/site meditatii/src/components/Footer.astro", void 0);
//#endregion
//#region src/components/WhatsAppFAB.astro
createAstro("https://astro.build");
var $$WhatsAppFAB = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$WhatsAppFAB;
	const { materie = "o materie de la Poli" } = Astro.props;
	const whatsappUrl = `https://wa.me/NUMAR_TAU?text=${encodeURIComponent(`Salut! Sunt student la Poli și am nevoie de ajutor la ${materie}. Când ai disponibilitate?`)}`;
	return renderTemplate`${maybeRenderHead($$result)}<div class="whatsapp-fab" id="whatsapp-fab"><span class="whatsapp-fab__tooltip">💬 Scrie-mi pe WhatsApp!</span><a${addAttribute(whatsappUrl, "href")} target="_blank" rel="noopener" class="whatsapp-fab__btn" aria-label="Contactează pe WhatsApp"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"></path><path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.553 4.126 1.52 5.867L.057 23.306a.75.75 0 0 0 .92.92l5.44-1.463A11.944 11.944 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75c-1.875 0-3.654-.516-5.197-1.477l-.363-.215-3.762 1.011 1.011-3.762-.235-.374A9.698 9.698 0 0 1 2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75z"></path></svg></a></div>`;
}, "C:/Users/Andrei/Desktop/sites/site meditatii/src/components/WhatsAppFAB.astro", void 0);
//#endregion
//#region src/layouts/BaseLayout.astro
createAstro("https://astro.build");
var $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$BaseLayout;
	const { title, description, currentPage = "", whatsappMaterie = "o materie de la Poli" } = Astro.props;
	return renderTemplate`<html lang="ro"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="description"${addAttribute(description, "content")}><meta name="robots" content="index, follow"><!-- Open Graph --><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:type" content="website"><meta property="og:locale" content="ro_RO"><title>${title}</title><link rel="icon" type="image/svg+xml" href="/favicon.svg"><!-- GTM placeholder - replace GTM-XXXXX with your container ID --><!-- <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-XXXXX');<\/script> --><!-- Schema.org structured data --><script type="application/ld+json">${unescapeHTML(JSON.stringify({
		"@context": "https://schema.org",
		"@type": "LocalBusiness",
		"name": "Meditații Poli UNSTPB",
		"description": "Meditații pentru studenții Politehnicii din București. Geometrie Descriptivă, Analiză Matematică, Mecanică, Desen Tehnic.",
		"url": "https://meditatii-poli.ro",
		"areaServed": "București",
		"priceRange": "120-150 RON/oră",
		"address": {
			"@type": "PostalAddress",
			"addressLocality": "București",
			"addressRegion": "B",
			"addressCountry": "RO"
		}
	}))}<\/script>${renderHead($$result)}</head><body><!-- GTM noscript placeholder --><!-- <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXX" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript> -->${renderComponent($$result, "Navbar", $$Navbar, { "currentPage": currentPage })}<main>${renderSlot($$result, $$slots["default"])}</main>${renderComponent($$result, "Footer", $$Footer, {})}${renderComponent($$result, "WhatsAppFAB", $$WhatsAppFAB, { "materie": whatsappMaterie })}<!-- Scroll reveal observer -->${renderScript($$result, "C:/Users/Andrei/Desktop/sites/site meditatii/src/layouts/BaseLayout.astro?astro&type=script&index=0&lang.ts")}</body></html>`;
}, "C:/Users/Andrei/Desktop/sites/site meditatii/src/layouts/BaseLayout.astro", void 0);
//#endregion
//#region src/components/FAQ.astro
createAstro("https://astro.build");
var $$FAQ = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$FAQ;
	const { items = [] } = Astro.props;
	const faqItems = items.length > 0 ? items : [
		{
			question: "Sunt absolut la zero la matematică din liceu. Mă mai poți ajuta?",
			answer: "Sigur! Peste jumătate din studenții cu care lucrez vin cu lacune serioase din liceu. Îți explic conceptele de bază (derivate, integrale, trigonometrie) pe parcurs, exact acolo unde ai nevoie. Pachetul 5 Garantat e fix pentru tine."
		},
		{
			question: "Mă ajuți doar cu rezolvarea temei sau proiectului?",
			answer: "Nu vând teme gata făcute — te-ar bloca la colocviu. Facem tema împreună: eu explic pașii, tu calculezi și desenezi. La final vei înțelege 100% ce ai făcut și vei ști să reproduci singur."
		},
		{
			question: "Cât durează o ședință și cum se desfășoară online?",
			answer: "O ședință standard durează 2 ore (timp optim de concentrare). Online lucrăm cu tabletă grafică și screen sharing pe Discord sau Google Meet. E ca și cum am fi lângă tine în cămin, doar că fiecare e la el acasă."
		},
		{
			question: "Cât costă o ședință?",
			answer: "120 lei/oră pentru pregătire standard (orice materie, orice pachet). 150 lei/oră pentru urgențe (Modul Pompier — sub 72h până la examen). Plata se face după fiecare ședință."
		},
		{
			question: "Ce materii predai exact?",
			answer: "Geometrie Descriptivă (epură, intersecții, desfășurate), Analiză Matematică 1 (serii, derivate, integrale, ecuații diferențiale), Mecanică 1 (Statică, Cinematică) și 2 (Dinamică, Lagrange), și Desen Tehnic Industrial (vederi, secțiuni, cotare, toleranțe). Acopăr materia de la FIMM, ETTI, Transporturi, Energetică, SIM, FILS, Aerospațiale."
		},
		{
			question: "Pot face ședințe și fizic, nu doar online?",
			answer: "Da! Ne putem întâlni fizic lângă campus — zona Regie, Grozăvești sau Leu. Alege ce ți se potrivește cel mai bine."
		}
	];
	return renderTemplate`${maybeRenderHead($$result)}<section class="section" id="faq"><div class="container"><div style="text-align: center; margin-bottom: var(--space-2xl);"><p class="section__pretitle">Întrebări frecvente</p><h2 class="section__title">Ai întrebări? Probabil găsești răspunsul aici</h2></div><div class="faq-list">${faqItems.map((item, i) => renderTemplate`<div class="faq-item"${addAttribute(`faq-${i}`, "id")}><button class="faq-item__question" aria-expanded="false"${addAttribute(`faq-answer-${i}`, "aria-controls")}>${item.question}<svg class="faq-item__chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg></button><div class="faq-item__answer"${addAttribute(`faq-answer-${i}`, "id")}><p class="faq-item__answer-inner">${item.answer}</p></div></div>`)}</div></div></section>${renderScript($$result, "C:/Users/Andrei/Desktop/sites/site meditatii/src/components/FAQ.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Andrei/Desktop/sites/site meditatii/src/components/FAQ.astro", void 0);
//#endregion
export { $$BaseLayout as n, renderScript as r, $$FAQ as t };
