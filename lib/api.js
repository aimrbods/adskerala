import { API_BASE, sanitizeSlug } from "./config";

// ====================== MEMORY CACHE ======================
let CACHE=null;
let LAST_FETCH=0;

const TTL=60*1000;

// ====================== FETCH JSON ======================
async function fetchJSON(url){
	try{
		const res=await fetch(url,{
			headers:{
				accept:"application/json"
			}
		});

		if(!res.ok){
			throw new Error("API "+res.status);
		}

		return await res.json();
	}catch(err){
		console.error("FETCH ERROR:",err.message);

		if(CACHE){
			return CACHE;
		}

		return [];
	}
}

// ====================== NORMALIZE POST ======================
function normalize(post={}){
	return {
		slug:sanitizeSlug(post.slug||""),
		title:String(post.title||"No Title").trim(),
		content:String(post.content||""),
		kategori:String(post.kategori||"umum")
			.toLowerCase()
			.trim(),
		created:post.created||new Date().toISOString(),
		updated:post.updated||post.created||new Date().toISOString()
	};
}

// ====================== GET POSTS ======================
export async function getPosts(){
	const now=Date.now();

	if(CACHE&&(now-LAST_FETCH)<TTL){
		return CACHE;
	}

	const data=await fetchJSON(API_BASE+"/posts");

	const posts=(data||[])
		.map(normalize)
		.filter(p=>p.slug);

	posts.sort(
		(a,b)=>
		new Date(b.created)-
		new Date(a.created)
	);

	CACHE=posts;
	LAST_FETCH=now;

	return posts;
}

// ====================== GET SINGLE POST ======================
export async function getPost(slug=""){
	const safeSlug=sanitizeSlug(slug);

	if(!safeSlug){
		return null;
	}

	const posts=await getPosts();

	return posts.find(
		p=>p.slug===safeSlug
	)||null;
}

// ====================== GET CATEGORY ======================
export async function getByKategori(kategori=""){
	const posts=await getPosts();

	const safe=String(kategori)
		.toLowerCase()
		.trim();

	return posts.filter(
		p=>p.kategori===safe
	);
}

// ====================== SEARCH POSTS ======================
export async function searchPosts(query=""){
	const q=sanitizeQuery(query);

	if(!q){
		return [];
	}

	const posts=await getPosts();

	return posts
		.filter(p=>
			p.title
				.toLowerCase()
				.includes(q)
		)
		.slice(0,20);
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
