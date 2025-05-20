function textScrambled(event, txt) {

    // Clear any existing interval for this element
    if (intervals[txt]) {
        clearInterval(intervals[txt]);
    }

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
let progEncours = document.getElementById("progEncours");
let terminalElement = document.getElementById("terminalBody");

let tabIdTimeOut = [-1];
let timerId;

let numFormation = -1;
var idLangue = 0;

// Ecriture dans le temrinal
let formation;
progEncours.style.visibility = "hidden";

let progress = 0;
let speed = 10; // Vitesse de frappe (en millisecondes par caractère)

let phrase;
let char;

function progression(val) {

    // Barre de progressio
    numFormation = (numFormation + val < 0 || numFormation + val > FORMATION.length) ? numFormation : numFormation + val;

    // Flèche choix
    if (numFormation == 0) {
        document.getElementById("progLeft").style.visibility = "hidden"
    } else if (numFormation == FORMATION.length - 1) {
        document.getElementById("progRight").style.visibility = "hidden"
    } else {
        document.getElementById("progLeft").style.visibility = "visible"
        document.getElementById("progRight").style.visibility = "visible"
    }
    progressionBloc.style.width = FORMATION[numFormation][FORMATION[numFormation].length - 1][idLangue] + "%";

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


    progEncours.style.visibility = "visible";

    // On écrit le répertoire / titre
    if (progress == 0) {
        phrase = formation[progress][idLangue];
        terminalElement.innerHTML += "<br/><br/><br/><span class='repertoire'>" + phrase + "</span><br/>";
        terminalElement.scrollTop = terminalElement.scrollHeight;
        progress++
    }

    if (progress < formation.length - 1) {

        phrase = formation[progress][idLangue];
        char = 0;
        typePhrase();
    } else {
        progEncours.style.visibility = "hidden";
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

const observer2 = new ResizeObserver(afficherTailleBloc);
observer2.observe(progressionBloc);

///////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////// Experiences ///////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////

document.querySelectorAll(".pixelTab div img").forEach(element => {
    var random = Math.floor(Math.random() * 20);
    element.style.width = (random + 20) + "vw"; // Set the width as a string with the unit
});


///////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////// Projets /////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////

// function createGrid() {
//     console.log("createGrid")
//     nbRowPixel = Math.floor(windowHeight / 50);
//     nbColPixel = Math.floor(windowWidth / 50);

//     heightPixel = windowHeight / nbRowPixel;
//     widthPixel = windowWidth / nbColPixel;

//     console.log(nbRowPixel, heightPixel, nbColPixel, widthPixel)

//     for (i = 0; i < nbRowPixel; i++) {
//         for (j = 0; j < nbColPixel; j++) {
//             document.getElementById("transitionProjet").innerHTML += `
//                 <div class="pixel pixelWhite" style="width:${widthPixel}px;height:${heightPixel}px"></div>
//                 `;
//         }
//     }

//     console.log("end createGrid")
// }
// createGrid();

// function animeGrid() {

//     var pixels = document.querySelectorAll(".pixel.pixelWhite");

//     if (pixels.length === 0) {
//         return;
//     }

//     var alea = Math.floor(Math.random() * pixels.length);

//     pixels[alea].classList.add("pixelBlack");
//     pixels[alea].classList.remove("pixelWhite");

//     if (pixels.length > 1) {
//         setTimeout(animeGrid, 1);
//     }
// }
