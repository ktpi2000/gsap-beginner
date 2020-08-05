import { gsap } from 'gsap';

gsap.to("h1", 1, {x: 100})

gsap.from(".hello", {
	y: 50,
	opacity: 0,
	duration: 0.3,
})

gsap.to(".nyan", 1, {x: 300, y: 100, scale: 1.5})

/* circleを右100px,左100px移動させてその間色を赤に変化させる */
gsap.to(".circle", 1, {
	x: 100,
	y: 100,
	backgroundColor: 'red'
})

gsap.to(".square", 1, {
	x: 100,
	y: 100,
	scale: 1.5,
	rotation: 360,
	backgroundColor: 'blue'
})

gsap.to(".box", 3, {
	x: 200,
	rotation: 90,
	duration: 3
})
