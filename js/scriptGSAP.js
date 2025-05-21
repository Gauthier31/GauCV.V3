gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(SplitText);

window.addEventListener("scroll", reveal);

////////////////////////////////////////////////////////////////////////////////////////////////////////////

var windowHeight = window.innerHeight;
var windowWidth = window.innerWidth;

var ratioScreen = windowWidth / windowHeight;

var dif = windowHeight - windowWidth;
var ajustementCard = dif / 2;

var rationImage = 2930 / 2327;
var difRatio = ratioScreen / rationImage;

var heightLengthFit = 0;
var widthLengthFit = 0;
var heightChoose = false;

////////////////////////////////////////////////////////////////////////////////////////////////////////////

const navBar = document.querySelector("nav");
var cardImg = document.querySelectorAll(".cardImg");
var cardImgCursor = 0;
var sectionTwo = document.querySelectorAll(".sectionTwo");

var AnimInfoGauche = document.querySelector("#AnimInfoGauche");
var AnimInfoDroite = document.querySelector("#AnimInfoDroite");

var terminalBloc = document.querySelectorAll(".terminalBloc");

////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ -";
const intervals = {};

document.querySelectorAll(".resume").forEach((elem) => {
    const targetText = elem.innerText;
    const words = targetText.split(" ");
    let scrambledWords = [];

    words.forEach((word, wordIndex) => {
        let iteration = 0;
        let scrambledWord = "";

        const interval = setInterval(() => {
            scrambledWord = word.split("").map((letter, index) => {
                if (index < iteration) {
                    return word[index];
                }
                return letters[Math.floor(Math.random() * letters.length)];
            }).join("");

            scrambledWords[wordIndex] = scrambledWord;
            elem.innerText = scrambledWords.join(" ");

            if (iteration >= word.length) {
                clearInterval(interval);
            }

            iteration += 1 / 3;
        }, 50);
    });
});


///////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////// Aceuil /////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////

cardImg.forEach(function () {
    gsap.fromTo(
        ".cardImg",
        {
            rotateX: 30,
            rotateY: -90,
        },
        {
            rotateX: 0,
            rotateY: 0,
            scrollTrigger: {
                id: "cardImgFirst",
                trigger: ".cardImg",
                toggleActions: "restart none none reverse",
                start: "top 100%",
                end: "top 50%",
                scrub: true,
                // markers: true
            }
        }
    );

    gsap.fromTo(
        ".cardImg",
        {
            rotateY: 0,
            rotateZ: 0,
            y: 0,
        },
        {
            rotateY: 180,
            rotateZ: -90,
            y: ajustementCard,
            height: windowWidth,
            width: windowHeight,
            scrollTrigger: {
                id: "cardImgSecond",
                trigger: ".cardImg",
                start: "top 100px",
                end: "top -30%",
                scrub: true,
                ease: "power3.inOut"
                //markers: true,
            }
        }
    );
})

