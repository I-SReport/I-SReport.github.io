if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,n)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let t={};const r=e=>a(e,c),o={module:{uri:c},exports:t,require:r};s[c]=Promise.all(i.map((e=>o[e]||r(e)))).then((e=>(n(...e),t)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/472-136b24525a904202.js",revision:"136b24525a904202"},{url:"/_next/static/chunks/framework-3b5a00d5d7e8d93b.js",revision:"3b5a00d5d7e8d93b"},{url:"/_next/static/chunks/main-743f8aff90ea8642.js",revision:"743f8aff90ea8642"},{url:"/_next/static/chunks/pages/404-e5684df9f5f9525c.js",revision:"e5684df9f5f9525c"},{url:"/_next/static/chunks/pages/_app-20753a9443b4d178.js",revision:"20753a9443b4d178"},{url:"/_next/static/chunks/pages/_error-8353112a01355ec2.js",revision:"8353112a01355ec2"},{url:"/_next/static/chunks/pages/index-ab50864dd9eb6772.js",revision:"ab50864dd9eb6772"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-8fa1640cc84ba8fe.js",revision:"8fa1640cc84ba8fe"},{url:"/_next/static/css/3822e890c4aae724.css",revision:"3822e890c4aae724"},{url:"/_next/static/media/title.4c5175e5.ttf",revision:"4c5175e5"},{url:"/_next/static/uNuezCs0pFB8abFwS6P0k/_buildManifest.js",revision:"72ac683f0592cdd06b12ad5f1724390f"},{url:"/_next/static/uNuezCs0pFB8abFwS6P0k/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/article_images/college-board-award/website.png",revision:"78e3f9cfebe0b28483ab71ddb3795781"},{url:"/article_images/i90-speed-limit/map.png",revision:"97dbd943a0ca5311f4e286c5cdcff45e"},{url:"/article_images/ib-latin/post.png",revision:"fd632efd9bec14274c4497385fcc9a08"},{url:"/article_images/new-years-lawsuits/case.png",revision:"ef00fb4fa55e0cf7bedd06fa11c01461"},{url:"/article_images/opinion-child-labor/gas.jpg",revision:"42524718d76ee7eba782867ac5f9cc12"},{url:"/article_images/pse/tweet.jpg",revision:"4f6939e24757f3f70d4fd630795dde81"},{url:"/article_images/roads-closed/city-update.png",revision:"e9c4a5ab231653f305bb55cb95a75ee5"},{url:"/article_images/roads-closed/graph.png",revision:"a8ff690e8098acfa262139f20e8ab819"},{url:"/article_images/students-having-fun/school.jpg",revision:"ff0207f0b1de69af52729ab7995a79c9"},{url:"/article_images/technology-levy/chart.png",revision:"e8c870d16c044027325a2d774271d04e"},{url:"/articles/college-board-award.md",revision:"2d99ddf45115efe6167d0aa53450074b"},{url:"/articles/i90-speed-limit.md",revision:"de7123ed66b0ed39403590c0c2596717"},{url:"/articles/ib-latin.md",revision:"83efb3b1bafcfc704b93ab9e10afe8ef"},{url:"/articles/new-years-lawsuits.md",revision:"22c5b37e3dd77e2cc7d9fc305a2e5d4c"},{url:"/articles/opinion-child-labor.md",revision:"0dff070d5cc6575433a35662f9b56c6d"},{url:"/articles/pse.md",revision:"937f900021b05e06f7a0c9b1edc6ad96"},{url:"/articles/roads-closed.md",revision:"ad092a4a16b2ee5134bc304772135573"},{url:"/articles/students-having-fun.md",revision:"6457b9a15171ac1bfa78ecfda647dd3a"},{url:"/articles/technology-levy.md",revision:"1a605f65a278cba781699c81a2935aba"},{url:"/favicon.ico",revision:"178e56c6165d183d55373c57dcb3b54c"},{url:"/icons/icon-128x128.png",revision:"a34fcee04b6f2fdf554151b13f2ceded"},{url:"/icons/icon-144x144.png",revision:"6d0b966be50c363a23f22226b23c9c02"},{url:"/icons/icon-152x152.png",revision:"a75d95857defb49b1bf5a422bb1a1ca1"},{url:"/icons/icon-192x192.png",revision:"a280510668d40ecbc11fa5ee5c734781"},{url:"/icons/icon-256x256.png",revision:"a4692e3e35aebb433f716b6ba974f7ff"},{url:"/icons/icon-384x384.png",revision:"4680b6bace72b62521e87c768c7f4b95"},{url:"/icons/icon-512x512.png",revision:"9718c5dc2d5d7235e6d53b2ee9e81f68"},{url:"/icons/icon-72x72.png",revision:"ac0cc724023f1d36fea0eec6de71ec2d"},{url:"/icons/icon-96x96.png",revision:"123160d83a8f8f8705e66ab108f15b9b"},{url:"/manifest.json",revision:"4ca4420b478ee4bca4a51d93323fc37d"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
