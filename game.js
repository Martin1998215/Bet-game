const finalResult = document.querySelector(".final-result");
const UserResult = document.querySelector(".user-result");
const computerResult = document.querySelector(".computer-result");
const enterBtn = document.querySelector(".btn");
const outputDisplay = document.querySelector(".output");
const balance = document.querySelector(".c2");
const rate = document.querySelector(".c1");
const stakeDisplay = document.querySelector(".stake");
const amount = document.querySelector(".amount");
const playBtn = document.querySelector(".enter-btn");
//const all = document.querySelectorAll(".game");
const entry = document.querySelector(".input");
const user = entry.value.toLowerCase();

const winBtn = document.getElementById("win");
const drawBtn = document.getElementById("draw");
const looseBtn = document.getElementById("loose");


winBtn.addEventListener("click", function () {
    active(winBtn)
    inactive([drawBtn, looseBtn]);
    stakeDisplay.innerHTML = winNumb;
});

drawBtn.addEventListener("click", function () {
    active(drawBtn);
    inactive([winBtn, looseBtn]);
    stakeDisplay.innerHTML = drawNumb;
});

looseBtn.addEventListener("click", function () {
    active(looseBtn);
    inactive([winBtn, drawBtn]);
    stakeDisplay.innerHTML = looseNumb;
});


function active(element) {
    element.classList.add('active');
}

function inactive(elementsArray) {
    elementsArray.forEach(element => {
        element.classList.remove('active');
    });
}

const winDisplay = document.querySelector(".random-1");
const drawDisplay = document.querySelector(".random-2");
const looseDisplay = document.querySelector(".random-3");

setInterval(() => {
    const eva = eval(amount.value * stakeDisplay.innerHTML);
    outputDisplay.innerHTML = eva;
}, 10);


//function randomValues() {
const winArry = [1, 2, 3, 4, 5, 6];
const drawArry = [1, 2, 3, 4, 5, 6];
const looseArry = [1, 2, 3, 4, 5, 6];

let winValue = Math.floor(Math.random() * winArry.length);
const winNumb = winArry[winValue];

let drawValue = Math.floor(Math.random() * drawArry.length);
const drawNumb = drawArry[drawValue];

let looseValue = Math.floor(Math.random() * looseArry.length);
const looseNumb = looseArry[looseValue];

winDisplay.innerHTML = winNumb;
drawDisplay.innerHTML = drawNumb;
looseDisplay.innerHTML = looseNumb;



//}

// window.addEventListener("DOMContentLoaded", function () {
//     randomValues()
// });

// play function
function Play() {
    const user = entry.value.toLowerCase();
    const computerArray = ['r', 'p', 's'];
    let computerChoice = Math.floor(Math.random() * computerArray.length);
    const computerAnswer = computerArray[computerChoice];

    if (user === computerAnswer) {
        finalResult.innerHTML = "Draw";
        rate.innerHTML = "Draw"
        finalResult.style.color = "white";
        computerResult.innerHTML = computerAnswer;
        UserResult.innerHTML = user;
    }
    if (test(user, computerAnswer)) {
        finalResult.innerHTML = "Win";
        rate.innerHTML = "Win"
        finalResult.style.color = "blue";
        computerResult.innerHTML = computerAnswer;
        UserResult.innerHTML = user;
    }
    if (test(computerAnswer, user)) {
        finalResult.innerHTML = "Loose";
        rate.innerHTML = "Loose"
        finalResult.style.color = "red";
        computerResult.innerHTML = computerAnswer;
        UserResult.innerHTML = user;
    }

}


// test function
function test(user, computer) {
    if ((user == 'r' && computer == 's') || (user == 'p' && computer == 'r') || (user == 's' && computer == 'p'))
        return true;
}

function trial() {
    if (winBtn.innerHTML == finalResult.innerHTML || drawBtn.innerHTML == finalResult.innerHTML || looseBtn.innerHTML == finalResult.innerHTML) {
        balance.innerHTML = outputDisplay.innerHTML;
        // balance.innerHTML = outputDisplay.innerHTML;
    } else {
        balance.innerHTML = 0;
    }

}

playBtn.addEventListener("click", function () {
    Play();
    entry.value = '';
    trial()

});