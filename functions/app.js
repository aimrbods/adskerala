import { layout } from "../lib/render";
import { getPosts, getPost } from "../lib/api";
import {
SITE,
canonical,
ogImage,
sanitizeSlug,
stripHTML,
readingTime,
cleanDescription,
postImage,
cardImage,
escapeHTML
} from "../lib/config";
import { seo } from "../lib/seo";
import { withCache } from "../lib/cache";

export async function onRequest(context){
	return withCache(
		context,
		300,
		async()=>{

			try{
				let { slug }=context.params;
				slug=sanitizeSlug(slug);

				const post=await getPost(slug);

				if(!post){
					return new Response("404 Not Found",{status:404});
				}

				const posts=await getPosts();

				const related=posts
					.filter(p=>
						sanitizeSlug(p.slug)!==slug &&
						p.kategori===post.kategori
					)
					.slice(0,6);

				const linkedContent =
String(post.content || "")
.replace(/"\s*>/g,">");

				const tocData=generateTOC(linkedContent);

				const read=readingTime(linkedContent);

				let desc=stripHTML(linkedContent).slice(0,160);
				desc=cleanDescription(desc);

				const url=canonical("/"+slug);
				const og=ogImage(slug);

				const breadcrumb=`
<nav class="breadcrumb">
<a href="/">Home</a>
<span>›</span>
<a href="/kategori/${sanitizeSlug(post.kategori)}">${escapeHTML(post.kategori)}</a>
<span>›</span>
<span>${escapeHTML(post.title)}</span>
</nav>
`;

				const relatedHTML=related.map(p=>`
<div class="card">
<a href="/${p.slug}">
${cardImage(ogImage(p.slug),p.title)}
<h3>${escapeHTML(p.title)}</h3>
</a>
</div>
`).join("");

				return layout({
					title:post.title,
					description:desc,
					canonical:url,
					image:og,
					schema:seo({
						title:post.title,
						description:desc,
						slug,
						kategori:post.kategori,
						published:post.created,
						updated:post.updated
					}),
					content:`


          APP JS
${breadcrumb}

<article class="post">
${postImage(og,post.title)}
<h1>${escapeHTML(post.title)}</h1>
<p>⏱ ${read} min read</p>

<div class="post-content">
${tocData.toc}
${tocData.content}
</div>

<div class="post-tags">
<a href="/kategori/${sanitizeSlug(post.kategori)}">
#${escapeHTML(post.kategori)}
</a>
</div>
</article>

<h2>Artikel Terkait</h2>

<div class="grid">
${relatedHTML}
</div>
`
				});

			}catch(e){
				return new Response("Error: "+e.message,{status:500});
			}

		}
	);
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

			headings.push({ id,title:clean });

			return `<h2 id="${id}">${title}</h2>`;
		}
	);

	if(!headings.length){
		return { toc:"",content };
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

	return { toc,content };
}
