import { SITE } from "./config";

export function renderAmp({ title="Auto Blog AMP", description="Artikel AMP cepat", kategori = "", canonical="", content="", image="" }){
	const url=canonical||SITE.domain;
	const og=image||`${SITE.domain}/og/default`;

 const affiliate =
    SITE.affiliate?.[
      String(kategori)
        .toLowerCase()
        .trim()
    ] || [];

  const affiliateHtml =
    affiliate.map(link => `
<a
href="${link.url}"
rel="nofollow sponsored">
${link.name}
</a>
`).join("");
  
	return new Response(`<!doctype html>
<html amp lang="id">
<head>
<meta charset="utf-8">
<title>${escapeHTML(title)}</title>
<link rel="canonical" href="${url}">
<meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1">
<meta name="description" content="${escapeHTML(description)}">
<meta name="robots" content="index,follow,max-image-preview:large">
<meta name="theme-color" content="#020617">
<meta property="og:type" content="article">
<meta property="og:title" content="${escapeHTML(title)}">
<meta property="og:description" content="${escapeHTML(description)}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${og}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${escapeHTML(title)}">
<meta name="twitter:description" content="${escapeHTML(description)}">
<meta name="twitter:image" content="${og}">
<script async src="https://cdn.ampproject.org/v0.js"></script>
<script async custom-element="amp-sidebar" src="https://cdn.ampproject.org/v0/amp-sidebar-0.1.js"></script>
<style amp-boilerplate>
body{
-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;
-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;
-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;
animation:-amp-start 8s steps(1,end) 0s 1 normal both
}
@-webkit-keyframes -amp-start{
from{visibility:hidden}
to{visibility:visible}
}
@-moz-keyframes -amp-start{
from{visibility:hidden}
to{visibility:visible}
}
@-ms-keyframes -amp-start{
from{visibility:hidden}
to{visibility:visible}
}
@-o-keyframes -amp-start{
from{visibility:hidden}
to{visibility:visible}
}
@keyframes -amp-start{
from{visibility:hidden}
to{visibility:visible}
}
</style>
<noscript>
<style amp-boilerplate>
body{
-webkit-animation:none;
-moz-animation:none;
-ms-animation:none;
animation:none
}
</style>
</noscript>
<style amp-custom>
:root{
--bg:#020617;
--card:#0f172a;
--text:#f8fafc;
--muted:#94a3b8;
--primary:#8b5cf6;
--border:#1e293b;
--shadow:0 10px 30px rgba(0,0,0,.35);
}
*{
box-sizing:border-box;
}
body{
margin:0;
font-family:Inter,Arial,sans-serif;
background:
radial-gradient(circle at top left,rgba(99,102,241,.15),transparent 30%),
radial-gradient(circle at bottom right,rgba(139,92,246,.12),transparent 30%),
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
}
.header{
position:sticky;
top:0;
z-index:999;
background:rgba(2,6,23,.78);
backdrop-filter:blur(14px);
border-bottom:1px solid rgba(255,255,255,.05);
}
.header-wrap{
max-width:1200px;
margin:auto;
padding:16px 20px;
display:flex;
align-items:center;
justify-content:space-between;
}
.logo{
font-size:24px;
font-weight:800;
letter-spacing:-.5px;
color:#fff;
}
.logo span{
background:linear-gradient(90deg,#8b5cf6,#06b6d4);
-webkit-background-clip:text;
-webkit-text-fill-color:transparent;
}
.menu-btn{
background:none;
border:none;
color:#fff;
font-size:28px;
cursor:pointer;
display:none;
}
.nav{
display:flex;
gap:20px;
flex-wrap:wrap;
}
.nav a{
font-size:14px;
color:var(--muted);
transition:.2s;
}
.container{
max-width:980px;
margin:auto;
padding:26px 20px;
}
.hero{
position:relative;
overflow:hidden;
padding:70px 30px;
border-radius:28px;
margin-bottom:34px;
background:linear-gradient(135deg,#4f46e5,#7c3aed);
box-shadow:0 20px 60px rgba(99,102,241,.35);
}
.hero:before{
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
margin:0 0 14px;
letter-spacing:-1px;
}
.hero p{
position:relative;
z-index:2;
font-size:18px;
max-width:720px;
color:#e0e7ff;
margin:0;
}
.hero-btn{
display:inline-block;
margin-top:24px;
padding:14px 24px;
border-radius:16px;
background:#fff;
color:#111827;
font-weight:700;
font-size:15px;
}
.section-title{
font-size:26px;
margin:0 0 20px;
font-weight:800;
}
.grid{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(280px,1fr));
gap:24px;
}
/* CARD */
.card{
overflow:hidden;
border-radius:24px;
background:linear-gradient(180deg,rgba(255,255,255,.03),rgba(255,255,255,.01));
border:1px solid rgba(255,255,255,.05);
transition:transform .28s ease,border-color .28s ease,box-shadow .28s ease;
box-shadow:var(--shadow);
}
.card:hover{
transform:translateY(-6px);
border-color:rgba(139,92,246,.45);
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
.badge{
display:inline-block;
padding:6px 12px;
border-radius:999px;
background:#312e81;
color:#c7d2fe;
font-size:12px;
margin-bottom:12px;
}
.card h2,
.card h3{
font-size:20px;
line-height:1.4;
margin:0 0 10px;
}
.card p{
font-size:14px;
color:var(--muted);
margin:0;
}
.post{
max-width:860px;
margin:auto;
}
.post amp-img{
border-radius:24px;
overflow:hidden;
margin-bottom:24px;
}
.post h1{
font-size:42px;
line-height:1.2;
margin:0 0 20px;
letter-spacing:-1px;
}
.post-content{
font-size:18px;
color:#dbe4ee;
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
.post-content p{
margin:20px 0;
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
background:rgba(255,255,255,.03);
border:1px solid rgba(255,255,255,.05);
font-size:14px;
}
.pagination .active{
background:#8b5cf6;
color:#fff;
}
.footer{
margin-top:70px;
padding:50px 20px;
border-top:1px solid rgba(255,255,255,.05);
background:rgba(255,255,255,.02);
}
.footer-wrap{
max-width:1100px;
margin:auto;
display:grid;
grid-template-columns:2fr 1fr 1fr;
gap:40px;
}
.footer-brand h3{
font-size:24px;
margin:0 0 12px;
}
.footer-brand p{
font-size:15px;
color:var(--muted);
max-width:420px;
margin:0;
}
.footer-menu h4{
font-size:16px;
margin:0 0 14px;
}
.footer-menu{
display:flex;
flex-direction:column;
gap:12px;
}
.footer-menu a{
font-size:14px;
color:var(--muted);
}
.footer-bottom{
margin-top:40px;
padding-top:20px;
border-top:1px solid rgba(255,255,255,.05);
text-align:center;
font-size:14px;
color:var(--muted);
}
/* MOBILE MENU */
.sidebar{
width:280px;
background:#020617;
padding:24px;
}
.sidebar-top{
display:flex;
align-items:center;
justify-content:space-between;
margin-bottom:24px;
}
.sidebar-title{
font-size:22px;
font-weight:800;
}
.sidebar-links{
display:flex;
flex-direction:column;
gap:14px;
}
.sidebar-links a{
padding:12px 0;
border-bottom:1px solid rgba(255,255,255,.05);
font-size:15px;
color:#e5e7eb;
}
/* MOBILE */
@media(max-width:768px){
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
.nav{
display:none;
}
.menu-btn{
display:block;
}
.footer-wrap{
grid-template-columns:1fr 1fr;
gap:24px;
}
.footer-brand{
grid-column:1/-1;
}
}
body{
margin:0;
background:#050816;
font-family:Arial,sans-serif;
color:#fff;
}
a{
text-decoration:none;
color:#fff;
}
.hero{
padding:28px 16px;
}
.hero-box{
background:linear-gradient(135deg,#4f46e5,#7c3aed);
padding:38px 22px;
border-radius:22px;
text-align:center;
box-shadow:0 10px 40px rgba(124,58,237,.35);
}
.hero-badge{
display:inline-block;
padding:8px 14px;
border-radius:999px;
background:rgba(255,255,255,.14);
font-size:12px;
font-weight:700;
margin-bottom:16px;
}
.hero h1{
margin:0;
font-size:34px;
line-height:1.1;
font-weight:900;
}
.hero p{
margin:16px 0 0;
font-size:15px;
line-height:1.7;
color:#e5e7eb;
}
.hero-btns{
display:flex;
justify-content:center;
gap:10px;
margin-top:24px;
flex-wrap:wrap;
}
.btn{
padding:12px 18px;
border-radius:12px;
background:#fff;
color:#111827;
font-size:14px;
font-weight:700;
}
.btn2{
background:#111827;
color:#fff;
border:1px solid rgba(255,255,255,.1);
}
.section{
padding:0 16px 40px;
}
.section-title{
margin-bottom:20px;
}
.section-title h2{
margin:0;
font-size:24px;
}
.section-title p{
margin:8px 0 0;
font-size:14px;
color:#94a3b8;
}
.grid{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(240px,1fr));
gap:18px;
}
.card{
background:#0f172a;
border:1px solid #1e293b;
border-radius:20px;
overflow:hidden;
transition:.2s;
}
.thumb{
aspect-ratio:16/9;
background:#111827;
display:flex;
align-items:center;
justify-content:center;
overflow:hidden;
}
.thumb img{
max-width:100%;
max-height:100%;
object-fit:contain;
}
.body{
padding:16px;
}
.badge{
display:inline-block;
padding:6px 10px;
border-radius:999px;
background:#4f46e5;
font-size:11px;
font-weight:700;
margin-bottom:12px;
}
.card h3{
margin:0;
font-size:18px;
line-height:1.5;
color:#f8fafc;
}
.pagination{
display:flex;
justify-content:center;
gap:10px;
margin-top:34px;
flex-wrap:wrap;
}
.pagination a{
padding:10px 14px;
border-radius:12px;
background:#111827;
border:1px solid #1e293b;
font-size:14px;
}
.pagination a.active{
background:#4f46e5;
border-color:#4f46e5;
}
@media(max-width:768px){
.hero{
padding:18px 12px;
}
.hero-box{
padding:30px 18px;
border-radius:18px;
}
.hero h1{
font-size:28px;
}
.grid{
grid-template-columns:1fr;
}
.section{
padding:0 12px 30px;
}
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
<!-- SIDEBAR -->
<amp-sidebar id="sidebar" layout="nodisplay" side="right" class="sidebar">
<div class="sidebar-top">
<div class="sidebar-title">⚡ ${SITE.name}</div>
<button on="tap:sidebar.close" style="background:none;border:none;color:#fff;font-size:26px;cursor:pointer;">✕</button>
</div>
<div class="sidebar-links">
<a href="/">Home</a>
<a href="/amp">AMP</a>
<a href="/rss.xml">RSS</a>
<a href="/sitemap.xml">Sitemap</a>
<a href="/about">Tentang Kami</a>
<a href="/contact">Contact</a>
<a href="/privacy-policy">Privacy Policy</a>
<a href="/terms">Terms</a>
<a href="/disclaimer">Disclaimer</a>
</div>
</amp-sidebar>
<!-- HEADER -->
<header class="header">
<div class="header-wrap">
<a href="/" class="logo">⚡ <span>${SITE.name}</span></a>
<button class="menu-btn" on="tap:sidebar.toggle" aria-label="Menu">☰</button>
<nav class="nav">
<a href="/">Home</a>
<a href="/amp">AMP</a>
<a href="/rss.xml">RSS</a>
<a href="/sitemap.xml">Sitemap</a>
</nav>
</div>
</header>
<!-- CONTENT -->
<main class="container">${content}  ${affiliateHtml} </main>
<!-- FOOTER -->
<footer class="footer">
<div class="footer-wrap">
<div class="footer-brand">
<h3>⚡ ${SITE.name}</h3>
<p>
Platform informasi aplikasi penghasil cuan,
AI modern, teknologi digital,
tips internet, dan tren online terbaru
dengan tampilan cepat, ringan,
dan modern.
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
</body>
</html>`,{
		headers:{
			"content-type":"text/html;charset=UTF-8",
			"cache-control":"public,max-age=300"
		}
	});
}

function escapeHTML(str=""){
	return String(str).replace(/[&<>"]/g,c=>({
		"&":"&amp;",
		"<":"&lt;",
		">":"&gt;",
		'"':"&quot;"
	}[c]));
}
