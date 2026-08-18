import { renderAmp } from "../../lib/renderAmp";
import { getPost,getPosts } from "../../lib/api";
import {
SITE,
canonical,
amphtml,
ogImage,
sanitizeSlug,
stripHTML,
readingTime,
cleanDescription,
escapeHTML
} from "../../lib/config";

export async function onRequest(context){
	try{
		const slug=sanitizeSlug(context.params.slug);

		const post=await getPost(slug);

		if(!post){
			return new Response("Not Found",{status:404});
		}

		const posts=await getPosts();

		const related=posts
			.filter(p=>
				sanitizeSlug(p.slug)!==slug &&
				p.kategori===post.kategori
			)
			.slice(0,8);

		let desc=stripHTML(post.content).slice(0,160);
		desc=cleanDescription(desc);

		const rawContent=String(post.content);

		const ampContent=rawContent.replace(
			/<img([^>]+?)src="([^"]+)"([^>]*)>/gi,
			`
<amp-img src="$2" width="1200" height="630" layout="responsive"></amp-img>
`
		);

		const linkedContent = ampContent;

		const tocData=generateTOC(linkedContent);

		const html=`
<nav class="breadcrumb">
<a href="/">Home</a>
›
<a href="/amp/kategori/${sanitizeSlug(post.kategori)}">${escapeHTML(post.kategori)}</a>
›
<span>${escapeHTML(post.title)}</span>
</nav>

<article>

<h1>${escapeHTML(post.title)}</h1>

<amp-img src="${ogImage(post.slug)}" width="1200" height="630" layout="responsive" alt="${escapeHTML(post.title)}"></amp-img>

<p>⏱ ${readingTime(post.content)} min read</p>

<div class="post-content">
${tocData.toc}
${tocData.content}
</div>

<div class="post-tags">
<a href="/amp/kategori/${sanitizeSlug(post.kategori)}">#${escapeHTML(post.kategori)}</a>
</div>

${related.length?`
<h2>Artikel Terkait</h2>
<ul>
${related.map(p=>`
<li><a href="/amp/${sanitizeSlug(p.slug)}">${escapeHTML(p.title)}</a></li>
`).join("")}
</ul>
`:""}

</article>
`;

		return renderAmp({
			title:post.title,
			description:desc,
			kategori: post.kategori,
			canonical:canonical("/"+post.slug),
			amp:amphtml("/"+post.slug),
			image:ogImage(post.slug),
			content:html,
			schema:`
<script type="application/ld+json">
{
"@context":"https://schema.org",
"@type":"BlogPosting",
"headline":${JSON.stringify(post.title)},
"description":${JSON.stringify(desc)},
"url":"${canonical("/"+post.slug)}",
"image":"${ogImage(post.slug)}",
"publisher":{
"@type":"Organization",
"name":"${SITE.name}"
}
}
</script>
`
		});

	}catch(e){
		return new Response("AMP Error: "+e.message,{status:500});
	}
}



function escapeRegex(str=""){
	return str.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");
}

function generateTOC(html=""){
	const headings=[];
	const content=html.replace(
		/<h2>(.*?)<\/h2>/gi,
		(match,title)=>{
			const clean=stripHTML(title);
			const id=sanitizeSlug(clean);

			headings.push({id,title:clean});

			return `<h2 id="${id}">${title}</h2>`;
		}
	);

	if(!headings.length){
		return {toc:"",content};
	}

	const toc=`
<details class="toc">
<summary class="toc-title">
<span>📑 Daftar Isi</span>
<span class="toc-toggle"></span>
</summary>
<ul>
${headings.map(h=>`
<li><a href="#${h.id}">${escapeHTML(h.title)}</a></li>
`).join("")}
</ul>
</details>
`;

	return {toc,content};
}
