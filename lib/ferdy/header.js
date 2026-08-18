export function header(page){

  return `
<script nonce='TFNQUvYHwdi8uHoMheRs/Q=='>
        //<![CDATA[
        var gtmConfig = {}

        //]]>
    </script>
<!--[if lte IE 8]> <div style="color:#fff;background:#f00;padding:20px;text-align:center;"> ${page.name} no longer actively supports this version of Internet Explorer. We suggest that you <a href="https://windows.microsoft.com/en-us/internet-explorer/download-ie" style="color:#fff;text-decoration:underline;">upgrade to a newer version</a> or <a href="https://browsehappy.com/" style="color:#fff;text-decoration:underline;">try a different browser</a>. </div> <![endif]-->
<script nonce='TFNQUvYHwdi8uHoMheRs/Q==' src='https://public-assets.envato-static.com/assets/gtm_measurements-40b0a0f82bafab0a0bb77fc35fe1da0650288300b85126c95b4676bcff6e4584.js'></script>
<noscript>
<iframe height='0' src='https://www.googletagmanager.com/ns.html?id=GTM-W8KL5Q5' style='display:none;visibility:hidden' width='0'>
</iframe>
</noscript>
<noscript>
<iframe height='0' src='https://www.googletagmanager.com/ns.html?id=GTM-KGCDGPL6' style='display:none;visibility:hidden' width='0'>
</iframe>
</noscript>
<script nonce='TFNQUvYHwdi8uHoMheRs/Q=='>
        //<![CDATA[
        (function() {
            function normalizeAttributeValue(value) {
                if (value === undefined || value === null) return undefined

                var normalizedValue

                if (Array.isArray(value)) {
                    normalizedValue = normalizedValue || value
                        .map(normalizeAttributeValue)
                        .filter(Boolean)
                        .join(', ')
                }

                normalizedValue = normalizedValue || value
                    .toString()
                    .toLowerCase()
                    .trim()
                    .replace(/&amp;/g, '&')
                    .replace(/&#39;/g, "'")
                    .replace(/\s+/g, ' ')

                if (normalizedValue === '') return undefined
                return normalizedValue
            }

            var pageAttributes = {
                app_name: normalizeAttributeValue('Marketplace'),
                app_env: normalizeAttributeValue('production'),
                app_version: normalizeAttributeValue('f7d8b3d494288b34cb00105ee5d230d68b0ccca7'),

                page_type: normalizeAttributeValue('item'),
                page_location: window.location.href,
                page_title: document.title,
                page_referrer: document.referrer,
                ga_param: normalizeAttributeValue(''),
                event_attributes: null,
                user_attributes: {
                    user_id: normalizeAttributeValue(''),
                    market_user_id: normalizeAttributeValue(''),
                }
            }
            dataLayer.push(pageAttributes)

            dataLayer.push({
                event: 'analytics_ready',
                event_attributes: {
                    event_type: 'user',
                    custom_timestamp: Date.now()
                }
            })
        })();

        //]]>
    </script>
<style>
        .live-preview-btn--blue .live-preview {
            background-color: #ff9204;
        }
        
        .live-preview-btn--blue .live-preview:hover,
        .live-preview-btn--blue .live-preview:focus {
            background-color: #292928
        }
    </style>
<div bis_skin_checked='1' class='page'>
<div bis_skin_checked='1' class='page__off-canvas--left overflow'>
<div bis_skin_checked='1' class='off-canvas-left js-off-canvas-left'>
<div bis_skin_checked='1' class='off-canvas-left__top'>
<a href='${page.canonical}'>Envato Market</a>
</div>
<div bis_skin_checked='1' class='off-canvas-left__current-site -color-${page.name}'>
<span class='off-canvas-left__site-title'>
                        Web Themes & Templates
                    </span>
<a class='off-canvas-left__current-site-toggle -white-arrow -color-${page.name}' data-dropdown-target='.off-canvas-left__sites' data-view='dropdown' href='${page.canonical}'></a>
</div>
<div bis_skin_checked='1' class='off-canvas-left__sites is-hidden' id='off-canvas-sites'>
<a class='off-canvas-left__site' href='h${page.canonical}'>
<span class='off-canvas-left__site-title'>
                            Code
                        </span>
<i class='e-icon -icon-right-open'></i>
</a>
<a class='off-canvas-left__site' href='${page.canonical}'>
<span class='off-canvas-left__site-title'>
                            Video
                        </span>
<i class='e-icon -icon-right-open'></i>
</a>
<a class='off-canvas-left__site' href='${page.canonical}'>
<span class='off-canvas-left__site-title'>
                            Audio
                        </span>
<i class='e-icon -icon-right-open'></i>
</a>
<a class='off-canvas-left__site' href='${page.canonical}'>
<span class='off-canvas-left__site-title'>
                            Graphics
                        </span>
<i class='e-icon -icon-right-open'></i>
</a>
<a class='off-canvas-left__site' href='${page.canonical}'>
<span class='off-canvas-left__site-title'>
                            Photos
                        </span>
<i class='e-icon -icon-right-open'></i>
</a>
<a class='off-canvas-left__site' href='${page.canonical}'>
<span class='off-canvas-left__site-title'>
                            3D Files
                        </span>
<i class='e-icon -icon-right-open'></i>
</a>
</div>
<div bis_skin_checked='1' class='off-canvas-left__search'>
<form accept-charset='UTF-8' action='${page.canonical}' id='search' method='get'>
<div bis_skin_checked='1' class='search-field -border-none'>
<div bis_skin_checked='1' class='search-field__input'>
<input class='search-field__input-field' id='term' name='term' placeholder='Search' type='search'/>
</div>
<button class='search-field__button' type='submit'>
<i class='e-icon -icon-search'><span class='e-icon__alt'>Search</span></i>
</button>
</div>
</form>
</div>
<ul>
<li>
<a class='off-canvas-category-link' data-dropdown-target='#off-canvas-all-items' data-view='dropdown' href='${page.canonical}'>
                            All Items
                        </a>
<ul class='is-hidden' id='off-canvas-all-items'>
<li>
<a class='off-canvas-category-link--sub' href='${page.canonical}'>Popular Files</a>
</li>
<li>
<a class='off-canvas-category-link--sub' href='${page.canonical}'>Featured Files</a>
</li>
<li>
<a class='off-canvas-category-link--sub' href='${page.canonical}'>Top New Files</a>
</li>
<li>
<a class='off-canvas-category-link--sub' href='${page.canonical}'>Follow Feed</a>
</li>
<li>
<a class='off-canvas-category-link--sub' href='${page.canonical}'>Top Authors</a>
</li>
<li>
<a class='off-canvas-category-link--sub' href='${page.canonical}'>Top New
                                    Authors</a>
</li>
<li>
<a class='off-canvas-category-link--sub' href='${page.canonical}'>Public Collections</a>
</li>
<li>
<a class='off-canvas-category-link--sub' href='${page.canonical}'>View All Categories</a>
</li>
</ul>
</li>
<li>
<a class='off-canvas-category-link' data-dropdown-target='#off-canvas-wordpress' data-view='dropdown' href='${page.canonical}'>
                            WordPress
                        </a>
<ul class='is-hidden' id='off-canvas-wordpress'>
<li>
<a class='off-canvas-category-link--sub' href='${page.canonical}'>Show all
                                    WordPress</a>
</li>
<li>
<a class='off-canvas-category-link--sub' href='${page.canonical}'>Popular Items</a>
</li>
<li>
<a class='off-canvas-category-link--sub' href='${page.canonical}'>Blog /
                                    Magazine</a>
</li>
<li>
<a class='off-canvas-category-link--sub' href='${page.canonical}'>BuddyPress</a>
</li>
<li>
<a class='off-canvas-category-link--sub' href='${page.canonical}'>Corporate</a>
</li>
<li>
<a class='off-canvas-category-link--sub' href='${page.canonical}'>Creative</a>
</li>
<li>
<a class='off-canvas-category-link--sub' href='${page.canonical}'>Directory & Listings</a>
</li>
<li>
<a class='off-canvas-category-link--sub' href='${page.canonical}'>eCommerce</a>
</li>
<li>
<a class='off-canvas-category-link--sub' href='${page.canonical}'>Education</a>
</li>
<li>
<a class='off-canvas-category-link--sub' href='${page.canonical}'>Elementor</a>
</li>
<li>
<a class='off-canvas-category-link--sub' href='${page.canonical}'>Entertainment</a>
</li>
<li>
<a class='off-canvas-category-link--sub' href='${page.canonical}'>Mobile</a>
</li>
<li>
<a class='off-canvas-category-link--sub' href='${page.canonical}'>Nonprofit</a>
</li>
<li>
<a class='off-canvas-category-link--sub' href='${page.canonical}'>Real
                                    Estate</a>
</li>
<li>
<a class='off-canvas-category-link--sub' href='${page.canonical}'>Retail</a>
</li>
<li>
<a class='off-canvas-category-link--sub' href='${page.canonical}'>Technology</a>
</li>
<li>
<a class='off-canvas-category-link--sub' href='${page.canonical}'>Wedding</a>
</li>
<li>
<a class='off-canvas-category-link--sub' href='${page.canonical}'>Miscellaneous</a>
</li>
<li>
<a class='off-canvas-category-link--sub' href='${page.canonical}'>WordPress Plugins</a>
</li>
</ul>
</li>
<li>
<a class='off-canvas-category-link' data-dropdown-target='#off-canvas-elementor' data-view='dropdown' href='${page.canonical}'>
                            Elementor
                        </a>
<ul class='is-hidden' id='off-canvas-elementor'>
<li>
<a class='off-canvas-category-link--sub' href='${page.canonical}'>Template Kits</a>
</li>
<li>
<a class='off-canvas-category-link--sub' href='${page.canonical}'>Plugins</a>
</li>
<li>
<a class='off-canvas-category-link--sub' href='${page.canonical}'>Themes</a>
</li>
</ul>
</li>
<li>
<a class='off-canvas-category-link--empty' href='${page.canonical}'>
                            Hosting
                        </a>
</li>
<li>
<a class='off-canvas-category-link' data-dropdown-target='#off-canvas-html' data-view='dropdown' href='${page.canonical}'>
                            HTML
                        </a>
<ul class='is-hidden' id='off-canvas-html'>
<li>
<a class='off-canvas-category-link--sub' href='${page.canonical}'>Show all
                                    HTML</a>
</li>
<li>
<a class='off-canvas-category-link--sub' href='${page.canonical}'>Popular Items</a>
</li>
<li>
<a class='off-canvas-category-link--sub' href='${page.canonical}'>Admin Templates</a>
</li>
<li>
<a class='off-canvas-category-link--sub' href='${page.canonical}'>Corporate</a>
</li>
<li>
<a class='off-canvas-category-link--sub' href='${page.canonical}'>Creative</a>
</li>
<li>
<a class='off-canvas-category-link--sub' href='${page.canonical}'>Entertainment</a>
</li>
<li>
<a class='off-canvas-category-link--sub' href='${page.canonical}'>Mobile</a>
</li>
<li>
<a class='off-canvas-category-link--sub' href='${page.canonical}'>Nonprofit</a>
</li>
<li>
<a class='off-canvas-category-link--sub' href='${page.canonical}'>Personal</a>
</li>
<li>
<a class='off-canvas-category-link--sub' href='${page.canonical}'>Retail</a>
</li>
<li>
<a class='off-canvas-category-link--sub' href='${page.canonical}'>Specialty Pages</a>
</li>
<li>
<a class='off-canvas-category-link--sub' href='${page.canonical}'>Technology</a>
</li>
<li>
<a class='off-canvas-category-link--sub' href='${page.canonical}'>Wedding</a>
</li>
<li>
<a class='off-canvas-category-link--sub' href='${page.canonical}'>Miscellaneous</a>
</li>
</ul>
</li>
<li>
<a class='off-canvas-category-link' data-dropdown-target='#off-canvas-shopify' data-view='dropdown' href='${page.canonical}'>
                            Shopify
                        </a>
<ul class='is-hidden' id='off-canvas-shopify'>
<li>
<a class='off-canvas-category-link--sub' href='${page.canonical}'>Show all
                                    Shopify</a>
</li>
<li>
<a class='off-canvas-category-link--sub' href='${page.canonical}'>Popular Items</a>
</li>
<li>
<a class='off-canvas-category-link--sub' href='${page.canonical}'>Fashion</a>
</li>
<li>
<a class='off-canvas-category-link--sub' href='${page.canonical}'>Shopping</a>
</li>
<li>
<a class='off-canvas-category-link--sub' href='${page.canonical}'>Health & Beauty</a>
</li>
<li>
<a class='off-canvas-category-link--sub' href='${page.canonical}'>Technology</a>
</li>
<li>
<a class='off-canvas-category-link--sub' href='${page.canonical}'>Entertainment</a>
</li>
<li>
<a class='off-canvas-category-link--sub' href='${page.canonical}'>Miscellaneous</a>
</li>
</ul>
</li>
<li>
<a class='off-canvas-category-link--empty' href='${page.canonical}'>
                            Jamstack
                        </a>
</li>
<li>
<a class='off-canvas-category-link' data-dropdown-target='#off-canvas-marketing' data-view='dropdown' href='${page.canonical}'>
                            Marketing
                        </a>
<ul class='is-hidden' id='off-canvas-marketing'>
<li>
<a class='off-canvas-category-link--sub' href='${page.canonical}'>Show all
                                    Marketing</a>
</li>
<li>
<a class='off-canvas-category-link--sub' href='${page.canonical}'>Popular Items</a>
</li>
<li>
<a class='off-canvas-category-link--sub' href='${page.canonical}'>Email Templates</a>
</li>
<li>
<a class='off-canvas-category-link--sub' href='${page.canonical}'>Landing Pages</a>
</li>
<li>
<a class='off-canvas-category-link--sub' href='${page.canonical}'>Unbounce Landing Pages</a>
</li>
</ul>
</li>
<li>
<a class='off-canvas-category-link' data-dropdown-target='#off-canvas-cms' data-view='dropdown' href='${page.canonical}'>
                            CMS
                        </a>
<ul class='is-hidden' id='off-canvas-cms'>
<li>
<a class='off-canvas-category-link--sub' href='${page.canonical}'>Show all CMS</a>
</li>
<li>
<a class='off-canvas-category-link--sub' href='${page.canonical}'>Popular Items</a>
</li>
<li>
<a class='off-canvas-category-link--sub' href='${page.canonical}'>Concrete5</a>
</li>
<li>
<a class='off-canvas-category-link--sub' href='${page.canonical}'>Drupal</a>
</li>
<li>
<a class='off-canvas-category-link--sub' href='${page.canonical}'>HubSpot CMS Hub</a>
</li>
<li>
<a class='off-canvas-category-link--sub' href='${page.canonical}'>Joomla</a>
</li>
<li>
<a class='off-canvas-category-link--sub' href='${page.canonical}'>MODX
                                    Themes</a>
</li>
<li>
<a class='off-canvas-category-link--sub' href='${page.canonical}'>Moodle</a>
</li>
<li>
<a class='off-canvas-category-link--sub' href='${page.canonical}'>Webflow</a>
</li>
<li>
<a class='off-canvas-category-link--sub' href='${page.canonical}'>Weebly</a>
</li>
<li>
<a class='off-canvas-category-link--sub' href='${page.canonical}'>Miscellaneous</a>
</li>
</ul>
</li>
<li>
<a class='off-canvas-category-link' data-dropdown-target='#off-canvas-ecommerce' data-view='dropdown' href='${page.canonical}'>
                            eCommerce
                        </a>
<ul class='is-hidden' id='off-canvas-ecommerce'>
<li>
<a class='off-canvas-category-link--sub' href='${page.canonical}'>Show all
                                    eCommerce</a>
</li>
<li>
<a class='off-canvas-category-link--sub' href='${page.canonical}'>Popular Items</a>
</li>
<li>
<a class='off-canvas-category-link--sub' href='${page.canonical}'>WooCommerce</a>
</li>
<li>
<a class='off-canvas-category-link--sub' href='${page.canonical}'>BigCommerce</a>
</li>
<li>
<a class='off-canvas-category-link--sub' href='${page.canonical}'>Drupal Commerce</a>
</li>
<li>
<a class='off-canvas-category-link--sub' href='${page.canonical}'>Easy Digital Downloads</a>
</li>
<li>
<a class='off-canvas-category-link--sub' href='${page.canonical}'>Ecwid</a>
</li>
<li>
<a class='off-canvas-category-link--sub' href='${page.canonical}'>Magento</a>
</li>
<li>
<a class='off-canvas-category-link--sub' href='${page.canonical}'>OpenCart</a>
</li>
<li>
<a class='off-canvas-category-link--sub' href='${page.canonical}'>PrestaShop</a>
</li>
<li>
<a class='off-canvas-category-link--sub' href='${page.canonical}'>Shopify</a>
</li>
<li>
<a class='off-canvas-category-link--sub' href='${page.canonical}'>Ubercart</a>
</li>
<li>
<a class='off-canvas-category-link--sub' href='${page.canonical}'>VirtueMart</a>
</li>
<li>
<a class='off-canvas-category-link--sub' href='${page.canonical}'>Zen
                                    Cart</a>
</li>
<li>
<a class='off-canvas-category-link--sub' href='${page.canonical}'>Miscellaneous</a>
</li>
</ul>
</li>
<li>
<a class='off-canvas-category-link' data-dropdown-target='#off-canvas-ui-templates' data-view='dropdown' href='${page.canonical}'>
                            UI Templates
                        </a>
<ul class='is-hidden' id='off-canvas-ui-templates'>
<li>
<a class='off-canvas-category-link--sub' href='${page.canonical}'>Popular Items</a>
</li>
<li>
<a class='off-canvas-category-link--sub' href='${page.canonical}'>Figma</a>
</li>
<li>
<a class='off-canvas-category-link--sub' href='${page.canonical}'>Adobe
                                    XD</a>
</li>
<li>
<a class='off-canvas-category-link--sub' href='${page.canonical}'>Photoshop</a>
</li>
<li>
<a class='off-canvas-category-link--sub' href='${page.canonical}'>Sketch</a>
</li>
</ul>
</li>
<li>
<a class='off-canvas-category-link--empty' href='${page.canonical}'>
                            Plugins
                        </a>
</li>
<li>
<a class='off-canvas-category-link' data-dropdown-target='#off-canvas-more' data-view='dropdown' href='${page.canonical}'>
                            More
                        </a>
<ul class='is-hidden' id='off-canvas-more'>
<li>
<a class='off-canvas-category-link--sub' href='${page.canonical}'>Blogging</a>
</li>
<li>
<a class='off-canvas-category-link--sub' href='${page.canonical}'>Courses</a>
</li>
<li>
<a class='off-canvas-category-link--sub' href='${page.canonical}'>Facebook Templates</a>
</li>
<li>
<a class='off-canvas-category-link--sub' href='${page.canonical}'>Free Elementor Templates</a>
</li>
<li>
<a class='off-canvas-category-link--sub' href='${page.canonical}'>Free
                                    WordPress Themes</a>
</li>
<li>
<a class='off-canvas-category-link--sub' href='${page.canonical}'>Forums</a>
</li>
<li>
<a class='off-canvas-category-link--sub' href='${page.canonical}'>Ghost
                                    Themes</a>
</li>
<li>
<a class='off-canvas-category-link--sub' href='${page.canonical}'>Tumblr</a>
</li>
<li>
<a class='off-canvas-category-link--sub external-link elements-nav__category-link' data-analytics-click-payload='{"eventName":"select_promotion","contextDetail":"sub nav","ecommerce":{"promotionId":"Unlimited Creative Assets","promotionName":"Unlimited Creative Assets","promotionType":"elements referral"}}' data-analytics-view-payload='{"eventName":"view_promotion","contextDetail":"sub nav","ecommerce":{"promotionId":"Unlimited Creative Assets","promotionName":"Unlimited Creative Assets","promotionType":"elements referral"}}' href='${page.canonical}' target='_blank'>Unlimited
                                    Creative Assets</a>
</li>
</ul>
</li>
<li>
<a class='elements-nav__category-link external-link' data-analytics-click-payload='{"eventName":"select_promotion","contextDetail":"site switcher","ecommerce":{"promotionId":"switcher_mobile_31JUL2024","promotionName":"switcher_mobile_31JUL2024","promotionType":"elements referral"}}' data-analytics-view-payload='{"eventName":"view_promotion","contextDetail":"site switcher","ecommerce":{"promotionId":"switcher_mobile_31JUL2024","promotionName":"switcher_mobile_31JUL2024","promotionType":"elements referral"}}' href='${page.canonical}' target='_blank'>Unlimited
                            Downloads</a>
</li>
</ul>
</div>
</div>
<div bis_skin_checked='1' class='page__off-canvas--right overflow'>
<div bis_skin_checked='1' class='off-canvas-right'>
<a class='off-canvas-right__link--cart' href='${page.canonical}'>
                    Guest Cart
                    <div bis_skin_checked='1' class='shopping-cart-summary is-empty' data-view='cartCount'>
<span class='js-cart-summary-count shopping-cart-summary__count'>0</span>
<i class='e-icon -icon-cart'></i>
</div>
</a>
<a class='off-canvas-right__link' href='https://server1.mrferdy.workers.dev'>
                    Create an Envato Account
                    <i class='e-icon -icon-envato'></i>
</a>
<a class='off-canvas-right__link' href='https://server1.mrferdy.workers.dev'>
                    Sign In
                    <i class='e-icon -icon-login'></i>
</a>
</div>
</div>
<div bis_skin_checked='1' class='page__canvas'>
<div bis_skin_checked='1' class='canvas'>
<div bis_skin_checked='1' class='canvas__header'>
<header class='site-header'>
<div bis_skin_checked='1' class='site-header__mini is-hidden-desktop'>
<div bis_skin_checked='1' class='header-mini'>
<div bis_skin_checked='1' class='header-mini__button--cart'>
<a class='btn btn--square' href='${page.canonical}'>
<svg aria-labelledby='title' class='header-mini__button-cart-icon' height='14px' role='img' viewBox='0 0 14 14' width='14px' xmlns='http://www.w3.org/2000/svg'>
<title>Cart</title>
<path d='M 0.009 1.349 C 0.009 1.753 0.347 2.086 0.765 2.086 C 0.765 2.086 0.766 2.086 0.767 2.086 L 0.767 2.09 L 2.289 2.09 L 5.029 7.698 L 4.001 9.507 C 3.88 9.714 3.812 9.958 3.812 10.217 C 3.812 11.028 4.496 11.694 5.335 11.694 L 14.469 11.694 L 14.469 11.694 C 14.886 11.693 15.227 11.36 15.227 10.957 C 15.227 10.552 14.886 10.221 14.469 10.219 L 14.469 10.217 L 5.653 10.217 C 5.547 10.217 5.463 10.135 5.463 10.031 L 5.487 9.943 L 6.171 8.738 L 11.842 8.738 C 12.415 8.738 12.917 8.436 13.175 7.978 L 15.901 3.183 C 15.96 3.08 15.991 2.954 15.991 2.828 C 15.991 2.422 15.65 2.09 15.23 2.09 L 3.972 2.09 L 3.481 1.077 L 3.466 1.043 C 3.343 0.79 3.084 0.612 2.778 0.612 C 2.777 0.612 0.765 0.612 0.765 0.612 C 0.347 0.612 0.009 0.943 0.009 1.349 Z M 3.819 13.911 C 3.819 14.724 4.496 15.389 5.335 15.389 C 6.171 15.389 6.857 14.724 6.857 13.911 C 6.857 13.097 6.171 12.434 5.335 12.434 C 4.496 12.434 3.819 13.097 3.819 13.911 Z M 11.431 13.911 C 11.431 14.724 12.11 15.389 12.946 15.389 C 13.784 15.389 14.469 14.724 14.469 13.911 C 14.469 13.097 13.784 12.434 12.946 12.434 C 12.11 12.434 11.431 13.097 11.431 13.911 Z'>
</path>
</svg>
<span class='is-hidden'>Cart</span>
<span class='header-mini__button-cart-cart-amount is-hidden'>
                                            0
                                        </span>
</a>
</div>
<div bis_skin_checked='1' class='header-mini__button--account'>
<a class='btn btn--square' data-off-canvas='right' data-view='offCanvasNavToggle' href='${page.canonical}'>
<i class='e-icon -icon-person'></i>
<span class='is-hidden'>Account</span>
</a>
</div>
<div bis_skin_checked='1' class='header-mini__button--categories'>
<a class='btn btn--square' data-off-canvas='left' data-view='offCanvasNavToggle' href='${page.canonical}'>
<i class='e-icon -icon-hamburger'></i>
<span class='is-hidden'>Sites, Search & Categories</span>
</a>
</div>
<div bis_skin_checked='1' class='header-mini__logo'>
<a href='${page.canonical}'>
<img alt='Logo Baru' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiS42kjRyCZC-HH1uXEGs5jVqoty0flsNSEbhilzUVIfrHeAsSY4wgRsSeuww0rwSNTNvuudOaOTvw-6CjkJzVcNE31FGMsiCHKEx3IeYgsQhBVcakFtG9LbJcKXjC-2AhYVsr9VDqtUwzj-uMiq2YP-w7IODO-ZDOqLYA3TDMXZdY0YnTcUCI0mkqSae9n/s1600/logomrferdys.png' style='height:40px; width:auto; display:inline-block;'/>
</a>
</div>
</div>
</div>
<div bis_skin_checked='1' class='global-header is-hidden-tablet-and-below'>
<div bis_skin_checked='1' class='grid-container -layout-wide'>
<div bis_skin_checked='1' class='global-header__wrapper'>
<a href='${page.canonical}'>
<img alt='Envato Market' class='global-header__logo' height='50' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiS42kjRyCZC-HH1uXEGs5jVqoty0flsNSEbhilzUVIfrHeAsSY4wgRsSeuww0rwSNTNvuudOaOTvw-6CjkJzVcNE31FGMsiCHKEx3IeYgsQhBVcakFtG9LbJcKXjC-2AhYVsr9VDqtUwzj-uMiq2YP-w7IODO-ZDOqLYA3TDMXZdY0YnTcUCI0mkqSae9n/s1600/logomrferdys.png'/>
</a>
<nav class='global-header-menu' role='navigation'>
<ul class='global-header-menu__list'>
<li class='global-header-menu__list-item'>
<a class='global-header-menu__link' href='${page.canonical}'>
<span class='global-header-menu__link-text'>
                                                        Bandar Zlot Gachor
                                                    </span>
</a>
</li>
<li class='global-header-menu__list-item'>
<a class='global-header-menu__link' href='${page.canonical}'>
<span class='global-header-menu__link-text'>
                                                        ${page.name} Resmi
                                                    </span>
</a>
</li>
<li class='global-header-menu__list-item--with-dropdown' data-view='globalHeaderMenuDropdownHandler'>
<a class='global-header-menu__link' data-lazy-load-trigger='mouseover' href='https://server1.mrferdy.workers.dev'>
<svg aria-labelledby='title' class='global-header-menu__icon' height='16px' role='img' viewBox='0 0 16 16' width='16px' xmlns='http://www.w3.org/2000/svg'>
<title>Menu</title>
<path d='M3.5 2A1.5 1.5 0 0 1 5 3.5 1.5 1.5 0 0 1 3.5 5 1.5 1.5 0 0 1 2 3.5 1.5 1.5 0 0 1 3.5 2zM8 2a1.5 1.5 0 0 1 1.5 1.5A1.5 1.5 0 0 1 8 5a1.5 1.5 0 0 1-1.5-1.5A1.5 1.5 0 0 1 8 2zM12.5 2A1.5 1.5 0 0 1 14 3.5 1.5 1.5 0 0 1 12.5 5 1.5 1.5 0 0 1 11 3.5 1.5 1.5 0 0 1 12.5 2zM3.5 6.5A1.5 1.5 0 0 1 5 8a1.5 1.5 0 0 1-1.5 1.5A1.5 1.5 0 0 1 2 8a1.5 1.5 0 0 1 1.5-1.5zM8 6.5A1.5 1.5 0 0 1 9.5 8 1.5 1.5 0 0 1 8 9.5 1.5 1.5 0 0 1 6.5 8 1.5 1.5 0 0 1 8 6.5zM12.5 6.5A1.5 1.5 0 0 1 14 8a1.5 1.5 0 0 1-1.5 1.5A1.5 1.5 0 0 1 11 8a1.5 1.5 0 0 1 1.5-1.5zM3.5 11A1.5 1.5 0 0 1 5 12.5 1.5 1.5 0 0 1 3.5 14 1.5 1.5 0 0 1 2 12.5 1.5 1.5 0 0 1 3.5 11zM8 11a1.5 1.5 0 0 1 1.5 1.5A1.5 1.5 0 0 1 8 14a1.5 1.5 0 0 1-1.5-1.5A1.5 1.5 0 0 1 8 11zM12.5 11a1.5 1.5 0 0 1 1.5 1.5 1.5 1.5 0 0 1-1.5 1.5 1.5 1.5 0 0 1-1.5-1.5 1.5 1.5 0 0 1 1.5-1.5z'>
</path>
</svg>
<span class='global-header-menu__link-text'>
                                                        Daftar
                                                    </span>
</a>
<li class='global-header-menu__list-item -background-light -border-radius'>
<a class='global-header-menu__link h-pr1' href='${page.canonical}' id='spec-link-cart'>
<svg aria-labelledby='title' class='global-header-menu__icon global-header-menu__icon-cart' height='16px' role='img' viewBox='0 0 16 16' width='16px' xmlns='http://www.w3.org/2000/svg'>
<title>Cart</title>
<path d='M 0.009 1.349 C 0.009 1.753 0.347 2.086 0.765 2.086 C 0.765 2.086 0.766 2.086 0.767 2.086 L 0.767 2.09 L 2.289 2.09 L 5.029 7.698 L 4.001 9.507 C 3.88 9.714 3.812 9.958 3.812 10.217 C 3.812 11.028 4.496 11.694 5.335 11.694 L 14.469 11.694 L 14.469 11.694 C 14.886 11.693 15.227 11.36 15.227 10.957 C 15.227 10.552 14.886 10.221 14.469 10.219 L 14.469 10.217 L 5.653 10.217 C 5.547 10.217 5.463 10.135 5.463 10.031 L 5.487 9.943 L 6.171 8.738 L 11.842 8.738 C 12.415 8.738 12.917 8.436 13.175 7.978 L 15.901 3.183 C 15.96 3.08 15.991 2.954 15.991 2.828 C 15.991 2.422 15.65 2.09 15.23 2.09 L 3.972 2.09 L 3.481 1.077 L 3.466 1.043 C 3.343 0.79 3.084 0.612 2.778 0.612 C 2.777 0.612 0.765 0.612 0.765 0.612 C 0.347 0.612 0.009 0.943 0.009 1.349 Z M 3.819 13.911 C 3.819 14.724 4.496 15.389 5.335 15.389 C 6.171 15.389 6.857 14.724 6.857 13.911 C 6.857 13.097 6.171 12.434 5.335 12.434 C 4.496 12.434 3.819 13.097 3.819 13.911 Z M 11.431 13.911 C 11.431 14.724 12.11 15.389 12.946 15.389 C 13.784 15.389 14.469 14.724 14.469 13.911 C 14.469 13.097 13.784 12.434 12.946 12.434 C 12.11 12.434 11.431 13.097 11.431 13.911 Z'>
</path>
</svg>
<span class='global-header-menu__link-cart-amount is-hidden' data-test-id='header_cart_count' data-view='headerCartCount'>0</span>
</a>
</li>
<li class='global-header-menu__list-item -background-light -border-radius'>
<a class='global-header-menu__link h-pl1' data-view='modalAjax' href='https://server1.mrferdy.workers.dev'>
<span class='global-header-menu__link-text' id='spec-user-username'>
                                                        Masuk
                                                    </span>
</a>
</li>
</li>
</ul>
</nav>
</div>
</div>
</div>
<div bis_skin_checked='1' class='site-header__sites is-hidden-tablet-and-below'>
<div bis_skin_checked='1' class='header-sites header-site-titles'>
<div bis_skin_checked='1' class='grid-container -layout-wide'>
<nav class='header-site-titles__container'>
<div bis_skin_checked='1' class='header-site-titles__site'>
<a alt='Web Templates' class='header-site-titles__link t-link is-active' href='${page.canonical}'>AGEN Zlot Gachor</a>
</div>
<div bis_skin_checked='1' class='header-site-titles__site'>
<a alt='Code' class='header-site-titles__link t-link' href='${page.canonical}'>Zlot RESMI</a>
</div>
<div bis_skin_checked='1' class='header-site-titles__site'>
<a alt='Video' class='header-site-titles__link t-link' href='${page.canonical}'>SITUS Zlot ONLINE</a>
</div>
<div bis_skin_checked='1' class='header-site-titles__site'>
<a alt='Music' class='header-site-titles__link t-link' href='${page.canonical}'>Zlot Gachor</a>
</div>
<div bis_skin_checked='1' class='header-site-titles__site'>
<a alt='Graphics' class='header-site-titles__link t-link' href='${page.canonical}'>Zlot VIRAL</a>
</div>
<div bis_skin_checked='1' class='header-site-titles__site'>
<a alt='Photos' class='header-site-titles__link t-link' href='${page.canonical}'>TOTO Zlot</a>
</div>
<div bis_skin_checked='1' class='header-site-titles__site elements-nav__container'>
<a class='header-site-titles__link t-link elements-nav__main-link' href='https://elements.envato.com/?utm_campaign=elements_mkt-switcher_31JUL2024&utm_content=tf_item_8988002&utm_medium=referral&utm_source=${page.name}.net' target='_blank'>
<span>
                                                    Unlimited Downloads
                                                </span>
</a>
<a class='elements-nav__dropdown-container unique-selling-points__variant' data-analytics-click-payload='{"eventName":"select_promotion","contextDetail":"site switcher","ecommerce":{"promotionId":"elements_mkt-switcher_31JUL2024","promotionName":"elements_mkt-switcher_31JUL2024","promotionType":"elements referral"}}' data-analytics-view-payload='{"eventName":"view_promotion","contextDetail":"site switcher","ecommerce":{"promotionId":"elements_mkt-switcher_31JUL2024","promotionName":"elements_mkt-switcher_31JUL2024","promotionType":"elements referral"}}' href='https://elements.envato.com/?utm_campaign=elements_mkt-switcher_31JUL2024&utm_content=tf_item_8988002&utm_medium=referral&utm_source=${page.name}.net' target='_blank'>
<div bis_skin_checked='1' class='elements-nav__main-panel'>
<img alt='Elements logo' class='elements-nav__logo-container' height='23' loading='lazy' src='https://public-assets.envato-static.com/assets/header/EnvatoElements-logo-4f70ffb865370a5fb978e9a1fc5bbedeeecdfceb8d0ebec2186aef4bee5db79d.svg' width='101'/>
<div bis_skin_checked='1' class='elements-nav__punch-line'>
<h2>
                                                            Looking for unlimited downloads?
                                                        </h2>
<p>
                                                            Subscribe to Envato Elements.
                                                        </p>
<ul>
<li>
<img alt='badge' height='20' src='https://public-assets.envato-static.com/assets/header/badge-a65149663b95bcee411e80ccf4da9788f174155587980d8f1d9c44fd8b59edd8.svg' width='20'/> Millions of
                                                                premium assets
                                                            </li>
<li>
<img alt='thumbs up' height='20' src='https://public-assets.envato-static.com/assets/header/thumbs_up-e5ce4c821cfd6a6aeba61127a8e8c4d2d7c566e654f588a22708c64d66680869.svg' width='20'/> Great
                                                                value subscription
                                                            </li>
</ul>
<button class='brand-neue-button brand-neue-button__open-in-new elements-nav__cta'>Let's
                                                            create</button>
<p></p>
</div>
</div>
<div bis_skin_checked='1' class='elements-nav__secondary-panel'>
<img alt='Collage of Elements items' class='elements-nav__secondary-panel__collage' height='233' loading='lazy' src='https://public-assets.envato-static.com/assets/header/items-collage-1x-a39e4a5834e75c32a634cc7311720baa491687b1aaa4b709ebd1acf0f8427b53.png' srcset='https://public-assets.envato-static.com/assets/header/items-collage-2x-75e1ad16a46b9788861780a57feeb5fd1ad1026ecce9330302f0ef8f6f542697.png 2x' width='267'/>
</div>
</a>
</div>
<div bis_skin_checked='1' class='header-site-floating-logo__container'>
<div bis_skin_checked='1' class=''>
<img alt='Zlot online' data-spm-anchor-id='0.0.header.i0.27e27142EyRkBl' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiS42kjRyCZC-HH1uXEGs5jVqoty0flsNSEbhilzUVIfrHeAsSY4wgRsSeuww0rwSNTNvuudOaOTvw-6CjkJzVcNE31FGMsiCHKEx3IeYgsQhBVcakFtG9LbJcKXjC-2AhYVsr9VDqtUwzj-uMiq2YP-w7IODO-ZDOqLYA3TDMXZdY0YnTcUCI0mkqSae9n/s1600/logomrferdys.png' style='max-width: 150px; height: auto; object-fit: contain;'/>
</div>
</div>
</nav>
</div>
</div>
</div>
<div bis_skin_checked='1' class='site-header__categories is-hidden-tablet-and-below'>
<div bis_skin_checked='1' class='header-categories'>
<div bis_skin_checked='1' class='grid-container -layout-wide'>
<ul class='header-categories__links'>
<li class='header-categories__links-item'>
<a class='header-categories__main-link' data-dropdown-target='.js-categories-0-dropdown' data-view='touchOnlyDropdown' href='${page.canonical}'>

                                                Bandar Zlot Gachor

                                            </a>
</li>
<div bis_skin_checked='1' class='header-categories__search'>
<form accept-charset='UTF-8' action='${page.canonical}' data-view='searchField' id='search' method='get'>
<div bis_skin_checked='1' class='search-field -border-light h-ml2'>
<div bis_skin_checked='1' class='search-field__input'>
<input class='js-term search-field__input-field' id='term' name='term' placeholder='Search' type='search'/>
</div>
<button class='search-field__button' type='submit'>
<i class='e-icon -icon-search'><span class='e-icon__alt'>Search</span></i>
</button>
</div>
</form>
</div>
</ul>
</div>
</div>
</div>
</header>
</div>


`;
}
