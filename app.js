const p1button = document.querySelector('#p1button');
const p2button = document.querySelector('#p2button');
const display1 = document.querySelector('#display1');
const display2 = document.querySelector('#display2');
const resetbutton = document.querySelector('#reset');
const maxscore = document.querySelector('#maxscore');

let score1 = 0;
let score2 = 0;
let gameover = false;
let win = 5;

maxscore.addEventListener('change', function () {
    win = parseInt(this.value);
    reset();
})

p1button.addEventListener('click', function () {
    if (!gameover) {
        score1 += 1;
        display1.textContent = score1;
        if (score1 === win) {
            gameover = true;
            display1.classList.add('has-text-success');
            display2.classList.add('has-text-danger');
            p1button.disabled = true;
            p2button.disabled = true;
        }
    }
})
p2button.addEventListener('click', function () {
    if (!gameover) {
        score2 += 1;
        display2.textContent = score2;
        if (score2 === win) {
            gameover = true;
            display1.classList.add('has-text-success');
            display2.classList.add('has-text-danger');
            p1button.disabled = true;
            p2button.disabled = true;
        }
    }
})

resetbutton.addEventListener('click', reset)
function reset() {
    score1 = 0;
    score2 = 0;
    display1.textContent = 0;
    display2.textContent = 0;
    gameover = false;
    display1.classList.remove('has-text-success', 'has-text-danger');
    display2.classList.remove('has-text-success', 'has-text-danger');
    p1button.disabled = false;
    p2button.disabled = false;
}
