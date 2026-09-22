import { S as createAstro, d as maybeRenderHead, p as addAttribute, u as renderTemplate } from "./server_DVlsW5S5.mjs";
import { t as createComponent } from "./compiler_BP6hkrya.mjs";
//#region src/components/icons/IconGear.astro
createAstro("https://astro.build");
var $$IconGear = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$IconGear;
	const { size = 48, class: className = "" } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<svg${addAttribute(className, "class")}${addAttribute(size, "width")}${addAttribute(size, "height")} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><!-- Gear wheel - Mecanica 2 / Dinamica --><circle cx="24" cy="24" r="8" stroke="currentColor" stroke-width="2.5" fill="none"></circle><circle cx="24" cy="24" r="3" fill="currentColor" opacity="0.4"></circle><!-- Gear teeth --><rect x="22" y="4" width="4" height="8" rx="1" fill="currentColor" opacity="0.7"></rect><rect x="22" y="36" width="4" height="8" rx="1" fill="currentColor" opacity="0.7"></rect><rect x="4" y="22" width="8" height="4" rx="1" fill="currentColor" opacity="0.7"></rect><rect x="36" y="22" width="8" height="4" rx="1" fill="currentColor" opacity="0.7"></rect><!-- Diagonal teeth --><rect x="33" y="7" width="4" height="8" rx="1" fill="currentColor" opacity="0.5" transform="rotate(45 35 11)"></rect><rect x="7" y="33" width="4" height="8" rx="1" fill="currentColor" opacity="0.5" transform="rotate(45 9 37)"></rect><rect x="33" y="33" width="4" height="8" rx="1" fill="currentColor" opacity="0.5" transform="rotate(-45 35 37)"></rect><rect x="7" y="7" width="4" height="8" rx="1" fill="currentColor" opacity="0.5" transform="rotate(-45 9 11)"></rect><!-- Motion arrow --><path d="M38 8C40 10 42 14 42 18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-dasharray="3 2" opacity="0.4"></path><polygon points="42,18 44,14 39,15" fill="currentColor" opacity="0.4"></polygon></svg>`;
}, "C:/Users/Andrei/Desktop/sites/site meditatii/src/components/icons/IconGear.astro", void 0);
//#endregion
export { $$IconGear as t };
