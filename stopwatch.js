window.onload = function() {

let seconds = 00;
let tens = 00;
let appendSeconds = document.getElementsByClassName('seconds');
let appendTens = document.getElementsByClassName('tens');
let startBtn = document.getElementsByClassName('start');
let stopBtn = document.getElementsByClassName('stop');
let resetBtn = document.getElementsByClassName('reset');
let interval;

console.log(appendSeconds);
console.log(appendTens);
console.log(startBtn);
console.log(stopBtn);
console.log(resetBtn);

startBtn.onclick = function() {
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
};

stopBtn.onclick = function() {
    clearInterval(interval);
};

resetBtn.onclick = function() {
    clearInterval(interval);
    seconds = '00';
    tens = '00';
    appendSeconds.innerHTML = seconds;
    appendTens.innerHTML = tens;
};

function startTimer () {
    tens++;
    if(tens <= 9) {
        appendTens.innerHTML = '0' + tens;
    }

    if(tens > 9) {
        appendTens.innerHTML = tens;
    }

    if(tens >99) {
        console.log('seconds');
        seconds++;
        appendSeconds.innerHTML = '0' + seconds;
        tens = 0;
        appendTens.innerHTML = ('0' + 0);
    }

    if(seconds > 9) {
        appendSeconds.innerHTML = seconds;
    }
}
}