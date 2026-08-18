import { getPosts } from "../lib/api";
import { SITE, sanitizeSlug, stripHTML, escapeHTML } from "../lib/config";
import { withCache } from "../lib/cache";

export async function onRequest(context){
	return withCache(
		context,
		1800,
		async()=>{

			try{
				const posts=(await getPosts())
					.slice(0,50);

				const items=posts.map(p=>{

					const slug=sanitizeSlug(p.slug);

					const kategori=
						p.kategori||"artikel";

					const desc=escapeHTML(
						stripHTML(p.content)
							.slice(0,300)
					);

					const date=new Date(
						p.updated||
						p.created||
						Date.now()
					).toUTCString();

					return `
<item>
<title>${escapeHTML(p.title)}</title>
<link>${SITE.domain}/${slug}</link>
<guid>${SITE.domain}/${slug}</guid>
<pubDate>${date}</pubDate>
<category>${escapeHTML(kategori)}</category>
<description><![CDATA[
${desc}
]]></description>
</item>
`;

				}).join("");

				const xml=`<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
<channel>
<title>${SITE.name}</title>
<link>${SITE.domain}</link>
<description>${SITE.description}</description>
<language>id-ID</language>
<lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
${items}
</channel>
</rss>`;

				return new Response(
					xml,
					{
						headers:{
							"content-type":"application/xml;charset=UTF-8",
							"cache-control":"public,max-age=1800"
						}
					}
				);

			}catch(e){

				return new Response(
					"RSS Error: "+e.message,
					{
						status:500
					}
				);

			}

		}
	);
}
