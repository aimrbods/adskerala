// ====================== GLOBAL SITE CONFIG ======================
export const SITE = {

  name: "Ai Mr Ferdy",

  domain: "https://mr-Ferdy.com",

  ampDomain: "https://mr-Ferdy.com/amp",
  logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjm9WfgOG9sY-qxwmukImzuA3s3tsrt7cgpnW05MA1Uci8aZNi87uvBgnWPchWYwYmLDow2_8rjpHOoyiCXO57T9ZrThcZZ3Ji0f_usVCRvq6Pt94JcZjzcHDE03ILfSGVw2NrAMzLrovYL-cxySyV3KArao1wv53Qyyaw0cTEfLOW4f1pEIe-l3AsmySA/s1600/logo1.png",
  favicon: "https://aimrferdycheat.blogspot.com/favicon.ico",
  affiliate: {

    "aimrferdy": [
      {
        name: "Niagahoster",
        url: "https://affiliate-link.com"
      },
      {
        name: "Domain Murah",
        url: "https://affiliate-link.com"
      }
    ],

    "ai": [
      {
        name: "ChatGPT Plus",
        url: "https://affiliate-link.com"
      }
    ],

    "seo": [
      {
        name: "Ahrefs",
        url: "https://affiliate-link.com"
      }
    ]

  }

};


// ====================== API CONFIG ======================
export const API_BASE="https://api-mr-Ferdy-com.aimrFerdy.workers.dev";

// ====================== getAffiliate ======================
export function getAffiliate(kategori = "") {

  const key = String(kategori)
    .toLowerCase()
    .trim();

  return SITE.affiliate[key] || [];

}

// ====================== URL HELPERS ======================
export function url(path=""){
	if(!path.startsWith("/")) path="/"+path;
	return SITE.domain+path;
}

export function amphtml(path=""){
	if(!path.startsWith("/")) path="/"+path;
	return SITE.ampDomain+path;
}

export function canonical(path=""){
	return url(path);
}

export function ogImage(slug=""){
	return slug?url("/og/"+sanitizeSlug(slug)):url(SITE.defaultImage);
}

// ====================== SLUG SANITIZER ======================
export function sanitizeSlug(str=""){
	return encodeURIComponent(
		String(str)
			.toLowerCase()
			.replace(/<[^>]*>?/gm,"")
			.replace(/['"]/g,"")
			.replace(/[^a-z0-9\s-]/g,"")
			.replace(/\s+/g,"-")
			.replace(/-+/g,"-")
			.trim()
	);
}

// ====================== TEXT HELPERS ======================
export function stripHTML(html=""){
	return String(html)
		.replace(/<script[\s\S]*?<\/script>/gi,"")
		.replace(/<style[\s\S]*?<\/style>/gi,"")
		.replace(/<[^>]*>?/gm," ")
		.replace(/\s+/g," ")
		.trim();
}

export function cleanDescription(str=""){
	return stripHTML(str)
		.replace(/\s+/g," ")
		.trim();
}

export function readingTime(text=""){
	const words=stripHTML(text).split(/\s+/).length;
	return Math.max(1,Math.ceil(words/200));
}

// ====================== IMAGE HELPERS ======================
export function cardImage(src,alt=""){
	return `
<img src="${src}" alt="${escapeHTML(alt)}" loading="lazy" decoding="async" width="400" height="210">
`;
}

export function postImage(src,alt=""){
	return `
<img src="${src}" alt="${escapeHTML(alt)}" fetchpriority="high" loading="eager" decoding="async" width="1200" height="630">
`;
}

// ====================== ESCAPE HELPERS ======================
export function escapeHTML(str=""){
	return String(str).replace(/[&<>"]/g,s=>({
		"&":"&amp;",
		"<":"&lt;",
		">":"&gt;",
		'"':"&quot;"
	}[s]));
}

export function escapeJSON(str=""){
	return String(str)
		.replace(/\\/g,"\\\\")
		.replace(/"/g,'\\"')
		.replace(/\n/g," ");
}
