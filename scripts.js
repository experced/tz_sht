// Initialize AOS (Animate On Scroll) library
AOS.init({
    duration: 1200, // Duration of animations in milliseconds
    easing: 'ease-in-out', // Easing function
    once: true // Whether animation should happen only once
});

// GSAP animation example for header
gsap.from("header h1", {
    duration: 2,
    y: -100,
    opacity: 0,
    ease: "bounce.out"
});

// GSAP animation example for the section cards
gsap.from(".card", {
    duration: 1.5,

    y: 50,
    stagger: 0.3
});

