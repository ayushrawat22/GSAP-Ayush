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
};

const gallerySection = document.querySelector('.gallery');
triggerFlipOnScroll(gallerySection, {});

//scattered section


const triggerScatteredFlipOnScroll = (scatteredWrapEl, options) => {
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

    settings = Object.assign({}, settings, options);

    const galleryEl = scatteredWrapEl.querySelector('.scattered__wrapper');
    const galleryCaption = galleryEl.querySelector('.scattered__wrapper--item-caption');
    const galleryItems = galleryEl.querySelectorAll('.scattered__wrapper--item');
    const galleryItemsInner = galleryEl.querySelectorAll('.scattered__wrapper--item-main');

    const elementsToFlip = [...galleryItems, galleryCaption];

    galleryEl.classList.add('scattered__wrapper--switch');
    const flipstate = Flip.getState(elementsToFlip, {
        props: 'filter, opacity'
    });

    galleryEl.classList.remove('scattered__wrapper--switch');

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
            pin: scatteredWrapEl,
            scrub: true,
        },
        stagger: settings.stagger
    });

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
};

const scatteredSection = document.querySelector('.scattered');
triggerScatteredFlipOnScroll(scatteredSection, {
    flip: { absolute: true, scale: false },
    scrollTrigger: { start: 'center center', end: '+=900%' },
    stagger: 0.05
});

//stack section
const triggerStackFlipOnScroll = (stackWrapEl, options) => {
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

    settings = Object.assign({}, settings, options);

    const galleryEl = stackWrapEl.querySelector('.cardstack__wrapper');
    const galleryCaption = galleryEl.querySelector('.cardstack__wrapper--item-caption');
    const galleryItems = galleryEl.querySelectorAll('.cardstack__wrapper--item');

    const elementsToFlip = [...galleryItems, galleryCaption];

    galleryEl.classList.add('cardstack__wrapper--switch');
    const flipstate = Flip.getState(elementsToFlip, {
        props: 'filter, opacity'
    });

    galleryEl.classList.remove('cardstack__wrapper--switch');

    Flip.to(flipstate, {
        ease: 'none',
        absoluteOnLeave: settings.flip.absoluteOnLeave,
        absolute: settings.flip.absolute,
        scale: settings.flip.scale,
        simple: settings.flip.simple,
        scrollTrigger: {
            trigger: galleryEl,
            start: settings.scrollTrigger.start,
            end: settings.scrollTrigger.end,
            pin: stackWrapEl,
            scrub: true,
        },
        stagger: settings.stagger
    });
};

const stackSections = document.querySelectorAll('.cardstack');
stackSections.forEach(section => {
    triggerStackFlipOnScroll(section, {});
});

//pigs section 
const triggerPigsFlipOnScroll = (pigsWrapEl, options) => {
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

    settings = Object.assign({}, settings, options);

    const galleryEl = pigsWrapEl.querySelector('.pigs__wrapper');
    const galleryCaption = galleryEl.querySelector('.pigs__wrapper--text');
    const galleryItems = galleryEl.querySelectorAll('.pigs__wrapper--item');
    const galleryItemsInner = galleryEl.querySelectorAll('.pigs__wrapper--item-main');

    const elementsToFlip = [...galleryItems, galleryCaption];

    galleryEl.classList.add('pigs__wrapper--switch');
    const flipstate = Flip.getState(elementsToFlip, {
        props: 'filter, opacity'
    });

    galleryEl.classList.remove('pigs__wrapper--switch');

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
            pin: pigsWrapEl,
            scrub: true,
        },
        stagger: settings.stagger
    });

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
};

const pigsSections = document.querySelectorAll('.pigs');
pigsSections.forEach(section => {
    triggerPigsFlipOnScroll(section, {});
});

//eyes section 
const triggerEyesFlipOnScroll = (eyesWrapEl, options) => {
    let settings = {
        flip: {
            absoluteOnLeave: false,
            absolute: false,
            scale: false,
            simple: true,
        },
        scrollTrigger: {
            start: 'center center',
            end: '+=300%',
        },
        stagger: 0
    };

    settings = Object.assign({}, settings, options);

    const galleryEl = eyesWrapEl.querySelector('.eyes__wrapper');
    const galleryCaption = galleryEl.querySelector('.eyes__wrapper--text');
    const galleryItems = galleryEl.querySelectorAll('.eyes__wrapper--item');
    const galleryItemsInner = galleryEl.querySelectorAll('.eyes__wrapper--item-main');

    const elementsToFlip = [...galleryItems, galleryCaption];

    galleryEl.classList.add('eyes__wrapper--switch');
    const flipstate = Flip.getState(elementsToFlip, {
        props: 'filter, opacity'
    });

    galleryEl.classList.remove('eyes__wrapper--switch');

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
            pin: eyesWrapEl,
            scrub: true,
        },
        stagger: settings.stagger
    });

    if (galleryItemsInner.length) {
        tlFlip.fromTo(galleryItemsInner, {
            scale: 2
        }, {
            scale: 1.5,
            scrollTrigger: {
                trigger: galleryEl,
                start: settings.scrollTrigger.start,
                end: settings.scrollTrigger.end,
                scrub: true,
            },
        }, 0);
    }
};

const eyesSections = document.querySelectorAll('.eyes');
eyesSections.forEach(section => {
    triggerEyesFlipOnScroll(section, { flip: { scale: false } });
});

//lady section 
const triggerLadyFlipOnScroll = (ladyWrapEl, options) => {
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

    settings = Object.assign({}, settings, options);

    const galleryEl = ladyWrapEl.querySelector('.lady__wrapper');
    const galleryCaption = galleryEl.querySelector('.lady__wrapper--text');
    const galleryItems = galleryEl.querySelectorAll('.lady__wrapper--item');
    const galleryItemsInner = galleryEl.querySelectorAll('.lady__wrapper--item-main');

    const elementsToFlip = [...galleryItems, galleryCaption];

    galleryEl.classList.add('lady__wrapper--switch');
    const flipstate = Flip.getState(elementsToFlip, {
        props: 'filter, opacity'
    });

    galleryEl.classList.remove('lady__wrapper--switch');

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
            pin: ladyWrapEl,
            scrub: true,
        },
        stagger: settings.stagger
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

const ladySections = document.querySelectorAll('.lady');
ladySections.forEach(section => {
    triggerLadyFlipOnScroll(section, {});
});


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