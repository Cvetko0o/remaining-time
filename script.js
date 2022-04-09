const daysEl = document.getElementById('days-num')
const hoursEl = document.getElementById('hours-num')
const minutesEl = document.getElementById('minutes-num')
const secondsEl = document.getElementById('seconds-num')

let releaseDate = new Date('2 sep 2022');

function remainingTime() {
    let currDate = Date.now();
    let timeToRelease = releaseDate - currDate;

    let totalSeconds = timeToRelease / 1000;
    let minutes = Math.floor(totalSeconds / 60) % 60;
    let hours = Math.floor(totalSeconds / 3600) % 24;
    let days = Math.floor(totalSeconds / 3600 / 24);
    let seconds = Math.floor(totalSeconds % 60);

    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minutesEl.innerHTML = minutes;
    secondsEl.innerHTML = formatTime(seconds);

    function formatTime(time){
        return time < 10 ? (`0${time}`) : time;
    }
}



setInterval(remainingTime, 1000);


