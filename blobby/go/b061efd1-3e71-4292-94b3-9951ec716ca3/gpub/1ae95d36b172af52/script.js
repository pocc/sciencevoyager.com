window.cxs && window.cxs.setOptions({ prefix: "c2-" });
window.wsb=window.wsb||{};window.wsb["Theme28"]=window.wsb["Theme28"]||window.radpack("@widget/LAYOUT/bs-layout28-Theme-publish-Theme").then(function(t){return new t.default();});
window.wsb["FreemiumAd"]=function(e){let{adEndpoint:t,isPublish:a,containerId:o}=e;const r=1e4,l=/<script[^>]*>([\s\S]*)<\/script>/;let n,i,s;function c(e){e.preventDefault(),e.stopPropagation();const t=new CustomEvent("editor",{detail:{type:"showModal",modal:"plans",source:"freemiumAd"}});window.dispatchEvent(t)}function g(e){if(s=document.getElementById(o),!s)return;n=document.createElement("div"),n.style.cssText="width:100%;",s.prepend(n),i=document.createElement("div"),i.setAttribute("data-freemium-ad",!0),i.style.cssText=`overflow:hidden;width:100%;z-index:${r};position:fixed;left:0;`,i.innerHTML=(e||"").replace(l,""),s.prepend(i);const t=`${i.offsetHeight}px`;if(n.style.minHeight=t,window.requestAnimationFrame((()=>{const e=document.querySelector("[data-stickynav]");e&&"fixed"===e.style.position&&(e.style.top=t)})),a){const t=l.exec(e);if(t){const e=document.createElement("script");e.appendChild(document.createTextNode(t[1])),document.head.appendChild(e)}}else i.addEventListener("click",c,{useCapture:!0})}return function(){const e=a&&sessionStorage.getItem(t)||"";e?g(e):window.fetch(t).then((e=>e.ok&&e.text())).then((e=>{e&&(sessionStorage.setItem(t,e),g(e))})).catch((()=>{}))}(),function(){!a&&i.removeEventListener("click",c,{useCapture:!0}),s&&(s.removeChild(n),s.removeChild(i))}};
window.wsb["FreemiumAd"](JSON.parse("{\"adEndpoint\":\"/markup/ad\",\"isPublish\":true,\"containerId\":\"freemium-ad-10344\"}"));
window.wsb['context-bs-1']=JSON.parse("{\"env\":\"production\",\"renderMode\":\"PUBLISH\",\"fonts\":[\"karla\",\"default\",\"\"],\"colors\":[\"#3C3C3C\"],\"locale\":\"en-US\",\"language\":\"en\",\"resellerId\":1,\"internalLinks\":{\"3bd2e9f7-c19f-4ea7-99d6-b5e4d9ae9577\":{\"pageId\":\"e78136a6-345c-469a-ae58-caee61b1f997\",\"widgetId\":null,\"routePath\":\"/books\"},\"bab7e2d3-4ff8-4f81-9ff2-138167624993\":{\"pageId\":\"e78136a6-345c-469a-ae58-caee61b1f997\",\"widgetId\":null,\"routePath\":\"/books\"},\"19b87f8a-aabd-421f-90f6-68045debbdf4\":{\"pageId\":\"e78136a6-345c-469a-ae58-caee61b1f997\",\"widgetId\":null,\"routePath\":\"/books\"},\"b926615d-6627-46cc-9bae-4fcec8bd1074\":{\"pageId\":\"e78136a6-345c-469a-ae58-caee61b1f997\",\"widgetId\":null,\"routePath\":\"/books\"},\"7343d8f3-13e6-4207-8aef-58a2c92dabd2\":{\"pageId\":\"e78136a6-345c-469a-ae58-caee61b1f997\",\"widgetId\":null,\"routePath\":\"/books\"}},\"isInternalPage\":true,\"navigationMap\":{\"025d2b29-3e33-43f1-bf62-a6eba0a77b90\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"025d2b29-3e33-43f1-bf62-a6eba0a77b90\",\"name\":\"Contact\",\"href\":\"/contact\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":true},\"1442ce1b-41f9-44e5-b9f1-a8720f4bddf3\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"1442ce1b-41f9-44e5-b9f1-a8720f4bddf3\",\"name\":\"About\",\"href\":\"/about\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":true},\"e78136a6-345c-469a-ae58-caee61b1f997\":{\"isFlyoutMenu\":false,\"active\":true,\"pageId\":\"e78136a6-345c-469a-ae58-caee61b1f997\",\"name\":\"Books\",\"href\":\"/books\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":true},\"ef4bbfee-7375-47fd-86aa-2cc63f4bee86\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"ef4bbfee-7375-47fd-86aa-2cc63f4bee86\",\"name\":\"Home\",\"href\":\"/\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":true}},\"dials\":{\"colors\":[{\"id\":\"#3C3C3C\",\"meta\":{\"primary\":\"rgb(60, 60, 60)\",\"accent\":\"rgb(17, 17, 17)\",\"neutral\":\"rgb(255, 255, 255)\"}}],\"fonts\":{\"primary\":{\"id\":\"karla\",\"description\":\"\",\"tags\":[],\"meta\":{\"order\":17,\"primary\":{\"id\":\"karla\",\"name\":\"Karla\",\"url\":\"//fonts.googleapis.com/css?family=Karla:400,700&display=swap\",\"family\":\"'Karla', sans-serif\",\"size\":14,\"weight\":700,\"weights\":[400,700]},\"alternate\":{\"id\":\"old-standard-tt\",\"name\":\"Old Standard\",\"url\":\"//fonts.googleapis.com/css?family=Old+Standard+TT:400,400i,700,700i&display=swap\",\"family\":\"'Old Standard TT', serif\",\"size\":16,\"weight\":400,\"weights\":[400,700],\"styles\":{\"letterSpacing\":\"normal\",\"textTransform\":\"none\"}}},\"overridesAlternate\":[{\"locales\":[\"tr-TR\",\"pl-PL\",\"vi-VN\",\"ta-IN\",\"mr-IN\",\"hi-IN\"],\"meta\":{\"alternate\":{\"family\":\"serif\"}}},{\"locales\":[\"ja-JP\"],\"meta\":{\"alternate\":{\"family\":\"Old Standard TT, MS Mincho, '\uFF2D\uFF33 \uFF30\u660E\u671D', serif\"}}},{\"locales\":[\"ko-KR\"],\"meta\":{\"alternate\":{\"family\":\"Old Standard TT, '\uB3CB\uC6C0', Dotum, '\uB3CB\uC6C0\uCCB4', DotumChe, sans-serif\"}}},{\"locales\":[\"th-TH\"],\"meta\":{\"alternate\":{\"family\":\"Old Standard TT, LilyUPC, Tahoma, sans-serif\"}}},{\"locales\":[\"zh-CN\",\"zh-SG\"],\"meta\":{\"alternate\":{\"family\":\"Old Standard TT, '\u534E\u6587\u5B8B\u4F53', STSong, serif\"}}},{\"locales\":[\"zh-HK\",\"zh-TW\"],\"meta\":{\"alternate\":{\"family\":\"Old Standard TT, '\u5137\u5B8B Pro', LiSong Pro, serif\"}}}]}}},\"theme\":\"Theme28\"}");
Core.utils.deferBootstrap({elId:'bs-1',componentName:'@widget/LAYOUT/bs-Hamburger-Component',props:JSON.parse("{\"toggleId\":\"n-10343-navId-mobile\",\"uniqueId\":\"n-10343\",\"style\":{\"color\":\"highContrast\",\":hover\":{\"color\":\"highlight\"},\"@md\":{\"display\":\"none\"}},\"widgetId\":\"d98c0622-2fc1-4855-a406-215e4b473ec4\",\"section\":\"default\",\"category\":\"accent\",\"locale\":\"en-US\",\"env\":\"production\",\"renderMode\":\"PUBLISH\"}"),context:JSON.parse("{\"widgetId\":\"d98c0622-2fc1-4855-a406-215e4b473ec4\",\"widgetType\":\"HEADER\",\"widgetPreset\":\"header9\",\"group\":\"Section\",\"groupType\":\"Default\",\"section\":\"default\",\"category\":\"accent\",\"fontSize\":\"medium\",\"fontFamily\":\"alternate\",\"websiteThemeOverrides\":{},\"widgetThemeOverrides\":{}}"),contextKey:'context-bs-1',radpack:"@widget/LAYOUT/bs-Hamburger-Component"},false);
Core.utils.deferBootstrap({elId:'bs-2',componentName:'@widget/LAYOUT/bs-LinkAwareComponent',props:JSON.parse("{\"toggleId\":\"more-10359\",\"label\":\"More\",\"dataAid\":\"NAV_MORE\",\"navBarId\":\"navContainer-10352\",\"widgetId\":\"d98c0622-2fc1-4855-a406-215e4b473ec4\",\"section\":\"default\",\"category\":\"accent\",\"locale\":\"en-US\",\"env\":\"production\",\"renderMode\":\"PUBLISH\"}"),context:JSON.parse("{\"widgetId\":\"d98c0622-2fc1-4855-a406-215e4b473ec4\",\"widgetType\":\"HEADER\",\"widgetPreset\":\"header9\",\"group\":\"Nav\",\"groupType\":\"Default\",\"section\":\"default\",\"category\":\"accent\",\"fontSize\":\"medium\",\"fontFamily\":\"alternate\",\"websiteThemeOverrides\":{},\"widgetThemeOverrides\":{}}"),contextKey:'context-bs-1',radpack:"@widget/LAYOUT/bs-LinkAwareComponent"},false);
window.wsb["CalculateSplitNavSpacing"]=function(e){let{containerId:a,navId:n,splitNavId:l,logoImageId:i,inlineUtilitiesMenu:o,forceBreakpoint:r}=e;let c,s,g,p,d,u,y,m;const b=document.getElementById(n),v=document.getElementById(l);function h(){if(s||!b||!T(b))return;p=Array.from(b.children),g=Array.from(b.children),g.forEach(E),o&&(d=g.pop(),M(d)),u=g.pop();const e=u.querySelector("ul");y=e?Array.from(e.children):[],b.style.whiteSpace="normal",m=T(b.parentElement,"floor"),b.style.whiteSpace="nowrap",window.requestAnimationFrame(w)}function w(){const e=d&&d.querySelector("[data-ux='Pipe']");e&&R(e);const t=g,a=t.map((e=>T(e)));const n=d?T(d):0;let l=0,i=a.concat(n).findIndex((e=>{if(l+e>m)return e;l+=e}));i<0&&(i=a.length);const o=a.slice(0,i);let r,c,s=a.slice(i);if(k(s)+n<m)r=!1,c=0;else{r=!0,c=T(u);let e=0,t=c+n;s.some((a=>{if(t+=a,t>=m)return!0;e++})),s=s.slice(0,e)}for(;o.length>1&&B(o,s.concat([c,n]).filter(Boolean));)s.unshift(o.pop());const b=Array.from(v.children);if(f(b,0,o.length,M),f(t,0,o.length,R),f(y,0,o.length,R),f(b,o.length,o.length+s.length,R),f(t,o.length,o.length+s.length,M),f(y,o.length,o.length+s.length,R),f(b,o.length+s.length,t.length,R),f(t,o.length+s.length,t.length,R),f(y,o.length+s.length,t.length,M),r?M(u):R(u),function(){const e=p.filter((e=>"visible"===e.style.visibility&&e.classList.contains("nav-item"))),t=e[e.length-1];t&&t.classList.add("last-visible-nav-item")}(),e){t.find((e=>"visible"===e.style.visibility))&&M(e)}window.dispatchEvent(new Event("NavItemsResized"))}function I(){window.innerWidth<1024&&r&&r!==t.Q||(window.clearTimeout(c),c=window.setTimeout(h,50))}function f(e,t,a,n){e=e.slice(t,a).map(n).concat(e.slice(a))}function E(e){e.style.visibility="hidden",e.style.display="",e.classList.remove("last-visible-nav-item","visible")}function R(e){e.style.display="none",e.classList.remove("visible")}function M(e){e.style.visibility="visible",e.style.display="",e.classList.add("visible")}function k(e){return e.reduce(((e,t)=>e+t),0)}function T(e){return"ceil"===(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ceil")?Math.ceil(e.getBoundingClientRect().width):Math.floor(e.getBoundingClientRect().width)}function B(e,t){if(!t.length&&e.length>1)return!0;const a=e[e.length-1],n=k(e),l=k(t);return Math.abs(n-l)>Math.abs(n-a-(l+a))}if(I(),window.ResizeObserver){const e=new window.ResizeObserver(I);return[document.getElementById(a),document.getElementById(i)].forEach((t=>t&&e.observe(t))),()=>{s=!0,e.disconnect()}}return window.addEventListener("resize",I,{passive:!0}),()=>{s=!0,window.removeEventListener("resize",I,{passive:!0})}};
window.wsb["CalculateSplitNavSpacing"](JSON.parse("{\"navId\":\"n-1034310351-navId-2\",\"inlineUtilitiesMenu\":false,\"containerId\":\"navContainer-10352\",\"splitNavId\":\"n-1034310350-navId-1\"}"));
document.getElementById('page-10342').addEventListener('click', function() {}, false);
var t=document.createElement("script");t.type="text/javascript",t.addEventListener("load",()=>{window.tti.calculateTTI(({name:t,value:e}={})=>{let i={"wam_site_hasPopupWidget":false,"wam_site_headerTreatment":"Inset","wam_site_hasSlideshow":false,"wam_site_hasFreemiumBanner":false,"wam_site_homepageFirstWidgetType":"CONTENT","wam_site_homepageFirstWidgetPreset":"content2","wam_site_businessCategory":"forensic_medicine","wam_site_theme":"layout28","wam_site_locale":"en-US","wam_site_fontPack":"karla","wam_site_hasHomepageHTML":false,"wam_site_hasHomepageShop":false,"wam_site_hasHomepageOla":false,"wam_site_hasHomepageBlog":false,"wam_site_hasShop":false,"wam_site_hasOla":false,"wam_site_planType":"business","wam_site_isHomepage":false,"wam_site_htmlWidget":false};window.networkInfo&&window.networkInfo.downlink&&(i=Object.assign({},i,{["wam_site_networkSpeed"]:window.networkInfo.downlink.toFixed(2)})),window.tti.setCustomProperties(i),window.tti._collectVitals({name:t,value:e})})}),t.setAttribute("src","//img1.wsimg.com/traffic-assets/js/tccl-tti.min.js"),document.body.appendChild(t);