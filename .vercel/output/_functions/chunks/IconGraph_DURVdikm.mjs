import { S as createAstro, d as maybeRenderHead, p as addAttribute, u as renderTemplate } from "./server_DVlsW5S5.mjs";
import { t as createComponent } from "./compiler_BP6hkrya.mjs";
//#region src/components/icons/IconGraph.astro
createAstro("https://astro.build");
var $$IconGraph = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$IconGraph;
	const { size = 48, class: className = "" } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<svg${addAttribute(className, "class")}${addAttribute(size, "width")}${addAttribute(size, "height")} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><!-- Integral / Graph curve for Analiza --><!-- Axes --><line x1="8" y1="40" x2="42" y2="40" stroke="currentColor" stroke-width="2" stroke-linecap="round" opacity="0.4"></line><line x1="8" y1="40" x2="8" y2="6" stroke="currentColor" stroke-width="2" stroke-linecap="round" opacity="0.4"></line><!-- Curve --><path d="M10 36C14 36 16 12 22 12C28 12 26 28 32 28C36 28 38 18 42 14" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" fill="none"></path><!-- Shaded area under curve --><path d="M14 36C14 36 16 12 22 12C28 12 26 28 32 28L32 36Z" fill="currentColor" opacity="0.08"></path><!-- Integral symbol --><path d="M4 14C4 10 6 8 8 8C10 8 10 10 10 12L6 28C6 30 6 32 8 32C10 32 12 30 12 28" stroke="currentColor" stroke-width="2" stroke-linecap="round" fill="none" opacity="0.5"></path><!-- dx markers --><line x1="20" y1="38" x2="20" y2="42" stroke="currentColor" stroke-width="1.5" opacity="0.3"></line><line x1="26" y1="38" x2="26" y2="42" stroke="currentColor" stroke-width="1.5" opacity="0.3"></line><line x1="32" y1="38" x2="32" y2="42" stroke="currentColor" stroke-width="1.5" opacity="0.3"></line></svg>`;
}, "C:/Users/Andrei/Desktop/sites/site meditatii/src/components/icons/IconGraph.astro", void 0);
//#endregion
export { $$IconGraph as t };
