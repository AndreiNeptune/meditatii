import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
//#region src/pages/api/submit-lead.ts
var submit_lead_exports = /* @__PURE__ */ __exportAll({ POST: () => POST });
var POST = async ({ request }) => {
	try {
		const data = await request.json();
		if (data.b_website && data.b_website.length > 0) {
			console.warn("Bot detectat (Honeypot completat)");
			return new Response(JSON.stringify({ success: true }), {
				status: 200,
				headers: { "Content-Type": "application/json" }
			});
		}
		delete data.b_website;
		const serverTimestamp = (/* @__PURE__ */ new Date()).toISOString();
		const payload = {
			...data,
			timestamp: serverTimestamp
		};
		const response = await fetch("https://script.google.com/macros/s/AKfycbyedVWtXJXrUNidcylxk-iJk0IWtQtVsXW7q9aHtfZ-UK0lVMIQUD2wwpQobfxyj5Ox/exec", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(payload)
		});
		if (!response.ok) throw new Error(`Google Apps Script a răspuns cu eroarea: ${response.status}`);
		return new Response(JSON.stringify({ success: true }), {
			status: 200,
			headers: { "Content-Type": "application/json" }
		});
	} catch (error) {
		console.error("Eroare la procesarea webhook-ului:", error);
		return new Response(JSON.stringify({ error: "Internal Server Error" }), {
			status: 500,
			headers: { "Content-Type": "application/json" }
		});
	}
};
//#endregion
//#region \0virtual:astro:page:src/pages/api/submit-lead@_@ts
var page = () => submit_lead_exports;
//#endregion
export { page };
