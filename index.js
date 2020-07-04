import gsap from 'gsap'


const tl = gsap.timeline()
// Header Background
tl.fromTo('.header',
  { immediateRender: 'false', autoAlpha: 0, scale: 0, delay: 2 },
  { duration: 3, ease: " power3.in", autoAlpha: 1, scale: 1 }
)

// Header Text
tl.fromTo('.heading-primary',
  { autoAlpha: 0, y: -100 },
  { duration: 2.3, autoAlpha: 1, y: 100 }, '<1.5'
)

// Cast Box
const castBox = document.querySelector('.cast-box')
// gsap.to('.cast-box', { x: 100 , y: 80})