ScrollTrigger.create({
    id: "sticky",
    trigger: ".imgVoyageurDiv",
    start: "top 0px",
    endTrigger: ".cardImg",
    end: "top -30%",
    pin: true,
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////

var startAnimation = "top 40%";
var endAnimation = "top 10%";

document.querySelectorAll(".capteursectionTwo").forEach(function () {
    gsap.from(
        "#AnimInfoGauche, #AnimInfoDroite",
        {
            y: 200,
            opacity: 0,
            scrollTrigger: {
                id: "cardImgSecond",
                trigger: ".capteursectionTwo",
                toggleActions: "restart none none reverse",
                start: startAnimation,
                end: endAnimation,
                scrub: true,
                // markers: true
            }
        }
    );

    gsap.from(
        ".terminalBloc, .galleryBackground",
        {
            opacity: 0,
            scrollTrigger: {
                trigger: ".capteursectionTwo",
                toggleActions: "restart none none reverse",
                start: startAnimation,
                end: endAnimation,
                scrub: true,
                // markers: true
            }
        }
    );

    gsap.from(
        "header",
        {
            y: -50,
            opacity: 0,
            scrollTrigger: {
                trigger: ".capteursectionTwo",
                toggleActions: "play none none reverse",
                toggleActions: "restart none none reverse",
                start: startAnimation,
                end: endAnimation,
                scrub: true,
                // markers: true
            }
        }
    );
})

document.querySelectorAll(".terminalBloc").forEach(function () {
    gsap.from(
        ".terminalBloc",
        {
            scrollTrigger: {
                id: "terminalBloc",
                trigger: ".terminalBloc",
                toggleActions: "restart none none reverse",
                start: "top 20%",
                end: "top -30%",
                scrub: true,
                pin: true,
                //markers: true
            }
        }
    );
})

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////// Expérience ///////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////

let isWindowAbove1200 = window.innerWidth > 1200;

document.querySelectorAll(".expProDetail").forEach((detail, index) => {
    gsap.from(detail, {
        scrollTrigger: {
            trigger: detail,
            start: "top 70%",
            end: "bottom 25%",
            toggleActions: "play reverse play reverse",
            // markers: true
        },
        x: (index % 2 === 1 && isWindowAbove1200) ? -300 : 300,
        opacity: 0,
        duration: 0.7,
    });
});

document.querySelectorAll(".exProligne").forEach((exProligne) => {

    gsap.fromTo(
        exProligne.querySelectorAll(".hrBlack")[0],
        {
            height: "0%",
        }, {
        height: "calc(100% - 40px)",
        scrollTrigger: {
            trigger: exProligne,
            start: "top 65%",
            end: "bottom 65%",
            scrub: true,
            // markers: true
        },
    });
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////

document.querySelectorAll(".galleryBackground").forEach((elem) => {
    gsap.to(
        elem,
        {
            y: -1000,
            scrollTrigger: {
                id: "galleryBackground",
                trigger: elem,
                toggleActions: "restart none none reverse",
                start: "top 80%",
                end: "bottom -1000px",
                scrub: true,
                pin: true,
                //markers: true
            }
        }
    );
})

///////////////////////////////////////////////////////////////////////////////////////////////////////////

const st = SplitText.create("p", { type: "chars", charsClass: "char" });

st.chars.forEach((char) => {
    gsap.set(char, { attr: { "data-content": char.innerHTML } });
});

const textBlock = document.querySelector(".scrabledWord");

textBlock.onpointermove = (e) => {
    st.chars.forEach((char) => {
        const rect = char.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = e.clientX - cx;
        const dy = e.clientY - cy;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 50)
            gsap.to(char, {
                overwrite: true,
                duration: 1.2 - dist / 100,
                scrambleText: {
                    text: char.dataset.content,
                    chars: "",
                    speed: 2,
                },
                ease: 'none'
            });
    });
};



///////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////// Compétences ///////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////

document.querySelectorAll(".sectionBD").forEach((elem) => {
    gsap.from(
        elem,
        {
            rotateZ: 30,
            xPercent: -100,
            yPercent: 25,
            scrollTrigger: {
                id: "sectionBD",
                trigger: elem,
                toggleActions: "restart none none reverse",
                start: "top 100%",
                end: "top 0%",
                scrub: true,
                //markers: true
            }
        }
    );
})

document.querySelectorAll(".sectionWeb").forEach((elem) => {
    gsap.from(
        elem,
        {
            rotateZ: -30,
            xPercent: 100,
            yPercent: 25,
            scrollTrigger: {
                id: "sectionWeb",
                trigger: elem,
                toggleActions: "restart none none reverse",
                start: "top 100%",
                end: "top 0%",
                scrub: true,
                //markers: true
            }
        }
    );
})

document.querySelectorAll(".sectionDev").forEach((elem) => {
    gsap.from(
        elem,
        {
            rotateZ: 30,
            xPercent: -100,
            yPercent: 25,
            scrollTrigger: {
                id: "sectionDev",
                trigger: elem,
                toggleActions: "restart none none reverse",
                start: "top 100%",
                end: "top 0%",
                scrub: true,
                //markers: true
            }
        }
    );
})

document.querySelectorAll(".sectionLangue").forEach((elem) => {
    gsap.from(
        elem,
        {
            rotateZ: -30,
            xPercent: 100,
            yPercent: 25,
            scrollTrigger: {
                id: "sectionLangue",
                trigger: elem,
                toggleActions: "restart none none reverse",
                start: "top 100%",
                end: "top 0%",
                scrub: true,
                //markers: true
            }
        }
    );
})

///////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////// Compétences ///////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////
function createGrid() {
    console.log("createGrid")

    heightVH = 10;
    widthVW = 9.9;

    console.log(heightVH, widthVW)

    for (var i = 0; i < 10; i++) {
        for (var j = 0; j < 10; j++) {
            document.getElementById("transitionProjet").innerHTML += `
                <div class="pixel" style="width:${widthVW}vw;height:${heightVH}vh"></div>
                `;
        }
    }

    console.log("end createGrid")
}
createGrid();


gsap.from("#transitionProjet .pixel", {
    visibility: "hidden",
    stagger: { amount: 1, from: "random" },
    scrollTrigger: {
        trigger: "#transitionProjet",
        start: "top 0%",
        end: "top -30%",
        scrub: true,
        markers: true,
    }
});

ScrollTrigger.create({
    id: "sticky",
    trigger: "#transitionProjet",
    start: "top 0%",
    end: "top -100%",
    pin: true,
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////

function reveal() {

    if (cardImg[0].getBoundingClientRect().left == 0) {

        // Enleve
        document.querySelector(".imgVoyageurDiv").classList.add("v-hidden");
        document.querySelector(".acceuil").classList.add("v-hidden");

        document.querySelector("header").classList.remove("fixHeader");
        document.querySelector("#AnimInfoGauche").classList.remove("fixHeader");
        document.querySelector("#AnimInfoDroite").classList.remove("fixHeader");

        // Met
        document.querySelector(".sectionTwo").classList.remove("v-hidden");
        document.querySelector(".capteursectionTwo").classList.remove("d-none");
    } else {

        // Enleve
        document.querySelector(".imgVoyageurDiv").classList.remove("v-hidden");
        document.querySelector(".acceuil").classList.remove("v-hidden");

        document.querySelector("header").classList.add("fixHeader");
        document.querySelector("#AnimInfoGauche").classList.add("fixHeader");
        document.querySelector("#AnimInfoDroite").classList.add("fixHeader");

        // Met
        document.querySelector(".sectionTwo").classList.add("v-hidden");
        document.querySelector(".capteursectionTwo").classList.remove("d-none");
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