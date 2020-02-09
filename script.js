
let time = 25;      // Sets default time
let display = document.querySelector('#timer'); // sets display

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
            timer = duration;
        }
    }, 1000);
}
// Countdown Timer End  //

//

const start = document.querySelector('#start');
start.addEventListener('click', () => {
    var Countdown = 60 * time,
    display = document.querySelector('#timer');
startTimer(Countdown, display);
});

