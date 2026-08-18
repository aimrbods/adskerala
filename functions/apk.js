import { layout } from "../lib/render";
import { SITE, canonical } from "../lib/config";
import { seo } from "../lib/seo";
import { withCache } from "../lib/cache";

export async function onRequest(context){
	return withCache(
		context,
		300,
		async()=>{

			return layout({
				title:"APK Download",
				description:"Kumpulan APK terbaru",
				canonical:canonical("/apk"),
				schema:seo({
					title:"APK Download",
					description:"Kumpulan APK terbaru"
				}),
				content:`
<h1>APK Download</h1>

<p>
Daftar APK terbaru.
</p>
`
			});

		}
	);
}
