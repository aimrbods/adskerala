import { getPosts } from "../lib/api";
import { SITE, sanitizeSlug } from "../lib/config";
import { withCache } from "../lib/cache";
import { STATIC_ROUTES } from "../lib/routes";

export async function onRequest(context) {
	return withCache(
		context,
		3600,
		async () => {
			try {
				const posts = await getPosts();

				const used = new Set();
				const kategoriSet = new Set();

				/*
				 * STATIC ROUTES
				 *
				 * Contoh:
				 * /apk
				 * /tools/ai
				 * /tools/image
				 *
				 * Route ini berasal dari lib/routes.js
				 * yang dibuat/diperbarui saat build.
				 */
				const staticUrls = STATIC_ROUTES
					.map(route => {
						if (!route || route === "/") {
							return "";
						}

						const cleanRoute =
							"/" +
							route
								.replace(/^\/+/, "")
								.replace(/\/+$/, "");

						return `
<url>
<loc>${SITE.domain}${cleanRoute}</loc>
<changefreq>daily</changefreq>
<priority>0.8</priority>
</url>
`;
					})
					.join("");

				/*
				 * ARTICLES
				 */
				const urls = posts
					.filter(p => {
						const slug = sanitizeSlug(p.slug);

						if (!slug || used.has(slug)) {
							return false;
						}

						used.add(slug);

						if (p.kategori) {
							const kategori = sanitizeSlug(p.kategori);

							if (kategori) {
								kategoriSet.add(kategori);
							}
						}

						return true;
					})
					.map(p => {
						const slug = sanitizeSlug(p.slug);

						const updated =
							p.updated ||
							p.created ||
							new Date().toISOString();

						return `
<url>
<loc>${SITE.domain}/${slug}</loc>
<lastmod>${updated}</lastmod>
<changefreq>daily</changefreq>
<priority>0.8</priority>
</url>

<url>
<loc>${SITE.domain}/amp/${slug}</loc>
<lastmod>${updated}</lastmod>
<changefreq>daily</changefreq>
<priority>0.5</priority>
</url>
`;
					})
					.join("");

				/*
				 * CATEGORY
				 */
				const kategoriUrls = [...kategoriSet]
					.map(k => `
<url>
<loc>${SITE.domain}/kategori/${k}</loc>
<changefreq>daily</changefreq>
<priority>0.7</priority>
</url>

<url>
<loc>${SITE.domain}/amp/kategori/${k}</loc>
<changefreq>daily</changefreq>
<priority>0.4</priority>
</url>
`)
					.join("");

				/*
				 * XML
				 */
				const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

<url>
<loc>${SITE.domain}/</loc>
<changefreq>hourly</changefreq>
<priority>1.0</priority>
</url>

<url>
<loc>${SITE.domain}/amp</loc>
<changefreq>hourly</changefreq>
<priority>0.6</priority>
</url>

${staticUrls}

${kategoriUrls}

${urls}

</urlset>`;

				return new Response(xml, {
					headers: {
						"content-type": "application/xml; charset=UTF-8",
						"cache-control": "public, max-age=3600"
					}
				});

			} catch (e) {
				return new Response(
					"Sitemap Error: " + e.message,
					{
						status: 500,
						headers: {
							"content-type": "text/plain; charset=UTF-8"
						}
					}
				);
			}
		}
	);
}
