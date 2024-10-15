if (ScrollTrigger.isTouch !== 1) {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    ScrollSmoother.create({
        wrapper: '.wrapper',
        content: '.content',
        smooth: 1.1,
        effects: true
    });

    gsap.fromTo('.block__first__container', { opacity: 2 }, {
        opacity: 0,
            scrollTrigger: {
                trigger: '.block__first__container',
                start: 'top center',
                end: '820',
                scrub: true,
            }
        });

    gsap.fromTo('.group__row,.group__2__row,.group__3',{opacity:0.2},{
        opacity: 2,
            scrollTrigger: {
                trigger: '.group,.group__2,.group__3',
                start: 'top center',
                end: '820',
                scrub: true,
            }
        });
}
