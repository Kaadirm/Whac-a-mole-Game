const divSquares = document.querySelectorAll('.square');
const divMole = document.querySelector('.mole');
const h2TimeSecond = document.getElementById('time-second');
const h2Score = document.getElementById('score');


let result = 0;
let hitPosition
let currentTime = 60
let timerId = null;


function randomSquare(){
    divSquares.forEach(square => {
        square.classList.remove('mole')
    });

    let randomSquare = divSquares[Math.floor(Math.random()*9)];
    randomSquare.classList.add('mole');

    hitPosition = randomSquare.id 
}

divSquares.forEach(square => {
    square.addEventListener('mousedown', () => {
       if (square.id == hitPosition){
        result++;
        h2Score.textContent = result;
        hitPosition = null;
       } 
    })
})

function moveMole(){
    
    timerId = setInterval(randomSquare, 500);
}

moveMole()

function countDown(){
    currentTime--
    h2TimeSecond.textContent = currentTime
    if(currentTime === 0){
        clearInterval(countDownTimerId);
        clearInterval(timerId);
        alert('Game is finished! Your final score is' + " " + result)
    }
}

let countDownTimerId = setInterval(countDown, 1000)