const container = document.body
const itemsWrapper = document.querySelector('.project-list')
const effect = new StretchEffect(container, itemsWrapper)
// // Preload images
// const preloadImages = () => {
//     return new Promise((resolve, reject) => {
//         imagesLoaded(document.querySelectorAll('img'), resolve);
//     });
// };
// // And then..
// preloadImages().then(() => {
//     // Remove the loader
//     //document.body.classList.remove('loading');
//     const effect = new StretchEffect(container, itemsWrapper)
// });