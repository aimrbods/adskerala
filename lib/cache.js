export async function withCache(context,ttl=300,handler){
	const cache=caches.default;

	const key=new Request(context.request.url,{
		method:"GET"
	});

	let response=await cache.match(key);

	if(response){
		return response;
	}

	response=await handler();

	if(!(response instanceof Response)){
		response=new Response(response);
	}

	const cached=new Response(response.body,response);

	cached.headers.set(
		"cache-control",
		`public,max-age=${ttl},stale-while-revalidate=60`
	);

	context.waitUntil(
		cache.put(
			key,
			cached.clone()
		)
	);

	return cached;
}
