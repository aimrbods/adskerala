import { layout } from "../../lib/render";
import { getPosts } from "../../lib/api";
import { SITE, canonical, sanitizeSlug, cardImage, escapeHTML } from "../../lib/config";

export async function onRequest(context){
	try{
		const { kategori }=context.params;

		const posts=await getPosts();

		const filtered=posts.filter(
			p=>sanitizeSlug(p.kategori)===sanitizeSlug(kategori)
		);

		if(!filtered.length){
			return new Response("Kategori tidak ditemukan",{status:404});
		}

		const page=parseInt(
			new URL(context.request.url).searchParams.get("page")
		)||1;

		const perPage=12;

		const totalPage=Math.ceil(filtered.length/perPage);

		const start=(page-1)*perPage;

		const currentPosts=filtered.slice(start,start+perPage);

		const grid=currentPosts.map(p=>`
<a class="card" href="/${sanitizeSlug(p.slug)}">
${cardImage(`/og/${sanitizeSlug(p.slug)}`,p.title)}
<h3>${escapeHTML(p.title)}</h3>
</a>
`).join("");

		return layout({
			category:sanitizeSlug(kategori),
			title:`${kategori} - ${SITE.name}`,
			description:`Kumpulan artikel kategori ${kategori} terbaru`,
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
${grid}
</div>

${pagination(page,totalPage,kategori)}
`
		});

	}catch(e){
		return new Response("Error: "+e.message,{status:500});
	}
}

function pagination(current,total,kategori){
	if(total<=1)return "";

	let html=`<div class="pagination">`;

	for(let i=1;i<=total;i++){
		html+=`
<a href="/kategori/${sanitizeSlug(kategori)}?page=${i}" class="${i===current?"active":""}">
${i}
</a>
`;
	}

	html+=`</div>`;
	return html;
}
