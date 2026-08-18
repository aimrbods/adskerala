import {
	SITE,
	canonical,
	sanitizeSlug,
	escapeJSON,
	cleanDescription
} from "./config";

export function seo({
	title = "",
	description = "",
	slug = "",
	image = "",
	published = "",
	updated = "",
	kategori = ""
}) {

	const cleanDesc = cleanDescription(description);
	const safeSlug = sanitizeSlug(slug);

	const isHome = !safeSlug;
    const slugKategori = sanitizeSlug(kategori);
	const url = canonical(isHome ? "/" : `/${safeSlug}`);
	const og = image || canonical(`/og/${safeSlug || "home"}.jpg`);

	const datePublished = published || new Date().toISOString();
	const dateModified = updated || datePublished;

	const schemas = [];

	// Homepage
	if (isHome) {
		schemas.push({
			"@context": "https://schema.org",
			"@type": "WebSite",
			"name": SITE.name,
			"url": SITE.domain
		});

		schemas.push({
			"@context": "https://schema.org",
			"@type": "WebPage",
			"name": title || SITE.name,
			"url": url,
			"description": cleanDesc
		});
	}

	// Artikel
	else {
		schemas.push({
			"@context": "https://schema.org",
			"@type": "BlogPosting",
			"headline": title,
			"description": cleanDesc,
			"image": og,
			"url": url,
			"mainEntityOfPage": url,
			"datePublished": datePublished,
			"dateModified": dateModified,
			"articleSection": kategori || "Artikel",
			"author": {
				"@type": "Organization",
				"name": SITE.name
			},
			"publisher": {
				"@type": "Organization",
				"name": SITE.name,
				"logo": {
					"@type": "ImageObject",
					"url": canonical("/logo.png")
				}
			}
		});
	}

	// Breadcrumb
	const items = [{
		"@type": "ListItem",
		"position": 1,
		"name": "Home",
		"item": SITE.domain
	}];

	if (!isHome) {

		if (kategori) {
			items.push({
				"@type": "ListItem",
				"position": 2,
				"name": kategori,
				"item": canonical(`/kategori/${slugKategori}`)
			});

			items.push({
				"@type": "ListItem",
				"position": 3,
				"name": title,
				"item": url
			});
		} else {
			items.push({
				"@type": "ListItem",
				"position": 2,
				"name": title,
				"item": url
			});
		}
	}

	schemas.push({
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		"itemListElement": items
	});

	return schemas.map(schema =>
`<script type="application/ld+json">
${JSON.stringify(schema)}
</script>`
	).join("\n");
}
