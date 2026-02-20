

gsap.registerPlugin(ScrollTrigger);
const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".cards",
        start: "center center",
        end: "+=200%",
        scrub: true,
        pin: true
    }
});

tl.to(".cards__wrapper", {
    maxWidth: "none",
    ease: "none"
}, 0);

tl.to(".cards__wrapper--item-4", {
    width: "100vw",
    height: "100vh",
    borderRadius: 0,
    ease: "none"
}, 0);


ScrollSmoother.create({
    wrapper:"#smooth-wrapper",
    content:"#smooth-content",
	smooth: 1.5, 
	effects: true, 
	smoothTouch: 0.1 
});