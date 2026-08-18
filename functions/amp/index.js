import { renderAmp } from "../../lib/renderAmp";
import { getPosts } from "../../lib/api";
import { SITE, canonical, amphtml, sanitizeSlug, ogImage, cardImage, escapeHTML } from "../../lib/config";

export async function onRequest(context){
	try{
		const url=new URL(context.request.url);

		const page=parseInt(url.searchParams.get("page"))||1;

		const posts=await getPosts();

		const perPage=12;

		const totalPage=Math.ceil(posts.length/perPage);

		const start=(page-1)*perPage;

		const currentPosts=posts.slice(start,start+perPage);

		const grid=currentPosts.map(p=>`
<div class="card">
<a href="/${sanitizeSlug(p.slug)}">
<div class="thumb">
${cardImage(ogImage(p.slug),p.title)}
</div>
<div class="body">
<span class="badge">
${escapeHTML(p.kategori||"ARTIKEL")}
</span>
<h3>
${escapeHTML(p.title)}
</h3>
</div>
</a>
</div>
`).join("");

		const html=`
<section class="hero">
<div class="hero-box">
<span class="hero-badge">⚡ SEO MODERN</span>
<h1>${SITE.name}</h1>
<p>Tutorial SEO, AI, blogging, dan teknologi modern Indonesia</p>
<div class="hero-btns">
<a href="https://apk.aimrFerdy.workers.dev/" class="btn">Aktivasi</a>
<a href="https://app.aimrferdy.workers.dev/" class="btn btn2">Alternatif</a>
</div>
</div>
</section>

<section id="latest" class="section">
<div class="section-title">
<h2>Artikel Terbaru</h2>
<p>Update konten terbaru setiap hari</p>
</div>

<div class="grid">
${grid}
</div>

${pagination(page,totalPage)}
</section>
`;

		return renderAmp({
			title:SITE.name,
			description:SITE.description,
			canonical:canonical("/"),
			amp:amphtml("/"),
			content:html,
			schema:`
<script type="application/ld+json">
{
"@context":"https://schema.org",
"@type":"WebSite",
"name":"${SITE.name}",
"url":"${SITE.domain}"
}
</script>
`
		});

	}catch(e){
		return new Response("AMP Error: "+e.message,{status:500});
	}
}

function pagination(current,total){
	if(total<=1)return "";

	let html=`<div class="pagination">`;

	const group=Math.floor((current-1)/5);
	const start=group*5+1;
	const end=Math.min(start+4,total);

	if(start>1){
		html+=`<a href="/amp?page=${start-1}">«</a>`;
	}

	for(let i=start;i<=end;i++){
		html+=`<a href="/amp?page=${i}" class="${i===current?"active":""}">${i}</a>`;
	}

	if(end<total){
		html+=`<a href="/amp?page=${end+1}">»</a>`;
	}

	html+=`</div>`;
	return html;
}
