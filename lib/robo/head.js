export function head(page) {

  return `
<meta charset='utf-8'>
<title>${page.title}</title>
<link rel="icon" type="image/x-icon" href="${page.SITE.favicon}" />
<link rel="apple-touch-icon" href="${page.SITE.favicon}">
<link rel="canonical" href="${page.canonical}">
<link rel="amphtml" href="${page.canonical}/amp" />
<link rel="alternate" hreflang="id-id" href="${page.canonical}/amp"/>
<link rel="alternate" href="${page.canonical}/amp"/>
<link rel="alternate" hreflang="id" href="${page.canonical}/amp"/>
<link rel="alternate" hreflang="en" href="${page.canonical}/amp"/>
<link rel="alternate" hreflang="x-default" href="${page.canonical}/amp"/>
<link as='image' href='${page.image}' rel='preload'>
<link crossorigin href='https://fonts.googleapis.com' rel='preconnect'>
<link crossorigin href='https://ajax.googleapis.com' rel='preconnect'>
<link crossorigin href='https://www.googletagmanager.com' rel='preconnect'>
<link crossorigin href='https://www.gstatic.com' rel='preconnect'>
<link crossorigin href='https://connect.facebook.net' rel='preconnect'>
<link rel="stylesheet" href="https://cdn-stories.pages.dev/assets/bundles/style.css" media="all" />
<link as='font' crossorigin='anonymous' href='https://assets.teepublic.com/assets/Roobert-Medium-88ba78029f73fa9f18e1e3c31c1f076acdc49223af70a78b2ea4bdbab8168283.woff2' rel='preload' type='font/woff2'>
<link as='font' crossorigin='anonymous' href='https://assets.teepublic.com/assets/Roobert-SemiBold-9d9c1ae0fc78f67d82c4fc43987857f5b897d29b903701d1e97c2e207311d636.woff2' rel='preload' type='font/woff2'>
<link as='font' crossorigin='anonymous' href='https://assets.teepublic.com/assets/Roobert-Bold-e95979b74ebe06c1851ece294f8f7e9e6d3ad0d817d1968dcbfb26373f0b4de5.woff2' rel='preload' type='font/woff2'>
<link as='font' crossorigin='anonymous' href='https://assets.teepublic.com/assets/SharpGroteskBold-f0bacf6ef6410646205690dca3bc65f5bb2d31b9417a358ad9c07237a310d196.woff2' rel='preload' type='font/woff2'>
<script>
  (function(h,o,u,n,d) {
    h=h[d]=h[d]||{q:[],onReady:function(c){h.q.push(c)}}
    d=o.createElement(u);d.async=1;d.src=n
    n=o.getElementsByTagName(u)[0];n.parentNode.insertBefore(d,n)
  })(window,document,'script','https://www.datadoghq-browser-agent.com/us5/v5/datadog-rum.js','DD_RUM')
  
  DD_RUM.onReady(function() {
    DD_RUM.init({
      clientToken: 'pub8afcb76e7747723499bda481aef4828f',
      applicationId: '815ab20a-1d12-45bb-9881-005646b95f6b',
      site: 'us5.datadoghq.com',
      service: 'teepublic',
      env: 'production',
      version: '20240535745-3053-1',
      sessionSampleRate: 5,
      sessionReplaySampleRate: 0,
      traceSampleRate: 5,
      trackUserInteractions: true,
      trackResources: true,
      trackLongTasks: true,
      defaultPrivacyLevel: 'mask-user-input',
      allowedTracingUrls: [
        '${page.canonical}',
        '${page.canonical}'
      ]
    });
  })
</script>

<script>
  !function(){"use strict";window.RudderSnippetVersion="3.2.0";var e="rudderanalytics";window[e]||(window[e]=[])
  ;var rudderanalytics=window[e];if(Array.isArray(rudderanalytics)){
  if(true===rudderanalytics.snippetExecuted&&window.console&&console.error){
  console.error("RudderStack JavaScript SDK snippet included more than once.")}else{rudderanalytics.snippetExecuted=true,
  window.rudderAnalyticsBuildType="legacy";var sdkBaseUrl="https://cdn.rudderlabs.com";var sdkVersion="v3"
  ;var sdkFileName="rsa.min.js";var scriptLoadingMode="async"
  ;var r=["setDefaultInstanceKey","load","ready","page","track","identify","alias","group","reset","setAnonymousId","startSession","endSession","consent","addCustomIntegration"]
  ;for(var n=0;n<r.length;n++){var t=r[n];rudderanalytics[t]=function(r){return function(){var n
  ;Array.isArray(window[e])?rudderanalytics.push([r].concat(Array.prototype.slice.call(arguments))):null===(n=window[e][r])||void 0===n||n.apply(window[e],arguments)
  }}(t)}try{
  new Function('class Test{field=()=>{};test({prop=[]}={}){return prop?(prop?.property??[...prop]):import("");}}'),
  window.rudderAnalyticsBuildType="modern"}catch(i){}var d=document.head||document.getElementsByTagName("head")[0]
  ;var o=document.body||document.getElementsByTagName("body")[0];window.rudderAnalyticsAddScript=function(e,r,n){
  var t=document.createElement("script");t.src=e,t.setAttribute("data-loader","RS_JS_SDK"),r&&n&&t.setAttribute(r,n),
  "async"===scriptLoadingMode?t.async=true:"defer"===scriptLoadingMode&&(t.defer=true),
  d?d.insertBefore(t,d.firstChild):o.insertBefore(t,o.firstChild)},window.rudderAnalyticsMount=function(){!function(){
  if("undefined"==typeof globalThis){var e;var r=function getGlobal(){
  return"undefined"!=typeof self?self:"undefined"!=typeof window?window:null}();r&&Object.defineProperty(r,"globalThis",{
  value:r,configurable:true})}
  }(),window.rudderAnalyticsAddScript("".concat(sdkBaseUrl,"/").concat(sdkVersion,"/").concat(window.rudderAnalyticsBuildType,"/").concat(sdkFileName),"data-rsa-write-key","2HNPADTAqRU1fVtw8bfPRR44gtx")
  },
  "undefined"==typeof Promise||"undefined"==typeof globalThis?window.rudderAnalyticsAddScript("https://polyfill-fastly.io/v3/polyfill.min.js?version=3.111.0&features=Symbol%2CPromise&callback=rudderAnalyticsMount"):window.rudderAnalyticsMount()
  ;var loadOptions={
    sameDomainCookiesOnly: true, 
    useBeacon: false,
  };
  rudderanalytics.load("2HNPADTAqRU1fVtw8bfPRR44gtx","https://teepublicoox.dataplane.rudderstack.com",loadOptions)}}}();
  rudderanalytics.setAnonymousId("99cf0ae5-6234-4468-a1c1-6da4619cabf1");
</script>

<meta content='F9EF52AA90C6458518CEE48CF835744E' name='msvalidate.01'>
<meta content='width=device-width, initial-scale=1, maximum-scale=1' name='viewport'>
<meta content='${page.site_name}' name='cloudinary_cloud_name'>
<meta content='index, follow' name='robots'>
<meta content='${page.desc}' name='description'>
<meta property="og:title" content="${page.title}">
<meta property="og:description" content="${page.desc}">
<meta property="og:price:amount" content="16.00">
<meta property="og:price:currency" content="USD">
<meta property="og:type" content="website">
<meta property="og:url" content="${page.canonical}">
<meta property="og:image" content="${page.image}">
<meta property="og:site_name" content="${page.site_name}">
<meta property="product:price:amount" content="16.00">
<meta property="product:brand" content="${page.site_name}">
<meta property="product:price:currency" content="USD">
<meta property="product:availability" content="in stock">
<meta property="product:retailer_item_id" content="54469715D1V">
<meta property="product:condition" content="new">
<meta content='${page.site_name}' name='apple-mobile-web-app-title'>


<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MVDRFFD');</script>
<!-- End Google Tag Manager -->

<script>
  window.dataLayer = window.dataLayer || [];
</script>

<script>
  dataLayer.push({"event":"pageLoad","request__request_id":"458605a9-62ce-4d55-9a34-e7a426f498da","request__controller":"product_pages","request__action":"show","request__domain":"teepublic.com","request__base_url":"https://www.teepublic.com","request__ab_tests":{"con-3067-find-similar":"con-3067-find-similar-variant-button","con-3102-adspace-c":"con-3102-adspace-var-mugs-and-socks-c"},"request__safe_search":true,"request__referring_affiliate_id":null,"request__referring_affiliate_ua_id":null,"request__referring_affiliate_ga4_id":null,"request__referring_affiliate_network_id":null,"locale__locale":"en","locale__currency_iso":"USD","locale__gdprcookie":"all","locale__euvisitor":false,"cart__items":[],"design__design_id":54469715,"design__canvas_id":1,"design__product_id":321,"design__parent_id":"54469715D1V","design__variant_id":"19G79A1C","design__variant":"{\"Gender\":\"Male Fit\",\"Style\":\"Classic T-Shirt\",\"Color\":\"Black\"}","design__mock_image":"https://res.cloudinary.com/teepublic/image/private/s--S_P2GdrU--/t_Resized Artwork/c_crop,x_10,y_10/c_fit,w_470/c_crop,g_north_west,h_626,w_470,x_0,y_0/g_north_west,u_upload:v1462829015:production:blanks:mtl53ofohwq5goqjo9ke,x_-395,y_-325/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1702220495/production/designs/54469715_0.jpg","design__url":"${page.canonical}","design__canvas":"T-Shirt","design__canvas_canonical_name":"T-Shirt","design__design_title":"${page.title}","design__price":16.0,"design__price_usd":16.0,"design__price_in_currency":16.0,"design__primary_tag":"christmas-carol","design__owner_type":"designer","design__owner_id":8336,"design__on_sale":true,"design__currency_iso":"USD","design__feed_sku":null,"design__designer_name":"RetroReview","design__designer_ua_id":null,"design__designer_ga4_id":null,"design__marketing_sku":"54469715D1V19G79A1C"})
</script>

<script>
  window.dataLayer.push({
    "event": "productDetailImpression",
    "ecommerce": {
      "detail": {
         "products": [{
          "category": "T-Shirt",
          "parent_id": "54469715D1V",
          "product_id": "321",
          "price": "16.0",
          "price_usd": "16.0",
          "name": "${page.title}",
          "id": "54469715",
          "brand": "RetroReview",
          "design_color": "Black",
          "product_image": "https://res.cloudinary.com/teepublic/image/private/s--S_P2GdrU--/t_Resized Artwork/c_crop,x_10,y_10/c_fit,w_470/c_crop,g_north_west,h_626,w_470,x_0,y_0/g_north_west,u_upload:v1462829015:production:blanks:mtl53ofohwq5goqjo9ke,x_-395,y_-325/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1702220495/production/designs/54469715_0.jpg",
          "variant_id": "19G79A1C",
          "design_owner_id": "8336",
          "design_primary_tag": "christmas-carol",
          "design_on_sale": "true",
          "variant": '{"Gender":"Male Fit","Style":"Classic T-Shirt","Color":"Black"}',
            "dimension34": '54469715D1V19G79A1C',
            "dimension37": 'true',
            "dimension42": 'https://res.cloudinary.com/teepublic/image/private/s--S_P2GdrU--/t_Resized Artwork/c_crop,x_10,y_10/c_fit,w_470/c_crop,g_north_west,h_626,w_470,x_0,y_0/g_north_west,u_upload:v1462829015:production:blanks:mtl53ofohwq5goqjo9ke,x_-395,y_-325/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1702220495/production/designs/54469715_0.jpg',
            "dimension44": 'christmas-carol',
            "dimension46": '8336',
            "dimension47": 'designer'
         }]
       }
     }
  });
</script>

<!-- Google Analytics -->
<script type='text/javascript'>
window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
ga('create', 'UA-39467830-1', 'auto');
ga('require', 'GTM-KL7BC3L');
</script>
<script async src='https://www.google-analytics.com/analytics.js'></script>
<!-- End Google Analytics -->
`;
}
