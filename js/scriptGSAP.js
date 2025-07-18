gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(SplitText);

window.addEventListener("scroll", reveal);

////////////////////////////////////////////////////////////////////////////////////////////////////////////

var windowHeight = window.innerHeight;
var windowWidth = window.innerWidth;
console.log(windowHeight, windowWidth)

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
var formations = document.querySelectorAll("#formations");

var AnimInfoGauche = document.querySelector("#AnimInfoGauche");
var AnimInfoDroite = document.querySelector("#AnimInfoDroite");

var terminalBloc = document.querySelectorAll(".terminalBloc");

////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ -";
const intervals = {};

// document.querySelectorAll(".resume").forEach((elem) => {
//     const targetText = elem.innerText;
//     const words = targetText.split(" ");
//     let scrambledWords = [];

//     words.forEach((word, wordIndex) => {
//         let iteration = 0;
//         let scrambledWord = "";

//         const interval = setInterval(() => {
//             scrambledWord = word.split("").map((letter, index) => {
//                 if (index < iteration) {
//                     return word[index];
//                 }
//                 return letters[Math.floor(Math.random() * letters.length)];
//             }).join("");

//             scrambledWords[wordIndex] = scrambledWord;
//             elem.innerText = scrambledWords.join(" ");

//             if (iteration >= word.length) {
//                 clearInterval(interval);
//             }

//             iteration += 1 / 3;
//         }, 50);
//     });
// });

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
            y: ajustementCard - windowHeight * 0.125,
            height: windowWidth,
            width: windowHeight,
            scrollTrigger: {
                id: "cardImgSecond",
                trigger: ".cardImg",
                start: "top 12.5%",
                end: "top -100%",
                scrub: true,
                ease: "power3.inOut",
                //markers: true,
            }
        }
    );
})

