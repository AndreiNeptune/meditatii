import { S as createAstro, d as maybeRenderHead, p as addAttribute, u as renderTemplate } from "./server_DVlsW5S5.mjs";
import { t as createComponent } from "./compiler_BP6hkrya.mjs";
//#region src/components/icons/IconCompass.astro
createAstro("https://astro.build");
var $$IconCompass = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$IconCompass;
	const { size = 48, class: className = "" } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<svg${addAttribute(className, "class")}${addAttribute(size, "width")}${addAttribute(size, "height")} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><!-- Set square / triangle ruler for GD --><path d="M6 42L6 6L42 42H6Z" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none"></path><path d="M6 30L18 30L18 42" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" opacity="0.5"></path><!-- Angle arc --><path d="M6 34C10 34 14 36 14 42" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity="0.4"></path><!-- Projection lines --><line x1="24" y1="6" x2="24" y2="14" stroke="currentColor" stroke-width="1.5" stroke-dasharray="3 3" opacity="0.3"></line><line x1="34" y1="6" x2="34" y2="24" stroke="currentColor" stroke-width="1.5" stroke-dasharray="3 3" opacity="0.3"></line><!-- Point markers --><circle cx="24" cy="24" r="2.5" fill="currentColor" opacity="0.7"></circle><circle cx="14" cy="28" r="1.5" fill="currentColor" opacity="0.4"></circle></svg>`;
}, "C:/Users/Andrei/Desktop/sites/site meditatii/src/components/icons/IconCompass.astro", void 0);
//#endregion
export { $$IconCompass as t };
