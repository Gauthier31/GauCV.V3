gsap.registerPlugin(ScrollTrigger);

////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////

document.querySelectorAll(".cardImg").forEach((img) => {
    gsap.fromTo(
        img,
        {
            rotateX: 30,
            rotateY: -90,
        },
        {
            rotateX: 0,
            rotateY: 0,
            scrollTrigger: {
                trigger: img,
                toggleActions: "restart none none reverse",
                start: "top 100%",
                end: "top 30%",
                scrub: true,
                // markers: true
            }
        }
    );

    // Second animation: rotateY to -180 and rotateZ to -90 when the image passes the top 10%
    gsap.fromTo(img,
        {
            rotateY: 0,
            rotateZ: 0,
            y: 0
        },
        {
            rotateY: 180,
            rotateZ: -90,
            y: 400,
            scale: 3,
            scrollTrigger: {
                trigger: img,
                start: "top 5%",
                end: "top -50%",
                scrub: true,
                // markers: true,
            }
        }
    );
})

////////////////////////////////////////////////////////////////////////////////////////////////////////////
const nav = document.querySelector("nav");

document.querySelectorAll(".formation").forEach((formation) => {
    gsap.fromTo(
        nav,
        {
            y: 0,
        },
        {
            y: 0,
            scrollTrigger: {
                trigger: formation,
                toggleActions: "play none none reverse",
                start: "top 50%",
                end: "top 40%",
                markers: true,
            },
        }
    );
});

window.addEventListener("scroll", reveal);

var windowHeight = window.innerHeight;

var formation = document.querySelectorAll(".formation")
var formationTop = 0;

function reveal() {
    console.log(formationTop, windowHeight * 0.5)
    formationTop = formation[0].getBoundingClientRect().top;

    if (formationTop < windowHeight * 0.5) {
        document.querySelector(".imgVoyageurDiv").classList.add("d-none");
        document.querySelector(".acceuil").classList.add("d-none");
        console.log("test");
    } else {
        document.querySelector(".imgVoyageurDiv").classList.remove("d-none");
        document.querySelector(".acceuil").classList.remove("d-none");
        console.log("test back");
    }
}



////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Initialize a new Lenis instance for smooth scrolling
const lenis = new Lenis();

// Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
lenis.on('scroll', ScrollTrigger.update);

// Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
// This ensures Lenis's smooth scroll animation updates on each GSAP tick
gsap.ticker.add((time) => {
    lenis.raf(time * 1000); // Convert time from seconds to milliseconds
});

// Disable lag smoothing in GSAP to prevent any delay in scroll animations
gsap.ticker.lagSmoothing(0);