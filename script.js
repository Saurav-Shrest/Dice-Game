const newGame = document.getElementById('new');

const pl1Count = document.getElementById('pl1-count');
const pl2Count = document.getElementById('pl2-count');

const player1 = document.getElementById('pl1');
const player2 = document.getElementById('pl2');

const pl1Current = document.getElementById('pl1-current-count');
const pl2Current = document.getElementById('pl2-current-count');

const rollDice = document.getElementById('roll-dice');
const hold = document.getElementById('hold');

const imgContainer = document.querySelector('.image');
const diceImg = document.getElementById('dice-img');

let pl1Counter = 0;
let pl2Counter = 0;



rollDice.addEventListener('click', () => {
    let noRoll = Math.ceil(Math.random() * 6);
    console.log(noRoll);
    let diceNo;

    let i = 1;
    let rot = 10;

    let int = setInterval(() => {
        if(i > noRoll) {
            imgContainer.style.transform = `rotate(0deg)`;
            clearInterval(int);
        }

        diceNo = Math.ceil(Math.random() * 6);
        diceImg.src = `Image/${diceNo}.png`;
        imgContainer.style.transform = `rotate(${rot}deg)`;
        if(rot > 0) {
            rot = -10;
        }else {
            rot = 10;
        }

        i++;

    }, 500)
});

hold.addEventListener('click', () => {

});

newGame.addEventListener('click', () => {

});