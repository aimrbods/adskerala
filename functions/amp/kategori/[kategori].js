import { renderAmp } from "../../../lib/renderAmp";
import { getPosts } from "../../../lib/api";
import { SITE, canonical, sanitizeSlug, escapeHTML } from "../../../lib/config";

export async function onRequest(context){
	try{
		const { kategori }=context.params;

		const urlObj=new URL(context.request.url);

		const page=parseInt(urlObj.searchParams.get("page"))||1;

		const perPage=24;

		const posts=await getPosts();

		const filtered=posts.filter(
			p=>sanitizeSlug(p.kategori)===sanitizeSlug(kategori)
		);

		if(!filtered.length){
			return new Response("Kategori tidak ditemukan",{status:404});
		}

		const totalPage=Math.ceil(filtered.length/perPage);

		const start=(page-1)*perPage;

		const currentPosts=filtered.slice(start,start+perPage);

		const items=currentPosts.map(p=>`
<a class="card" href="/amp/${sanitizeSlug(p.slug)}">
<amp-img src="/og/${sanitizeSlug(p.slug)}" width="400" height="210" layout="responsive" alt="${escapeHTML(p.title)}"></amp-img>
<h3>${escapeHTML(p.title)}</h3>
</a>
`).join("");

		let pagination="";

		if(totalPage>1){
			pagination+=`<div class="pagination">`;

			if(page>1){
				pagination+=`
<a href="/amp/kategori/${sanitizeSlug(kategori)}?page=${page-1}">← Prev</a>
`;
			}

			pagination+=`
<span class="page-info">Page ${page} / ${totalPage}</span>
`;

			if(page<totalPage){
				pagination+=`
<a href="/amp/kategori/${sanitizeSlug(kategori)}?page=${page+1}">Next →</a>
`;
			}

			pagination+=`</div>`;
		}

		return renderAmp({
			title:`${kategori} AMP - ${SITE.name}`,
			description:`Kumpulan artikel AMP kategori ${kategori}`,
			canonical:canonical(`/kategori/${sanitizeSlug(kategori)}${page>1?`?page=${page}`:""}`),
			schema:`
<script type="application/ld+json">
{
"@context":"https://schema.org",
"@type":"CollectionPage",
"name":"${escapeHTML(kategori)}",
"url":"${canonical(`/kategori/${sanitizeSlug(kategori)}`)}"
}
</script>
`,
			content:`
<div class="hero">
<h1>${escapeHTML(kategori)}</h1>
<p>${filtered.length} artikel tersedia</p>
</div>

<div class="grid">
${items}
</div>

${pagination}

<div class="section">
<h2>Tentang ${escapeHTML(kategori)}</h2>
<p>
Kumpulan artikel kategori ${escapeHTML(kategori)} ringan, cepat, mobile friendly, dan SEO optimized.
</p>
</div>
`
		});

	}catch(e){
		return new Response("Error: "+e.message,{status:500});
	}
}
