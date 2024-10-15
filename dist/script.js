let open = document.querySelector(".open");
let close = document.querySelector(".close");
let ul = document.querySelector(".navMenus ul");

function toggleMenu() {
    if (window.innerWidth <= 992) { // Check if screen width is 992px or less
        ul.classList.toggle("hidden");
        ul.style.marginLeft = ul.classList.contains("hidden") ? "-100vw" : "0";
        open.classList.toggle("hidden");
        close.classList.toggle("hidden");
    }
}

// Open the menu and show the cross
open.addEventListener("click", toggleMenu);

// Close the menu and show the hamburger
close.addEventListener("click", toggleMenu);

// Close the menu on clicking inside it
ul.addEventListener("click", () => {
    if (window.innerWidth <= 992) { // Check screen width again
        ul.classList.add("hidden");
        ul.style.marginLeft = "-100vw";
        open.classList.remove("hidden");
        close.classList.add("hidden");
    }
});

// Animate Header elements
gsap.from("header", { duration: 1.5, y: -50, opacity: 0, ease: "bounce" });

// Animate Home Section
gsap.from(".leftSection h2,h1,h3", {
    duration: 1.3,
    x: -100,
    opacity: 0,
    ease: "power4.out",
    stagger: 0.2,
});

gsap.from(".btn", {
    scale: 0,
    opacity: 0,
    ease: "power4.out",
    duration: 1.4,
})

gsap.from(".rightSection img", {
    scale: 0,
    opacity: 0,
    ease: "power4.out",
    duration: 1
});


//Animate the about section

gsap.from(".left img", {
    scrollTrigger: {
        trigger: ".left img",
        start: "top 80%",
        end: "bottom 60%",
    },
    duration: 1,
    x: -100,
    opacity: 0,
    ease: "power2.out"
})

gsap.from(".right h6,h6,.para,.button", {
    scrollTrigger: {
        trigger: ".right h6,h6,.para,.button",
        start: "top 80%",
        end: "bottom 60%",
    },
    duration: 0.6,
    x: 100,
    opacity: 0,
    stagger: 0.2,
    ease: "power2.out"
});

//Animate the services section

gsap.from(".serviceCard .card", {
    scrollTrigger: {
        trigger: ".serviceCard .card",
        start: "top 80%",
        end: "bottom 60%",
    },
    duration: 0.7,
    y: -100,
    opacity: 0,
    stagger: 0.3,
    ease: "power2.out"
});

//Animate the contact section

gsap.from("#contact form", {
    scrollTrigger: {
        trigger: "#contact form",
        start: "top 80%",
        end: "bottom 60%",
    },
    duration: 0.6,
    scale: 0,
    opacity: 0,
    ease: "power2.out"
})

// Animate portfolio cards
gsap.from(".projectsDetail", {
    scrollTrigger: {
        trigger: ".projectsDetail",
        start: "top 60%",
        end: "bottom 60%",
        scrub: 1,
    },
    duration: 1,
    y: 100,
    opacity: 0,
    stagger: 0.2,
    ease: "power2.out"
});

// Animate social media icons
gsap.from(".socialMedia p", {
    duration: 1,
    scale: 0,
    opacity: 0,
    stagger: 0.2,
    ease: "back.out(1.7)",
});

// Animate buttons on hover
const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        gsap.to(button, { scale: 1.1, duration: 0.3 });
    });
    button.addEventListener('mouseleave', () => {
        gsap.to(button, { scale: 1, duration: 0.3 });
    });
});
