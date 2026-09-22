import { S as createAstro, d as maybeRenderHead, p as addAttribute, u as renderTemplate } from "./server_DVlsW5S5.mjs";
import { t as createComponent } from "./compiler_BP6hkrya.mjs";
//#region src/components/icons/IconRuler.astro
createAstro("https://astro.build");
var $$IconRuler = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$IconRuler;
	const { size = 48, class: className = "" } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<svg${addAttribute(className, "class")}${addAttribute(size, "width")}${addAttribute(size, "height")} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><!-- T-square ruler + drawing board - Desen Tehnic --><!-- Drawing board --><rect x="8" y="6" width="32" height="36" rx="2" stroke="currentColor" stroke-width="2" fill="none" opacity="0.3"></rect><!-- T-ruler horizontal --><line x1="4" y1="20" x2="44" y2="20" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"></line><!-- T-ruler vertical --><rect x="2" y="16" width="4" height="26" rx="1" stroke="currentColor" stroke-width="1.5" fill="currentColor" opacity="0.2"></rect><!-- Drawing lines --><line x1="16" y1="14" x2="36" y2="14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity="0.5"></line><line x1="16" y1="26" x2="36" y2="26" stroke="currentColor" stroke-width="1" stroke-dasharray="4 2" opacity="0.3"></line><line x1="16" y1="32" x2="36" y2="32" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity="0.5"></line><!-- Dimension line --><line x1="16" y1="36" x2="30" y2="36" stroke="currentColor" stroke-width="1" opacity="0.4"></line><line x1="16" y1="34" x2="16" y2="38" stroke="currentColor" stroke-width="1" opacity="0.4"></line><line x1="30" y1="34" x2="30" y2="38" stroke="currentColor" stroke-width="1" opacity="0.4"></line><!-- Small "50" dimension text --><text x="21" y="35.5" fill="currentColor" font-size="5" opacity="0.5">50</text><!-- Pencil --><line x1="34" y1="28" x2="40" y2="22" stroke="currentColor" stroke-width="2" stroke-linecap="round" opacity="0.6"></line><circle cx="34" cy="28" r="1" fill="currentColor" opacity="0.6"></circle></svg>`;
}, "C:/Users/Andrei/Desktop/sites/site meditatii/src/components/icons/IconRuler.astro", void 0);
//#endregion
export { $$IconRuler as t };
