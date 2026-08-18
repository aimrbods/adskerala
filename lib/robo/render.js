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
<html data-theme='default'>

<head>

<meta charset="UTF-8">

<meta
name="viewport"
content="width=device-width,initial-scale=1">

${head(page)}

</head>

<body class='no-user' data-action='lazyload@window-&gt;checkout--checkout#initCheckout' data-controller='checkout--checkout utilities--ab-test utilities--timer' data-utilities--timer-containers--countdown-outlet='.containers--countdown' id='teepublic'>

${header(page)}
${secheader(page)}
<main class="container">
${content}
</main>
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
