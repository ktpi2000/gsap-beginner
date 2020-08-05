import { gsap } from 'gsap';

gsap.to("h1", 1, {x: 100})

gsap.from(".hello", {
    y: 50,
    opacity: 0,
    duration: 0.3,
  })

gsap.to(".nyan", 1, {x: 300, y: 100, scale: 1.5})
