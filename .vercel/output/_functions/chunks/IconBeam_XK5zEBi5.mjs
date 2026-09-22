import { S as createAstro, d as maybeRenderHead, p as addAttribute, u as renderTemplate } from "./server_DVlsW5S5.mjs";
import { t as createComponent } from "./compiler_BP6hkrya.mjs";
//#region src/components/icons/IconBeam.astro
createAstro("https://astro.build");
var $$IconBeam = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$IconBeam;
	const { size = 48, class: className = "" } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<svg${addAttribute(className, "class")}${addAttribute(size, "width")}${addAttribute(size, "height")} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><!-- Beam with forces - Mecanica 1 --><!-- Main beam --><rect x="6" y="22" width="36" height="4" rx="1" fill="currentColor" opacity="0.3"></rect><line x1="6" y1="24" x2="42" y2="24" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"></line><!-- Left support (pin) --><polygon points="10,26 7,34 13,34" stroke="currentColor" stroke-width="2" fill="none" stroke-linejoin="round"></polygon><line x1="5" y1="35" x2="15" y2="35" stroke="currentColor" stroke-width="1.5"></line><!-- Right support (roller) --><polygon points="34,26 31,32 37,32" stroke="currentColor" stroke-width="2" fill="none" stroke-linejoin="round"></polygon><circle cx="34" cy="35" r="2" stroke="currentColor" stroke-width="1.5" fill="none"></circle><!-- Force arrows (down) --><line x1="22" y1="8" x2="22" y2="22" stroke="currentColor" stroke-width="2" stroke-linecap="round"></line><polygon points="22,22 19,16 25,16" fill="currentColor"></polygon><!-- Force label --><text x="24" y="10" fill="currentColor" font-size="7" font-weight="bold" opacity="0.6">F</text><!-- Reaction arrows (up) --><line x1="10" y1="42" x2="10" y2="36" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity="0.5"></line><polygon points="10,36 8,39 12,39" fill="currentColor" opacity="0.5"></polygon></svg>`;
}, "C:/Users/Andrei/Desktop/sites/site meditatii/src/components/icons/IconBeam.astro", void 0);
//#endregion
export { $$IconBeam as t };
