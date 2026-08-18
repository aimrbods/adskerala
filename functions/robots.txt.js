import { SITE } from "../lib/config";

export async function onRequest(){
	const robots=`
User-agent: *

Allow: /

Sitemap: ${SITE.domain}/sitemap.xml

Host: ${SITE.domain}
`.trim();

	return new Response(
		robots,
		{
			headers:{
				"content-type":"text/plain;charset=UTF-8",
				"cache-control":"public,max-age=86400"
			}
		}
	);
}
