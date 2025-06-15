function textScrambled(event, txt) {

    // Clear any existing interval for this element
    if (intervals[txt]) {
        clearInterval(intervals[txt]);
    }

    event.style.width = event.offsetWidth + "px";

    let iteration = 0;

    intervals[txt] = setInterval(() => {
        event.innerText = event.innerText
            .split("")
            .map((letter, index) => {
                if (index < iteration) {
                    return txt[index];
                }
                return letters[Math.floor(Math.random() * 26)];
            })
            .join("");

        if (iteration >= txt.length) {
            clearInterval(intervals[txt]);
            delete intervals[txt];
        }

        iteration += 1 / 3;
    }, 20);
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////// Formation ////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////

let pourcentageTxt = document.getElementById("pourcentageTxt");
let progressionBloc = document.getElementById("progression");
// let progEncours = document.getElementById("progEncours");
let terminalElement = document.getElementById("terminal");

let tabIdTimeOut = [-1];
let timerId;

let numFormation = -1;
var idLangue = 0;

// Ecriture dans le temrinal
let formation;
//progEncours.style.visibility = "hidden";

let progress = 0;
let speed = 10; // Vitesse de frappe (en millisecondes par caractère)

let phrase;
let char;


let select = document.querySelector(".select");
let options = document.querySelector(".options");

let arrowUp = document.querySelector("#arrowUp");
let arrowDown = document.querySelector("#arrowDown");
let option = document.querySelectorAll(".option");

option.forEach((op, index) => {
    op.addEventListener("click", () => progression(index))
})

function optionOpen() {

    if (options.classList.contains("d-none")) {
        options.classList.remove("d-none")
        arrowDown.classList.add("d-none")
        arrowUp.classList.remove("d-none")
    } else {
        options.classList.add("d-none")
        arrowUp.classList.add("d-none")
        arrowDown.classList.remove("d-none")
    }
}

function progression(numFormation) {

    options.classList.add("d-none");
    arrowUp.classList.add("d-none")
    arrowDown.classList.remove("d-none")

    // Arrêtez toutes les minuteries en cours
    while (tabIdTimeOut.length > 1) {
        window.clearTimeout(tabIdTimeOut[tabIdTimeOut.length - 1]);
        tabIdTimeOut.pop()
    }

    formation = FORMATION[numFormation];
    progress = 0;
    typeText();
}

function typeText() {


    // progEncours.style.visibility = "visible";

    // On écrit le répertoire / titre
    if (progress == 0) {
        phrase = formation[progress][idLangue];
        terminalElement.innerHTML += `
            <div class="row jc-end">
                <span class='message'>${phrase}</span>
            </div>`;
        terminalElement.scrollTop = terminalElement.scrollHeight;
        progress++
    }

    if (progress < formation.length - 1) {

        phrase = formation[progress][idLangue];
        char = 0;
        typePhrase();
    } else {
        // progEncours.style.visibility = "hidden";
    }
}

function typePhrase() {

    if (char < phrase.length) {
        terminalElement.innerHTML += phrase.charAt(char);
        terminalElement.scrollTop = terminalElement.scrollHeight;
        char++;
        timerId = setTimeout(typePhrase, speed);
        tabIdTimeOut.push(timerId)
    } else {

        if (progress != 0 && progress < formation.length - 2) {
            terminalElement.innerHTML += "<br/><br/>";
            terminalElement.scrollTop = terminalElement.scrollHeight;
        }
        progress++;
        timerId = setTimeout(typeText, speed);
        tabIdTimeOut.push(timerId)
    }
}

function afficherTailleBloc() {
    const largeurEnPourcentage = (progressionBloc.offsetWidth / (progressionBloc.parentElement.offsetWidth - 15)) * 100;
    pourcentageTxt.innerHTML = largeurEnPourcentage.toFixed(0) + "%";
}

// const observer2 = new ResizeObserver(afficherTailleBloc);
// observer2.observe(progressionBloc);

///////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////// Experiences ///////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////

document.querySelectorAll(".pixelTab div img").forEach(element => {
    var random = Math.floor(Math.random() * 20);
    element.style.width = (random + 20) + "vw"; // Set the width as a string with the unit
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////// Compétences ///////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////// Projets /////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////// Interet /////////////////////////////////////////////////

// const interet = document.querySelectorAll('.interet.circleHover');

// interet.forEach(div => {
//     div.addEventListener("mousemove", function (e) {
//         const rect = div.getBoundingClientRect();
//         const relX = e.clientX - rect.left;
//         const relY = e.clientY - rect.top;

//         const fill = div.querySelector(".circleInteret");
//         fill.style.top = relY + "px";
//         fill.style.left = relX + "px";
//     });
// });

document.querySelectorAll(".interetBloc").forEach((elem) => {
    elem.innerHTML += elem.innerHTML;
})

////////////////////////////////////////////////// Detail /////////////////////////////////////////////////

const detail = document.querySelectorAll('.detail.circleHover');

detail.forEach(div => {
    div.addEventListener("mousemove", function (e) {
        const rect = div.getBoundingClientRect();
        const relX = e.clientX - rect.left;
        const relY = e.clientY - rect.top;

        const fill = div.querySelector(".circleDetail");
        fill.style.top = relY + "px";
        fill.style.left = relX + "px";
    });
});
