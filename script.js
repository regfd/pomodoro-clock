
// BUTTONS
const start_btn = document.querySelector('#start')
const pause_btn = document.querySelector('#pause')
const reset_btn = document.querySelector('#reset')
const break_btn = document.querySelector("#break.")

//DISPLAY
const display = document.querySelector('#display').innerHTML = "Test";










/*
let time = 1;      // Sets default time
let display = document.querySelector('#timer'); // sets display
const start = document.querySelector('#start');






window.onload = function () {               // loads timer on screen
display.textContent = time + ":00";
}





// Countdown Timer //
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            startTimer(5, display )
        }
    }, 1000);
}
// Countdown Timer End  //

//


/*start.addEventListener('click', () => {
    var Countdown = 60 * time,
    display = document.querySelector('#timer');
startTimer(Countdown, display);
}); */

