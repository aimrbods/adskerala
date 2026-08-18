export function secheader(page){

  return `

<div class='m-explore-nav jsExploreNav' data-controller='navigation--tray-trigger rudderstack--link-clicked rudderstack--filter-clicked' data-navigation--tray-trigger-containers--drawer-component-outlet='.jsHeaderTray' data-rudderstack--filter-clicked-location-value='nav-sub' data-rudderstack--link-clicked-location-value='nav-sub'>
<section class="m-tab-nav m-tab-nav--init m-explore-nav__container wrapper" data-controller="utilities--tab" data-utilities--tab-initial-tab-value="0"><ul class='m-tab-nav__list'>
<li class="m-tab-nav__item"><a data-action='click-&gt;utilities--tab#changeTab click-&gt;rudderstack--filter-clicked#track' data-cart-id='c36915fadcdb2f4ebf6d0b63b4909417' data-filter-name='Category' data-filter-option-label='Explore Categories' data-tab-nav-index='0' data-utilities--tab-target='tab'>
Explore Categories
</a>
</li>
<li class="m-tab-nav__item"><a data-action='click-&gt;utilities--tab#changeTab click-&gt;rudderstack--filter-clicked#track' data-cart-id='c36915fadcdb2f4ebf6d0b63b4909417' data-filter-name='Canvas' data-filter-option-label='Popular Products' data-tab-nav-index='1' data-utilities--tab-target='tab'>
Popular Products
</a>
</li>
</ul>
<div class='m-tab-nav__content'>
<div class="m-tab-nav__tab-content" data-utilities--tab-target="content" data-tab-content-index="0"><div class='m-explore-nav__tab-content'>
<a data-rudderstack-event-type="link" data-action="click-&gt;rudderstack--link-clicked#track" data-link-label="Shop All Designs" data-href="/t-shirts" href="/t-shirts" class="link m-explore-nav__cta link--1 link--default">
<span class='link__content'>
Shop All Designs
</span>

</a>
<a data-rudderstack-event-type="link" data-action="click-&gt;rudderstack--link-clicked#track" data-link-label="${page.site_name}" data-href="${page.canonical}" title="${page.site_name}" href="${page.canonical}" class="link m-explore-nav__link link--1 link--default tp-btn--icon"><span class="teepublicon teepublicon--blue-default teepublicon-background--transparent"><img src="${page.SITE.favicon}" loading="auto" height="40" width="40" aria_hidden="true" focusable="false"></span>
<span class='link__content'>
${page.site_name}

</span>

</a><a data-rudderstack-event-type="link" data-action="click-&gt;rudderstack--link-clicked#track" data-link-label="SITUS TOTO" data-href="${page.canonical}" title="SITUS TOTO" href="${page.canonical}" class="link m-explore-nav__link link--1 link--default tp-btn--icon"><span class="teepublicon teepublicon--blue-default teepublicon-background--transparent"><img src="${page.SITE.favicon}" loading="auto" height="40" width="40" aria_hidden="true" focusable="false"></span>
<span class='link__content'>
SITUS TOTO

</span>

</a><a data-rudderstack-event-type="link" data-action="click-&gt;rudderstack--link-clicked#track" data-link-label="${page.site_name}" data-href="${page.canonical}" title="${page.site_name}" href="${page.canonical}" class="link m-explore-nav__link link--1 link--default tp-btn--icon"><span class="teepublicon teepublicon--blue-default teepublicon-background--transparent"><img src="${page.SITE.favicon}" loading="auto" height="40" width="40" aria_hidden="true" focusable="false"></span>
<span class='link__content'>
${page.site_name}

</span>

</a><a data-rudderstack-event-type="link" data-action="click-&gt;rudderstack--link-clicked#track" data-link-label="${page.site_name}" data-href="${page.canonical}" title="${page.site_name}" href="${page.canonical}" class="link m-explore-nav__link link--1 link--default tp-btn--icon"><span class="teepublicon teepublicon--blue-default teepublicon-background--transparent"><img src="${page.SITE.favicon}" loading="auto" height="40" width="40" aria_hidden="true" focusable="false"></span>
<span class='link__content'>
SLOT ONLINE

</span>

</a><a data-rudderstack-event-type="link" data-action="click-&gt;rudderstack--link-clicked#track" data-link-label="SLOT ${page.site_name}" data-href="${page.canonical}" title="SLOT ${page.site_name}" href="${page.canonical}" class="link m-explore-nav__link link--1 link--default tp-btn--icon"><span class="teepublicon teepublicon--blue-default teepublicon-background--transparent"><img src="${page.SITE.favicon}" loading="auto" height="40" width="40" aria_hidden="true" focusable="false"></span>
<span class='link__content'>
SLOT ${page.site_name}

</span>

</a><a data-rudderstack-event-type="link" data-action="click-&gt;rudderstack--link-clicked#track" data-link-label="LINK ${page.site_name}" data-href="${page.canonical}" title="LINK ${page.site_name}" href="${page.canonical}" class="link m-explore-nav__link link--1 link--default tp-btn--icon"><span class="teepublicon teepublicon--blue-default teepublicon-background--transparent"><img src="${page.SITE.favicon}" loading="auto" height="40" width="40" aria_hidden="true" focusable="false"></span>
<span class='link__content'>
LINK ${page.site_name}

</span>

</a><a data-rudderstack-event-type="link" data-action="click-&gt;rudderstack--link-clicked#track" data-link-label="DAFTAR ${page.site_name}" data-href="${page.canonical}" title="DAFTAR ${page.site_name}" href="${page.canonical}" class="link m-explore-nav__link link--1 link--default tp-btn--icon"><span class="teepublicon teepublicon--blue-default teepublicon-background--transparent"><img src="${page.SITE.favicon}" loading="auto" height="40" width="40" aria_hidden="true" focusable="false"></span>
<span class='link__content'>
DAFTAR ${page.site_name}

</span>

</a><a data-rudderstack-event-type="link" data-action="click-&gt;rudderstack--link-clicked#track" data-link-label="${page.site_name} SLOT" data-href="${page.canonical}" title="${page.site_name} SLOT" href="${page.canonical}" class="link m-explore-nav__link link--1 link--default tp-btn--icon"><span class="teepublicon teepublicon--blue-default teepublicon-background--transparent"><img src="${page.SITE.favicon}" loading="auto" height="40" width="40" aria_hidden="true" focusable="false"></span>
<span class='link__content'>
${page.site_name} SLOT

</span>

</a></div>
</div>
</div>

</section></div>

<form id="applepay_form" action="/checkout/applepay" accept-charset="UTF-8" method="post"><input type="hidden" name="authenticity_token" value="zPTJiwfSpOCkpxBB0kHtUzaFMCS1uH-1OB-41EPbX_a2wLww2oNmb2FaNiQH9CTAj40Ux-VoXfV_bUh6-9PWEA" autocomplete="off" /><input type="hidden" name="applepay_nonce" id="applepay_nonce" autocomplete="off" /><input type="hidden" name="applepay_address" id="applepay_address" autocomplete="off" /><input type="hidden" name="applepay_shipping" id="applepay_shipping" autocomplete="off" /><input type="hidden" name="checkout[payment_option]" id="checkout_payment_option" value="ApplePay" autocomplete="off" /></form>




<div class='main-wrapper overflow-hidden'>
<div id='site'>
<div id='fb-root'></div>
<noscript>
<div class='no-js-warning'>
You have Javascript disabled. Javascript is required for this site to function properly.
Please enable Javascript and return here.
</div>
</noscript>
<div id='content'>
<div class='flash x'>
</div>

<script type='application/ld+json'>
{
  "@context":    "http://schema.org",
  "@type":       "Product",
  "name":        "${page.title}",
  "description": "${page.desc}",
  "category":    "T-Shirt",
  "url":         "${page.canonical}",
  "sku":         "54469715D1V19G79A1C",
  "image":       {
                    "@type": "ImageObject",
                    "url": "${page.image}",
                    "thumbnail": "${page.image}"
  },
  "offers":      {
    "@type":         "Offer",
    "priceCurrency": "USD",
    "price":         "16.00",
    "availability":  "http://schema.org/InStock",
    "priceValidUntil": "2025-12-17",
    "suggestedGender": "http://schema.org/Male",
    "hasMerchantReturnPolicy": {
      "@type": "MerchantReturnPolicy",
      "merchantReturnDays": "30",
      "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow"
    }
  }
}

</script>

<div class='jsDesignSecretId m-design__secret-id hidden'>
Design ID:
54469715
</div>
<div class='jsDesignId' style='display: none;'>54469715</div>
<div class='jsCanvasId' style='display: none;'>1</div>
<div class='jsDesignOnSale' style='display: none;'>true</div>
<div class='jsSizeChartCanvasId' style='display:none;'>1</div>
<div class='m-design jsPdpDesign m-design--on-sale'>
<div class='contain contain--wide-3'>

<div class='m-design__content'>


<div class='m-design__product' data-controller='rudderstack--link-clicked' data-rudderstack--link-clicked-location-value='pdp'>
<div class='m-design-details__title'>
<h1 class='h__h1--sm h--no-s-b' title='${page.title} - Christmas Carol - T-Shirt'>${page.title}</h1>
<div class='m-design__prices'>
<span class='m-design__price m-design__price--sale jsProductSalePrice'>
$777
</span>
<span class='m-design__price m-design__price--regular jsProductRegularPrice'>
$888
</span>
</div>

</div>
<div class='m-design__preview'>
<div class='m-product-preview' data-controller='rudderstack--filter-clicked' data-rudderstack--filter-clicked-location-value='product_preview'>
<div class='m-design__admin-tools'>
<div class='m-design__favorite-button-container' data-controller='rudderstack--filter-clicked design-tile--favorite' data-design-tile--favorite-add-icon-path-value='https://assets.teepublic.com/assets/teepublicons/heart_outline_primary500-aca86b959a2c54c785eda99a573d6d36c710e4020198f005b663335568299452.svg' data-design-tile--favorite-remove-icon-path-value='https://assets.teepublic.com/assets/teepublicons/heart_filled_danger500-e771e023bff5a3a668324db08daf887281d612a4d9e70d5e084c1a9052129bff.svg' data-rudderstack--filter-clicked-account-type-value='guest' data-rudderstack--filter-clicked-location-value='product_preview'>
<button type="button" class="btn tp-favorite-button tp-favorite-button--inactive tp-btn--medium btn--white" data-action="click-&gt;rudderstack--filter-clicked#track click-&gt;design-tile--favorite#redirectSignUpPage touchstart-&gt;design-tile--favorite#handleTouch mouseenter-&gt;utilities--tooltip#show mouseleave-&gt;utilities--tooltip#hide" data-cart-id="c36915fadcdb2f4ebf6d0b63b4909417" data-filter-name="heart_icon" data-filter-option-label="add_to_favorites" data-controller="utilities--tooltip" data-utilities--tooltip-target="element" data-utilities--tooltip-placement-value="left" data-button-action="add" data-design-id="54469715" data-product-id="321" data-redirect-route="/users/sign_up">
<div class='button__content'>
<span class="teepublicon teepublicon--color-neutral-500 teepublicon-background--transparent"><img src="https://assets.teepublic.com/assets/teepublicons/heart_outline_neutral500-d0f44092d0f4b0ebf862fd41310088de645ae521b8525b1ab75997142f61e9a5.svg" loading="lazy" height="20" width="20" aria_hidden="true" focusable="false"></span>

<div class="tp-tooltip tp-favorite-button__tooltip" data-utilities--tooltip-target="tooltip" role="tooltip">Create an account to favorite this design!
<div class='tp-tooltip--arrow' data-popper-arrow=''></div>
</div>

</div>

</button>
</div>
</div>
<div class='m-product-preview__main jsProductMainImages'>
<div class='m-product-preview__gallery'>
<div class='glide m-product-preview__glider jsProductImgGlide'>
<div class='m-product-preview__back-flag' style='display: none;'>
<div class='jsProductPreviewImgLabel'>
Back
</div>
</div>
<div class='glide__track m-product-preview__glider-track' data-glide-el='track'>
<ul class='glide__slides'>
<li class='glide__slide m-product-preview__glider-slide' data-default='active' data-id='0' data-label=''>
<picture class='m-product-preview__glider-img'>
<img alt='${page.title}' class='mockup jsProductMainImage' src='${page.image}'>
</picture>
</li>
<li class='glide__slide m-product-preview__glider-slide' data-default='' data-id='1' data-label=''>
<picture class='m-product-preview__glider-img'>
<img alt='${page.title}' class='preview jsProductMainImage' src='${page.image}'>
</picture>
</li>
</ul>
</div>
<div class='glide__arrows'>
<button type="button" class="btn glide__arrow m-product-preview__glider-ctrl next jsGalleryGlideArrowNext tp-btn--medium" aria-label="Next Image" data-action="click-&gt;rudderstack--filter-clicked#track" data-cart-id="c36915fadcdb2f4ebf6d0b63b4909417" data-filter-name="next" tabindex="0">
<div class='button__content'>
<span class="teepublicon teepublicon--blue-default teepublicon-background--light-default"><img src="https://assets.teepublic.com/assets/teepublicons/arrow_right_neutral900-2a0eae4c27392751071e1b2af2fb4575bdba340ee7bc9d7dfdd54da1d291348a.svg" loading="lazy" height="24" width="24" aria_hidden="true" focusable="false"></span>

</div>

</button><button type="button" class="btn glide__arrow m-product-preview__glider-ctrl prev jsGalleryGlideArrowPrev tp-btn--medium" aria-label="Previous Image" data-action="click-&gt;rudderstack--filter-clicked#track" data-cart-id="c36915fadcdb2f4ebf6d0b63b4909417" data-filter-name="previous" tabindex="0">
<div class='button__content'>
<span class="teepublicon teepublicon--blue-default teepublicon-background--light-default"><img src="https://assets.teepublic.com/assets/teepublicons/arrow_right_neutral900-2a0eae4c27392751071e1b2af2fb4575bdba340ee7bc9d7dfdd54da1d291348a.svg" loading="lazy" height="24" width="24" aria_hidden="true" focusable="false"></span>

</div>

</button></div>
</div>
<div class='m-product-preview__thumbs jsProductPreviewThumbs jsProductImgGlideCtrls' data-glide-el='controls'>
<a data-id="0" href="javascript:void(0);" class="link m-product-preview__thumb jsProductPreviewThumb jsCtrl on">
<span class='link__content'>
<picture data-action='click-&gt;rudderstack--filter-clicked#track' data-cart-id='c36915fadcdb2f4ebf6d0b63b4909417' data-filter-name='thumbnail' data-glide-dir='0'>
<img alt='${page.title}' class='mockup' loading='lazy' src='${page.image}'>
</picture>

</span>

</a><a data-id="1" href="javascript:void(0);" class="link m-product-preview__thumb jsProductPreviewThumb jsCtrl">
<span class='link__content'>
<picture data-action='click-&gt;rudderstack--filter-clicked#track' data-cart-id='c36915fadcdb2f4ebf6d0b63b4909417' data-filter-name='thumbnail' data-glide-dir='1'>
<img alt='${page.title}' class='preview' loading='lazy' src='${page.image}'>
</picture>

</span>

</a></div>
</div>
</div>
</div>

</div>
<div class='m-design__options' data-controller='rudderstack--checkout-clicked rudderstack--link-clicked' data-rudderstack--checkout-clicked-cart-id-value='c36915fadcdb2f4ebf6d0b63b4909417' data-rudderstack--checkout-clicked-currency-code-value='USD' data-rudderstack--checkout-clicked-discount-usd-value='0.0' data-rudderstack--checkout-clicked-location-value='pdp' data-rudderstack--checkout-clicked-on-sale-savings-usd-value='0.0' data-rudderstack--checkout-clicked-product-revenue-usd-value='0.0' data-rudderstack--checkout-clicked-products-value='[]' data-rudderstack--checkout-clicked-request-action-value='show' data-rudderstack--checkout-clicked-request-controller-value='product_pages' data-rudderstack--link-clicked-location-value='pdp'>
<div class='m-design__cart-config'>
<form action='/add_to_cart' class='m-cart-config jsConfigOptions jsConfigForm' method='POST'>
<div class='m-cart-config__option m-cart-config__option--color jsCartConfigColorOption' data-action='change-&gt;rudderstack--filter-clicked#track' data-cart-id='c36915fadcdb2f4ebf6d0b63b4909417' data-controller='rudderstack--filter-clicked' data-filter-name='color' data-rudderstack--filter-clicked-location-value='product_attributes'>
<p class='m-cart-config__color-label'>
<strong>Color: </strong>
<span class='m-cart-config__color-name jsConfigColorName'>Black</span>
</p>
<div class='m-cart-config__colors2 jsCartConfigColors jsHorizontalScroll' role='radiogroup'>
</div>
</div>


<div class='m-cart-config__option radio-selector' data-action='change-&gt;rudderstack--filter-clicked#track' data-cart-id='c36915fadcdb2f4ebf6d0b63b4909417' data-controller='rudderstack--filter-clicked' data-filter-name='gender' data-rudderstack--filter-clicked-location-value='product_attributes'>
<div class='m-cart-config__select-label'>
</div>
<a href="${page.canonical}/amp" class="btn-x">DAFTAR DISINI</a>
<a href="${page.canonical}/amp" class="btn-x">LOGIN DISINI</a>

<style>
.btn-x{
  display:inline-block;
  min-width:200px;       /* panjang minimum tombol */
  text-align:center;     /* teks di tengah */
  padding:14px 28px;     /* lebih besar dari 12x18 */
  margin:5px;
  background:#e177a2;
  color:#fff;
  font-weight:700;
  border-radius:10px;
  text-decoration:none;
  box-shadow:0 2px 6px rgba(0,0,0,.2);
  cursor:pointer;
}
.btn-x:hover{
  background:#e177a2;    /* warna saat hover */
}
/* Sembunyikan total kolom kanan di desktop kalau kosong */
.right-rail:empty,
.sidebar:empty,
.product__aside:empty {
  display: none !important;
}

/* Jika pakai grid 2 kolom, jadikan 1 kolom saat kolom kanan hilang */
.page-grid {
  display: grid;
  grid-template-columns: 1fr; /* semula: 1fr 360px */
  gap: 24px;
}
</style>
</div>
</div>

<div class='m-cart-config__option radio-selector' data-action='change-&gt;rudderstack--filter-clicked#track' data-cart-id='c36915fadcdb2f4ebf6d0b63b4909417' data-controller='rudderstack--filter-clicked update-label' data-filter-name='style' data-rudderstack--filter-clicked-location-value='product_attributes'>
<div class='m-cart-config__select-label'>
Style
</div>
<div class='m-cart-config__quick-info-label' data-update-label-target='label'></div>
<div class='radio-selector__radios radio-selector__radios--wrap jsCartConfigRadio radio-selector__radios--wrap-3 style'>
<label>
<input checked class='radio-selector__radio' type='radio' value='79'>
<span class='radio-selector__select'>Classic</span>
</label>
<label>
<input class='radio-selector__radio' type='radio' value='218'>
<span class='radio-selector__select'>Heavyweight</span>
</label>
<label>
<input class='radio-selector__radio' type='radio' value='80'>
<span class='radio-selector__select'>Tri-Blend</span>
</label>
<label>
<input class='radio-selector__radio' type='radio' value='395'>
<span class='radio-selector__select'>Streetwear</span>
</label>
<label>
<input class='radio-selector__radio' type='radio' value='135'>
<span class='radio-selector__select'>Premium</span>
</label>
<label>
<input class='radio-selector__radio' type='radio' value='81'>
<span class='radio-selector__select'>V-Neck</span>
</label>
<label>
<input class='radio-selector__radio' type='radio' value='378'>
<span class='radio-selector__select'>Vintage</span>
</label>
<label>
<input class='radio-selector__radio' type='radio' value='370'>
<span class='radio-selector__select'>Tall</span>
</label>
<label>
<input class='radio-selector__radio' type='radio' value='371'>
<span class='radio-selector__select'>Active</span>
</label>
</div>
</div>

<div class='m-cart-config__option radio-selector' data-action='change-&gt;rudderstack--filter-clicked#track' data-cart-id='c36915fadcdb2f4ebf6d0b63b4909417' data-controller='rudderstack--filter-clicked' data-filter-name='size' data-rudderstack--filter-clicked-location-value='product_attributes'>
<div class='m-cart-config__select-label'>
Size
<a aria-label="Size Chart" data-rudderstack-event-type="link" data-action="click-&gt;rudderstack--link-clicked#track" data-link-label="View Size Chart" data-href="javascript:void(0);" tabindex="0" href="javascript:void(0);" class="link m-cart-config__sizer-mobile-ctrl jsShowSliderSizechart link__cta link__cta--on-light link--small tp-btn--icon"><span class="teepublicon teepublicon--blue-default teepublicon-background--transparent teepublicon-spacing--right"><img src="https://assets.teepublic.com/assets/teepublicons/hanger_primary500-626f3e1864da84e8e4c6f756207b72ced5d4f2cb5912d613828546eb0bf8c478.svg" loading="lazy" height="16" width="16" aria_hidden="true" focusable="false"></span>
<span class='link__content'>
View Size Chart

</span>

</a><a aria-label="Size Chart" data-canvas="T-Shirt" data-rudderstack-event-type="link" data-action="click-&gt;rudderstack--link-clicked#track" data-link-label="View Size Chart" data-href="javascript:void(0);" id="gtmSizeChart" tabindex="0" href="javascript:void(0);" class="link m-cart-config__sizechart-desktop-ctrl jsSizechartOpen link__cta link__cta--on-light link--small tp-btn--icon"><span class="teepublicon teepublicon--blue-default teepublicon-background--transparent teepublicon-spacing--right"><img src="https://assets.teepublic.com/assets/teepublicons/hanger_primary500-626f3e1864da84e8e4c6f756207b72ced5d4f2cb5912d613828546eb0bf8c478.svg" loading="lazy" height="16" width="16" aria_hidden="true" focusable="false"></span>
<span class='link__content'>                                                                                                                                                                  
View Size Chart

</span>

</a></div>
<div class='radio-selector__radios radio-selector__radios--wrap jsCartConfigRadio radio-selector__radios--wrap-4 size'>
<label>
<input class='radio-selector__radio' type='radio' value='21'>
<span class='radio-selector__select'>S</span>
</label>
<label>
<input class='radio-selector__radio' type='radio' value='22'>
<span class='radio-selector__select'>M</span>
</label>
<label>
<input class='radio-selector__radio' type='radio' value='23'>
<span class='radio-selector__select'>L</span>
</label>
<label>
<input class='radio-selector__radio' type='radio' value='24'>
<span class='radio-selector__select'>XL</span>
</label>
<label>
<input class='radio-selector__radio' type='radio' value='25'>
<span class='radio-selector__select'>2XL</span>
</label>
<label>
<input class='radio-selector__radio' type='radio' value='26'>
<span class='radio-selector__select'>3XL</span>
</label>
<label>
<input class='radio-selector__radio' type='radio' value='83'>
<span class='radio-selector__select'>4XL</span>
</label>
<label>
<input class='radio-selector__radio' type='radio' value='84'>
<span class='radio-selector__select'>5XL</span>
</label>
</div>
</div>

<div class='m-cart-config__quantity m-cart-config__option'>
<div class='m-cart-config__select-label'>Quantity</div>
<div class='m-cart-config__quantity-container'>
<div class='quantity-stepper__container'>
<button aria-label='decrement item quantity' class='btn--segmented btn--segmented--neutral quantity-stepper__controls jsQuantityDecrement' data-action='click-&gt;rudderstack--filter-clicked#track' data-cart-id='c36915fadcdb2f4ebf6d0b63b4909417' data-controller='rudderstack--filter-clicked' data-filter-name='quantity' data-input-type='increment' data-rudderstack--filter-clicked-location-value='product_attributes' type='button'>-</button>
<input class='form-control jsProductPageQuantity jsQuantityStepper' data-action='change-&gt;rudderstack--filter-clicked#track' data-cart-id='c36915fadcdb2f4ebf6d0b63b4909417' data-controller='rudderstack--filter-clicked' data-filter-name='quantity' data-rudderstack--filter-clicked-location-value='product_attributes' id='jsProductPageQuantity' max='100' min='1' name='quantity' tabindex='-1' type='number' value='1'>
<button aria-label='increment item quantity' class='btn--segmented btn--segmented--neutral quantity-stepper__controls jsQuantityIncrement' data-action='click-&gt;rudderstack--filter-clicked#track' data-cart-id='c36915fadcdb2f4ebf6d0b63b4909417' data-controller='rudderstack--filter-clicked' data-filter-name='quantity' data-input-type='increment' data-rudderstack--filter-clicked-location-value='product_attributes' type='button'>+</button>
</div>

</div>
</div>
<input class='field' id='canvas_id' type='hidden' value='1'>
<input class='field' id='product_id' type='hidden' value='321'>

</form>

</div>
<div class='cqd-banner m-design__cqd-banner'>
<div class='cqd-banner__container'>
<div class="tp-text-note cqd-banner__banner tp-text-note--information tp-text-note--on-light"><span class="teepublicon teepublicon--blue-default teepublicon-background--transparent tp-text-note--icon"><svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 48 48" width="24" height="24" focusable="false" aria-hidden="true"><path d="M28.595 5.507c-.198-1.463-1.789-2.005-2.847-.976-2.148 2.09-5.57 5.816-9.26 11.392-3.87 5.85-5.614 9.665-6.377 11.688-.372.988.222 1.917 1.273 2.005 1.357.113 3.646.222 7.416.222h.023c-.015.711-.024 1.458-.024 2.242 0 4.794.308 8.222.606 10.416.198 1.463 1.788 2.005 2.847.976 2.148-2.089 5.57-5.816 9.259-11.392 3.87-5.85 5.615-9.665 6.377-11.688.372-.988-.221-1.917-1.273-2.004-1.357-.113-3.645-.223-7.415-.223h-.023c.015-.711.024-1.458.024-2.242 0-4.794-.308-8.222-.606-10.416Z"></path></svg></span>
<div class='tp-text-note__body'>

<p class='tp-text-note__text'>
Get <span class="strong">Unlock 15%</span> OFF Instantly When You Buy <span class="strong">5+ ${page.site_name}

</p>

</div>
</div></div>
</div>
<div class='m-design__tip-container jsProductTips' style=''>

</div>
<div class='m-design__buy-ctas'>
<div class='m-design__cart-buy-now jsApplePayCheckout hidden apple-pay-button-with-text' data-action='click-&gt;utilities--ab-test#endTestClick click-&gt;rudderstack--checkout-clicked#track' data-checkout--checkout-target='applePayBuyNow' data-designId='84956154' data-rudderstack-checkout-type='apple-pay'></div>

<button class='m-design__cart-add btn btn--big btn--full jsAddToCart' data-action='click-&gt;rudderstack--link-clicked#track' data-design='84956154' data-link-label='${page.site_name}' data-rudderstack-event-type='cta'>
${page.site_name}
</button>


</div>
<div class='guarantee m-design__guarantee'>
<span class="teepublicon teepublicon--blue-default teepublicon-background--transparent">
  <img src="${page.logoimage}" 
       alt="${page.site_name} Badge" 
       loading="lazy" 
       style="max-width:80px; height:auto; display:block;">
</span>
<div class='guarantee__text'>
<p>
Perfection made simple.
<strong>Zero fees, zero hassle.</strong>
</p>
<a data-controller="rudderstack--link-clicked" data-rudderstack--link-clicked-location-value="pdp" data-rudderstack-event-type="link" data-action="click-&gt;rudderstack--link-clicked#track" data-link-label="${page.site_name}" data-href="${page.canonical}" target="_blank" href="${page.canonical}" class="link link__cta link__cta--on-light link--default">
<span class='link__content'>
${page.site_name}

</span>

</a></div>
</div>


<div class='m-design-details__description' data-controller='utilities--read-more'>
<h3 class='m-design-details__description-title'>Description</h3>
<p class='m-design-details__description-text' data-utilities--read-more-target='content'>
${page.desc}
</p>
<button type="button" class="btn m-design-details__description-button tp-btn--medium btn--no-background btn--cta btn--cta--on-light" data-utilities--read-more-target="showMoreBtn" data-action="utilities--read-more#showMore" style="display:none;">
<div class='button__content'>
Read more
</div>

</button>
</div>
</div>
</div>
</div>
</div>
<div class='m-similar-designs jsSimilarProducts'>
</div>
<div class="m-tab-nav__tab-content" data-also-available-products-target="tilesContainer" data-category-content="adult_apparel" data-utilities--tab-target="content" data-tab-content-index="1"></div>
<div class="m-tab-nav__tab-content" data-also-available-products-target="tilesContainer" data-category-content="kids_apparel" data-utilities--tab-target="content" data-tab-content-index="2"></div>
<div class="m-tab-nav__tab-content" data-also-available-products-target="tilesContainer" data-category-content="accessories" data-utilities--tab-target="content" data-tab-content-index="3"></div>
<div class="m-tab-nav__tab-content" data-also-available-products-target="tilesContainer" data-category-content="${page.title}_goods" data-utilities--tab-target="content" data-tab-content-index="4"></div>
</div>
<div data-also-available-products-target="loader" class="tp-loader m-tab-nav__loader tp-loader--inline hidden"><div class='tp-loader__spinner updating tp-loader__spinner--inline'></div>
</div>
</section>
</div>

</div>
<div class='m-design__ratings'>
<h3 class='m-design__ratings-heading'>People Love ${page.site_name}</h3>
<div class='m-design__ratings-services'>
<div class='m-design__ratings-service'>
<div class='m-design__ratings-service-name'>Trustpilot Rating</div>
<div class='m-design__ratings-service-stars'>
<span class="teepublicon teepublicon--blue-default teepublicon-background--transparent"><img src="https://assets.teepublic.com/assets/teepublicons/star_warning400-140c727473c9c31e0f5d9ffc791a31dc3ba8dfccc44380702fd86fd805ef817d.svg" loading="lazy" height="20" width="20" aria_hidden="true" focusable="false"></span>
<span class="teepublicon teepublicon--blue-default teepublicon-background--transparent"><img src="https://assets.teepublic.com/assets/teepublicons/star_warning400-140c727473c9c31e0f5d9ffc791a31dc3ba8dfccc44380702fd86fd805ef817d.svg" loading="lazy" height="20" width="20" aria_hidden="true" focusable="false"></span>
<span class="teepublicon teepublicon--blue-default teepublicon-background--transparent"><img src="https://assets.teepublic.com/assets/teepublicons/star_warning400-140c727473c9c31e0f5d9ffc791a31dc3ba8dfccc44380702fd86fd805ef817d.svg" loading="lazy" height="20" width="20" aria_hidden="true" focusable="false"></span>
<span class="teepublicon teepublicon--blue-default teepublicon-background--transparent"><img src="https://assets.teepublic.com/assets/teepublicons/star_warning400-140c727473c9c31e0f5d9ffc791a31dc3ba8dfccc44380702fd86fd805ef817d.svg" loading="lazy" height="20" width="20" aria_hidden="true" focusable="false"></span>
<span class="teepublicon teepublicon--blue-default teepublicon-background--transparent"><img src="https://assets.teepublic.com/assets/teepublicons/star_half_warning400-9c7cfa17d17f2c09f38dcb6a7a16abe5c16e8a8b4153c91472d7d8ac39798e4e.svg" loading="lazy" height="20" width="20" aria_hidden="true" focusable="false"></span>
</div>
<div class='m-design__ratings-details'>4.5 out of 5</div>
</div>
<div class='m-design__ratings-service'>
<div class='m-design__ratings-service-name'>Zendesk Satisfaction Rating</div>
<div class='m-design__ratings-service-stars'>
<span class="teepublicon teepublicon--blue-default teepublicon-background--transparent"><img src="https://assets.teepublic.com/assets/teepublicons/star_warning400-140c727473c9c31e0f5d9ffc791a31dc3ba8dfccc44380702fd86fd805ef817d.svg" loading="lazy" height="20" width="20" aria_hidden="true" focusable="false"></span>
<span class="teepublicon teepublicon--blue-default teepublicon-background--transparent"><img src="https://assets.teepublic.com/assets/teepublicons/star_warning400-140c727473c9c31e0f5d9ffc791a31dc3ba8dfccc44380702fd86fd805ef817d.svg" loading="lazy" height="20" width="20" aria_hidden="true" focusable="false"></span>
<span class="teepublicon teepublicon--blue-default teepublicon-background--transparent"><img src="https://assets.teepublic.com/assets/teepublicons/star_warning400-140c727473c9c31e0f5d9ffc791a31dc3ba8dfccc44380702fd86fd805ef817d.svg" loading="lazy" height="20" width="20" aria_hidden="true" focusable="false"></span>
<span class="teepublicon teepublicon--blue-default teepublicon-background--transparent"><img src="https://assets.teepublic.com/assets/teepublicons/star_warning400-140c727473c9c31e0f5d9ffc791a31dc3ba8dfccc44380702fd86fd805ef817d.svg" loading="lazy" height="20" width="20" aria_hidden="true" focusable="false"></span>
<span class="teepublicon teepublicon--blue-default teepublicon-background--transparent"><img src="https://assets.teepublic.com/assets/teepublicons/star_half_warning400-9c7cfa17d17f2c09f38dcb6a7a16abe5c16e8a8b4153c91472d7d8ac39798e4e.svg" loading="lazy" height="20" width="20" aria_hidden="true" focusable="false"></span>
</div>
<div class='m-design__ratings-details'>4.7 out of 5</div>
</div>
<div class='m-design__ratings-service'>
<div class='m-design__ratings-service-name'>Google Customer Reviews</div>
<div class='m-design__ratings-service-stars'>
<span class="teepublicon teepublicon--blue-default teepublicon-background--transparent"><img src="https://assets.teepublic.com/assets/teepublicons/star_warning400-140c727473c9c31e0f5d9ffc791a31dc3ba8dfccc44380702fd86fd805ef817d.svg" loading="lazy" height="20" width="20" aria_hidden="true" focusable="false"></span>
<span class="teepublicon teepublicon--blue-default teepublicon-background--transparent"><img src="https://assets.teepublic.com/assets/teepublicons/star_warning400-140c727473c9c31e0f5d9ffc791a31dc3ba8dfccc44380702fd86fd805ef817d.svg" loading="lazy" height="20" width="20" aria_hidden="true" focusable="false"></span>
<span class="teepublicon teepublicon--blue-default teepublicon-background--transparent"><img src="https://assets.teepublic.com/assets/teepublicons/star_warning400-140c727473c9c31e0f5d9ffc791a31dc3ba8dfccc44380702fd86fd805ef817d.svg" loading="lazy" height="20" width="20" aria_hidden="true" focusable="false"></span>
<span class="teepublicon teepublicon--blue-default teepublicon-background--transparent"><img src="https://assets.teepublic.com/assets/teepublicons/star_warning400-140c727473c9c31e0f5d9ffc791a31dc3ba8dfccc44380702fd86fd805ef817d.svg" loading="lazy" height="20" width="20" aria_hidden="true" focusable="false"></span>
<span class="teepublicon teepublicon--blue-default teepublicon-background--transparent"><img src="https://assets.teepublic.com/assets/teepublicons/star_half_warning400-9c7cfa17d17f2c09f38dcb6a7a16abe5c16e8a8b4153c91472d7d8ac39798e4e.svg" loading="lazy" height="20" width="20" aria_hidden="true" focusable="false"></span>
</div>
<div class='m-design__ratings-details'>4.6 out of 5</div>
</div>
</div>
</div>

<div class='m-design__inline-search'>
<h3 class='m-design__inline-search__header h--no-s-t'>
Not what you're looking for?
<br class='mobile-break'>
Try another search.
</h3>
<div class='m-design__inline-search__search-container'>
<div class="c-search-form c-search-form--rainbow"><form id="productPageSearch" class="c-search-form__search gtmproductPageSearch" action="/search_submission" accept-charset="UTF-8" method="post"><input type="hidden" name="_method" value="patch" autocomplete="off" /><input type="hidden" name="authenticity_token" value="mXWuZV768kO9NmxQFoK12OrZMKwHr-HqHoK-UXe42S4f9lxiRDRvL6ZYgyrtHb2ShlZ9biKR2fG-XG7CVTeclw" autocomplete="off" />
<div class='form__fields form__fields--inline'>
<div class='form__fields--autocomplete-search-inline'>
<input type="text" name="query" id="jsAutoCompleteproductPage" placeholder="Search by topic, theme, product..." data-searchUrl="/search/autocomplete" data-maxresults="6" class="form__control jsproductPageSearchField gtmproductPageSearchQuery" autocomplete="off" spellcheck="false" autocapitalize="off" autocorrect="off" />
<input type="hidden" name="canvas" value="t-shirts" autocomplete="off" />
<input type="hidden" name="search_location" value="productPage" autocomplete="off" />
<input type="hidden" name="search_submission_data" value="{&quot;used_autocomplete&quot;:false,&quot;feedback&quot;:null,&quot;selection&quot;:null,&quot;search_input_id&quot;:&quot;jsAutoCompleteproductPage&quot;}" autocomplete="off" />
</div>
<div class='form__actions form__actions--no-margin-mobile'>
<button name="button" type="submit" class="btn btn--black btn--no-space query-submit gtmproductPageSearchButton "><span class="teepublicon teepublicon--blue-default teepublicon-background--transparent"><img src="https://assets.teepublic.com/assets/teepublicons/search_white-dfea27fafd855fea17a6c1835adec7b24d92ae54796f2c4251028698a51cc679.svg" loading="lazy" alt="Search" height="16" width="16" aria_hidden="false" focusable="true"></span>
</button></div>
</div>
</form>

</div>
</div>
</div>
<div class='m-design-product-info'>
<div class='contain contain--wide-3'>
<div class='m-design-product-info-and-faqs'>
<div class='m-design-product-info--product-quality'>
`;
}
