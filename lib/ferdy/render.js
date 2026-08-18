import {
  SITE,
  url as buildUrl,
  amphtml,
  escapeHTML
} from "../config";

import { head } from "./head.js";
import { header } from "./header.js";
import { secheader } from "./secheader.js";
import { secfooter } from "./secfooter.js";
import { footer } from "./footer.js";

export function layout({

  title = SITE.name,
  description = SITE.description,
  kategori = "",
  canonical = "",
  image = "",
  schema = "",
  robots = "",
  content = ""

}) {

  const canonicalUrl =
    canonical || SITE.domain;

  const ampUrl =
    amphtml(
      canonicalUrl.replace(
        SITE.domain,
        ""
      )
    );

  const ogImage =
    image ||
    buildUrl(
      SITE.defaultImage
    );

  const page = {
    SITE,
    name: SITE.name,
    description: SITE.description,
    title,
    description,
    kategori,
    canonical,
    canonicalUrl,
    ampUrl,
    image,
    ogImage,
    schema,
    robots,
    content,
    escapeHTML
  };

  const html = `
<!DOCTYPE html>
<html lang='id' xmlns='http://www.w3.org/1999/xhtml' xmlns:b='http://www.google.com/2005/gml/b' xmlns:data='http://www.google.com/2005/gml/data' xmlns:expr='http://www.google.com/2005/gml/expr'>

<head>



${head(page)}

</head>

<body __processed_046ac43c-cdf6-4311-9a75-3ea1775342f5__='true' bis_register='W3sibWFzdGVyIjp0cnVlLCJleHRlbnNpb25JZCI6ImVwcGlvY2VtaG1ubGJoanBsY2drb2ZjaWllZ29tY29uIiwiYWRibG9ja2VyU3RhdHVzIjp7IkRJU1BMQVkiOiJlbmFibGVkIiwiRkFDRUJPT0siOiJlbmFibGVkIiwiVFdJVFRFUiI6ImVuYWJsZWQiLCJSRURESVQiOiJlbmFibGVkIiwiUElOVEVSRVNUIjoiZW5hYmxlZCIsIklOU1RBR1JBTSI6ImVuYWJsZWQiLCJUSUtUT0siOiJkaXNhYmxlZCIsIkxJTktFRElOIjoiZW5hYmxlZCIsIkNPTkZJRyI6ImRpc2FibGVkIn0sInZlcnNpb24iOiIyLjAuMjYiLCJzY29yZSI6MjAwMjYwfV0=' class='color-scheme-light' data-responsive='true' data-user-signed-in='false' data-view='app impressionTracker'>

${header(page)}



${content}



${secfooter(page)}
${footer(page)}

</body>
</html>
`;

  return new Response(html, {
    headers: {
      "content-type":
        "text/html;charset=UTF-8",
      "cache-control":
        "public,max-age=300"
    }
  });
}
