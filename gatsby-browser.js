/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./src/styles/style.scss"
//import { globalHistory } from "@reach/router"

import "./public/static/fonts/fonts.css"

// const $ = require("jquery")

// export const onInitialClientRender = () => {
// 	//window.scrollTo(0, 0);
//   $(document).ready(function () {
//     console.log("onInitialClientRender")
//   });
// }

// export const onRouteUpdate = () => {
// 	//window.scrollTo(0, 0);
//   $(document).ready(function () {
//     console.log("onRouteUpdate")
//   });
// }

// const transitionDelay = 500

// export const shouldUpdateScroll = ({
//     routerProps: { location },
//     getSavedScrollPosition,
// }) => {
// 	console.log('location.action = '+location.action)
//     if (location.action === 'PUSH') {
//         window.setTimeout(() => window.scrollTo(0, 0), transitionDelay)
//     } else {
//         const savedPosition = getSavedScrollPosition(location)
//         window.setTimeout(
//             () => window.scrollTo(...(savedPosition || [0, 0])),
//             transitionDelay
//         )
//     }
//     return false
//     }

// const addScript = url => {
//   const script = document.createElement("script")
//   script.src = url
//   script.async = true
//   document.body.appendChild(script)
// }

// export const onClientEntry = () => {
//   window.onload = () => {
    
//     // addScript("./static/js/imagesloaded.pkgd.min.js") 
//     // addScript("./static/js/Math.js")
//     // addScript("./static/js/StretchEffect.js")
//     // addScript("./static/js/EffectShell.js")
//     // addScript("./static/js/ImageEffect.js")
       
//   }
// }

// export const onInitialClientRender = () => {
//   window.scrollTo(0, 0);
// };


// globalHistory.listen(({ location }) => {

//   if(location.pathname !== "/"){
//     window.addEventListener('load', () => {
//       document.body.classList.add('about-page');
//     });
//   }

// })

// // ES5 way
// // exports.onClientEntry = () => {
// // ES6 way
// export const onClientEntry = () => {
//   // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
//   if (!(`IntersectionObserver` in window)) {
//     import(`intersection-observer`)
//     console.log(`# IntersectionObserver is polyfilled!`)
//   }
// }