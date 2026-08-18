import { searchPosts } from "../../lib/api";
import { sanitizeSlug, escapeHTML } from "../../lib/config";
import { withCache } from "../../lib/cache";

export async function onRequest(context){
	return withCache(
		context,
		300,
		async()=>{

			try{
				const url=new URL(context.request.url);

				const q=sanitizeQuery(url.searchParams.get("q"));

				if(!q){
					return json([]);
				}

				const posts=await searchPosts(q);

				const results=posts.map(p=>({
					title:escapeHTML(p.title),
					slug:sanitizeSlug(p.slug)
				}));

				return json(results);

			}catch(e){
				return json({error:e.message},500);
			}

		}
	);
}

// ====================== JSON RESPONSE ======================
function json(data,status=200){
	return new Response(
		JSON.stringify(data),
		{
			status,
			headers:{
				"content-type":"application/json;charset=UTF-8",
				"cache-control":"public,max-age=300"
			}
		}
	);
}

// ====================== SANITIZE QUERY ======================
function sanitizeQuery(str=""){
	return String(str)
		.toLowerCase()
		.replace(/<[^>]*>?/gm,"")
		.replace(/[^\w\s-]/g,"")
		.replace(/\s+/g," ")
		.trim();
}