ScrollTrigger.create({
    id: "sticky",
    trigger: ".imgVoyageurBloc",
    start: "top 12.5%",
    endTrigger: ".cardImg",
    end: "top -100%",
    pin: true,
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////

var startAnimation = "top 40%";
var endAnimation = "top 10%";

document.querySelectorAll("#capteurFormations").forEach((elem) => {

    gsap.from(
        "#AnimInfoGauche, #AnimInfoDroite",
        {
            y: 200,
            opacity: 0,
            scrollTrigger: {
                trigger: elem,
                toggleActions: "restart none none reverse",
                start: startAnimation,
                end: endAnimation,
                scrub: true,
                //markers: true
            }
        }
    );

    gsap.from(
        ".terminalBloc, .galleryBackground",
        {
            opacity: 0,
            scrollTrigger: {
                trigger: elem,
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
                trigger: elem,
                toggleActions: "restart none none reverse",
                start: startAnimation,
                end: endAnimation,
                scrub: true,
                // markers: true
            }
        }
    );
});


document.querySelectorAll(".terminalBloc").forEach(function () {
    gsap.from(
        ".terminalBloc",
        {
            scrollTrigger: {
                id: "terminalBloc",
                trigger: ".terminalBloc",
                toggleActions: "restart none none reverse",
                start: "top 10%",
                end: "top -100%",
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

document.querySelectorAll(".expProDetail").forEach((expBlock, blockIndex) => {
    const details = expBlock.querySelectorAll(".detailAnim");

    details.forEach((detail) => {
        gsap.from(detail, {
            scrollTrigger: {
                trigger: detail,
                start: "top 100%",
                end: "top 50%",
                toggleActions: "play none none reverse",
                scrub: true,
                //markers: true
            },
            x: isWindowAbove1200
                ? (blockIndex % 2 === 0 ? 300 : -300)
                : 300,
            opacity: 0,
        });
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

// document.querySelectorAll(".galleryBackground").forEach((elem) => {
//     gsap.to(
//         elem,
//         {
//             y: -1000,
//             scrollTrigger: {
//                 id: "galleryBackground",
//                 trigger: elem,
//                 toggleActions: "restart none none reverse",
//                 start: "top 80%",
//                 end: "bottom -1000px",
//                 scrub: true,
//                 pin: true,
//                 //markers: true
//             }
//         }
//     );
// })

///////////////////////////////////////////////////////////////////////////////////////////////////////////

// const st = SplitText.create("p", { type: "chars", charsClass: "char" });

// st.chars.forEach((char) => {
//     gsap.set(char, { attr: { "data-content": char.innerHTML } });
// });

// const textBlock = document.querySelector(".scrabledWord");

// textBlock.onpointermove = (e) => {
//     st.chars.forEach((char) => {
//         const rect = char.getBoundingClientRect();
//         const cx = rect.left + rect.width / 2;
//         const cy = rect.top + rect.height / 2;
//         const dx = e.clientX - cx;
//         const dy = e.clientY - cy;
//         const dist = Math.sqrt(dx * dx + dy * dy);
//         if (dist < 50)
//             gsap.to(char, {
//                 overwrite: true,
//                 duration: 1.2 - dist / 100,
//                 scrambleText: {
//                     text: char.dataset.content,
//                     chars: "",
//                     speed: 2,
//                 },
//                 ease: 'none'
//             });
//     });
// };



///////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////// Compétences ///////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////

document.querySelectorAll(".sectionBD").forEach((elem) => {

    gsap.from(
        elem,
        {
            x: windowWidth,
            scrollTrigger: {
                id: "sectionBD",
                trigger: elem,
                toggleActions: "restart none none reverse",
                start: "top 0%",
                end: "top -100%",
                scrub: true,
                pin: true,
                //markers: true,
            }
        }
    );

    ScrollTrigger.create({
        id: "sticky",
        trigger: elem,
        start: "bottom 100%",
        end: "bottom 0%",
        pin: true,
        //s: true
    });
})



document.querySelectorAll(".sectionWeb").forEach((elem) => {
    gsap.from(
        elem,
        {
            x: -windowWidth,
            scrollTrigger: {
                id: "sectionWeb",
                trigger: elem,
                toggleActions: "restart none none reverse",
                start: "top 0%",
                end: "top -100%",
                scrub: true,
                pin: true,
                //markers: true,
            }
        }
    );

    ScrollTrigger.create({
        id: "sticky",
        trigger: elem,
        start: "bottom 100%",
        end: "bottom 0%",
        pin: true,
        //markers: true
    });
})

document.querySelectorAll(".sectionDev").forEach((elem) => {
    gsap.from(
        elem,
        {
            x: windowWidth,
            scrollTrigger: {
                id: "sectionDev",
                trigger: elem,
                toggleActions: "restart none none reverse",
                start: "top 0%",
                end: "top -100%",
                scrub: true,
                pin: true,
                //markers: true,
            }
        }
    );

    ScrollTrigger.create({
        id: "sticky",
        trigger: elem,
        start: "bottom 100%",
        end: "bottom 0%",
        pin: true,
        //markers: true
    });
})


document.querySelectorAll(".sectionLangue").forEach((elem) => {
    gsap.from(
        elem,
        {
            x: -windowWidth,
            scrollTrigger: {
                id: "sectionLangue",
                trigger: elem,
                toggleActions: "restart none none reverse",
                start: "top 0%",
                end: "top -100%",
                scrub: true,
                pin: true,
                //markers: true,
            }
        }
    );

    ScrollTrigger.create({
        id: "sticky",
        trigger: elem,
        start: "bottom 100%",
        end: "bottom 0%",
        pin: true,
        //markers: true
    });
})

document.querySelectorAll(".competencesLigneTxt").forEach((elem) => {

    gsap.from(
        elem,
        {
            y: 100,
            opacity: 0,
            scrollTrigger: {
                id: "competencesTxt",
                trigger: elem,
                toggleActions: "restart none none reverse",
                start: "top 0%",
                end: "top -30%",
                scrub: true,
                // markers: true,
            }
        }
    )
})

document.querySelectorAll(".competencesImgBloc").forEach((bloc) => {
    gsap.from(bloc.querySelectorAll(".competencesImg"), {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power2.out",
        scrollTrigger: {
            trigger: bloc,
            toggleActions: "restart none none reverse",
            start: "top -30%",
            end: "top -50%",
            scrub: true
        }
    });
});

document.querySelectorAll("path.path").forEach((path) => {
    const length = path.getTotalLength();

    // Initialisation CSS
    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length;

    // Animation GSAP avec ScrollTrigger
    gsap.to(path, {
        strokeDashoffset: 0,
        ease: "none",
        scrollTrigger: {
            trigger: path,
            start: "top -30%",
            end: "bottom -20%",
            scrub: true,
        }
    });
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////// Projets ///////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////
function createGrid() {
    console.log("createGrid")

    heightVH = 10;
    widthVW = 9.9;

    console.log(heightVH, widthVW)

    for (var i = 0; i < 10; i++) {
        for (var j = 0; j < 10; j++) {
            document.getElementById("transitionProject").innerHTML += `
                <div class="pixel" style="width:${widthVW}vw;height:${heightVH}vh"></div>
                `;
        }
    }

    console.log("end createGrid")
}
createGrid();


gsap.from("#transitionProject .pixel", {
    visibility: "hidden",
    stagger: { amount: 1, from: "random" },
    scrollTrigger: {
        trigger: "#transitionProject",
        start: "top 15%",
        end: "top -30%",
        scrub: true,
        //markers: true,
    }
});

ScrollTrigger.create({
    id: "sticky",
    trigger: "#transitionProject",
    start: "top 0%",
    end: "top -100%",
    pin: true,
});


///////////////////////////////////////////////////////////////////////////////////////////////////////////

document.querySelectorAll(".projectWeb").forEach((elem) => {

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: elem,
            start: "top 105%",
            end: "top -5%",
            scrub: true,
            // markers: true,
        }
    });

    tl.fromTo(
        elem,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1 }
    )
        .to(
            elem,
            { y: 0, opacity: 1 }
        )
        .to(
            elem,
            { y: -100, opacity: 0 }
        );
})

///////////////////////////////////////////////////////////////////////////////////////////////////////////

document.querySelectorAll(".projectWeb").forEach((project) => {
    const projectresume = project.querySelector(".projectWebResume");

    project.addEventListener("mouseenter", () => {
        projectresume.classList.add("open");
    });

    project.addEventListener("mouseleave", () => {
        projectresume.classList.remove("open");
    });
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////

document.querySelectorAll(".projectJava").forEach((elem, index) => {
    gsap.from(
        elem,
        {
            x: windowWidth,
            scrollTrigger: {
                id: "sectionLangue",
                trigger: elem,
                toggleActions: "restart none none reverse",
                start: "top 25%",
                end: "top -25%",
                scrub: true,
                //markers: true,
            }
        }
    );


    elem.style.top = (20 + 5 * index) + "vh";
    elem.style.left = (20 + 3 * index) + "vw";
})


///////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////

function reveal() {

    if (document.querySelector("#capteurFormations").getBoundingClientRect().top < windowHeight * 0.6) {

        // Enleve
        document.querySelector(".imgVoyageurBloc").classList.add("v-hidden");
        document.querySelector(".acceuil").classList.add("v-hidden");

        document.querySelector("header").classList.remove("fixHeader");
        document.querySelector("#AnimInfoGauche").classList.remove("fixHeader");
        document.querySelector("#AnimInfoDroite").classList.remove("fixHeader");

        // Met
        document.querySelector("#formations").classList.remove("v-hidden");
    } else {

        // Enleve
        document.querySelector(".imgVoyageurBloc").classList.remove("v-hidden");
        document.querySelector(".acceuil").classList.remove("v-hidden");

        document.querySelector("header").classList.add("fixHeader");
        document.querySelector("#AnimInfoGauche").classList.add("fixHeader");
        document.querySelector("#AnimInfoDroite").classList.add("fixHeader");

        // Met
        document.querySelector("#formations").classList.add("v-hidden");
    }

    // Si projet
    if (document.querySelector("#transitionProjectBloc").getBoundingClientRect().top > windowHeight * -0.5) {

        document.querySelector("#transitionProject").classList.remove("d-none");
        document.querySelector("#projects").classList.add("v-hidden");
        document.querySelector("body").classList.remove("blanc");
        document.querySelector("footer").classList.add("d-none");

    } else {

        document.querySelector("#transitionProject").classList.add("d-none");
        document.querySelector("#projects").classList.remove("v-hidden");
        document.querySelector("body").classList.add("blanc");
        document.querySelector("footer").classList.remove("d-none");

    }
}
reveal()

///////////////////////////////////////////////////////////////////////////////////////////////////////////

document.querySelectorAll("#progressNav").forEach((elem) => {
    gsap.from(
        elem,
        {
            width: 0,
            scrollTrigger: {
                id: "body",
                trigger: "body",
                toggleActions: "restart none none reverse",
                start: "top 0%",
                end: "bottom 100%",
                scrub: true,
                //markers: true,
            }
        }
    );
})

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