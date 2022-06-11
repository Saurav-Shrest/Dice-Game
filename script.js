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

let player = 1;

let pl1CurrentCounter = 0;
let pl2CurrentCounter = 0;

let pl1Total = 0;
let pl2Total = 0;

player1.classList.add('dot');

rollDice.addEventListener('click', () => {

    imgContainer.style.display = 'block';

    let noRoll = Math.ceil(Math.random() * 6);
    console.log(noRoll);
    let diceNo = 1;

    let i = 1;
    let rot = 10;

     let int = setInterval(() => {
        diceNo = Math.ceil(Math.random() * 6);
        diceImg.src = `Image/${diceNo}.png`;
        imgContainer.style.transform = `rotate(${rot}deg)`;
        console.log(diceNo)
        if(rot > 0) {
            rot = -10;
        }else {
            rot = 10;
        }

        i++;

        if(i > noRoll) {
            stop(diceNo);
        }

    }, 500)
    function stop(num) {
        imgContainer.style.transform = `rotate(0deg)`;
        console.log(typeof(num))
        console.log(num)
        // if(num == 1) {
        //     if(player == 1) {
        //         pl1CurrentCounter = 0;
        //         pl1Current.innerText = pl1CurrentCounter;
        //         // player = 2;
        //         player1.classList.remove('dot');
        //         player2.classList.add('dot');
        //     }else {
        //         pl2CurrentCounter = 0;
        //         pl2Current.innerText = pl2CurrentCounter;
        //         player = 1;
        //         player2.classList.remove('dot');
        //         player1.classList.add('dot');
        //     }
        // }else {
            if(player == 1) {
                pl1CurrentCounter += num;
                pl1Current.innerText = pl1CurrentCounter;
            }else {
                pl2CurrentCounter += num;
                pl2Current.innerText = pl2CurrentCounter;
            }
        // }

        if(pl1Total+pl1CurrentCounter > 50) {
            pl1Total = 0;
            pl1Count.innerText = 0;
            pl1CurrentCounter = 0;
            pl1Current.innerText = 0;
            player = 2;
            player1.classList.remove('dot');
            player2.classList.add('dot');
        }else if(pl2Total+pl2CurrentCounter > 50) {
            pl2Total = 0;
            pl2Count.innerText = 0;
            pl2CurrentCounter = 0;
            player = 1;
            player2.classList.remove('dot');
            player1.classList.add('dot');
        }
        clearInterval(int);
    }

});


hold.addEventListener('click', () => {
    if(player == 1) {
        pl1Total += pl1CurrentCounter;
        pl1CurrentCounter = 0;
        pl1Current.innerText = 0;   
        pl1Count.innerText = pl1Total;
        player = 2;
        player1.classList.remove('dot');
        player2.classList.add('dot');
    }else {
        pl2Total += pl2CurrentCounter;
        pl2CurrentCounter = 0;
        pl2Count.innerText = pl2Total;
        player = 1;
        player2.classList.remove('dot');
        player1.classList.add('dot');
    }
});

newGame.addEventListener('click', () => {
    pl1Count.innerText = 0;
    pl2Count.innerText = 0;
    pl1Current.innerText = 0;
    pl2Current.innerText = 0;
    player = 1;
    pl1CurrentCounter = 0;
    pl2CurrentCounter = 0;
    pl1Total = 0;
    pl2Total = 0;
    imgContainer.style.display = 'none';
    if(player2.classList.contains('dot')) {
        player2.classList.remove('dot');
        player1.classList.add('dot');
    }
});