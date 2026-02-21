gsap.registerPlugin(Flip);
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

//second sectionm gallery section
const triggerFlipOnScroll = (galleryWrapEl, options) => {
    let settings = {
        flip: {
            absoluteOnLeave: false,
            absolute: false,
            scale: true,
            simple: true,
        },
        scrollTrigger: {
            start: 'center center',
            end: '+=300%',
        },
        stagger: 0
    };


    const galleryEl = galleryWrapEl.querySelector('.gallery__wrapper');
    const galleryCaption = galleryEl.querySelector('.gallery__wrapper--caption');
    const galleryItems = galleryEl.querySelectorAll('.gallery__wrapper--item');
    const galleryItemsInner = galleryEl.querySelectorAll('.gallery__wrapper--item-main');

    galleryEl.classList.add('gallery__wrapper--switch');
    const flipstate = Flip.getState([galleryItems, galleryCaption], {
        props: 'filter, opacity'
    });

    galleryEl.classList.remove('gallery__wrapper--switch');

    const tlFlip = Flip.to(flipstate, {
        ease: 'none',
        absoluteOnLeave: settings.flip.absoluteOnLeave,
        absolute: settings.flip.absolute,
        scale: settings.flip.scale,
        simple: settings.flip.simple,
        scrollTrigger: {
            trigger: galleryEl,
            start: settings.scrollTrigger.start,
            end: settings.scrollTrigger.end,
            pin: galleryWrapEl,
            scrub: true,
        },
    });

    if (galleryItemsInner.length) {
        tlFlip.fromTo(galleryItemsInner, {
            scale: 2
        }, {
            scale: 1,
            scrollTrigger: {
                trigger: galleryEl,
                start: settings.scrollTrigger.start,
                end: settings.scrollTrigger.end,
                scrub: true,
            },
        }, 0);
    }
};

const gallerySection = document.querySelector('.gallery');
triggerFlipOnScroll(gallerySection, {});



let lenis;

const initSmoothScrolling = () => {
    lenis = new Lenis({
        lerp: 0.1,
        smoothWheel: true
    });
    lenis.on('scroll', () => ScrollTrigger.update());

    const scrollFn = (time) => {
        lenis.raf(time);
        requestAnimationFrame(scrollFn);
    };
    requestAnimationFrame(scrollFn);
};

initSmoothScrolling();