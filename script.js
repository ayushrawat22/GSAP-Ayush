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

gsap.set(".cards__wrapper--item-4", { filter: "brightness(1)" });
tl.to(".cards__wrapper--item-4", {
    width: "100vw",
    height: "100vh",
    borderRadius: 0,
    filter: "brightness(0.5)",
    ease: "none"
}, 0);

tl.fromTo(".cards__text--main", {
    y: "100vh",
    opacity: 0
}, {
    y: 50,
    opacity: 1,
    ease: "power2.out"
}, 0.3);


ScrollSmoother.create({
    wrapper: "#smooth-wrapper",
    content: "#smooth-content",
    smooth: 1.5,
    effects: true,
    smoothTouch: 0.1
});