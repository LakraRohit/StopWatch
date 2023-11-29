const sec = document.getElementById('sec');
const min = document.getElementById('min');
const hr = document.getElementById('hr');
const start = document.getElementById('start');
const stop = document.getElementById('stop');
const restart = document.getElementById('restart');

let secCount = 0;
let minCount = 0;
let hrCount = 0;
let intervalId;

function startTimer() {
    intervalId = setInterval(function() {
        secCount++;
        if (secCount >= 60) {
            secCount = 0;
            minCount++;
            if (minCount >= 60) {
                minCount = 0;
                hrCount++;
                hr.innerText = hrCount < 10 ? `0${hrCount}` : hrCount;
            }
            min.innerText = minCount < 10 ? `0${minCount}` : minCount;
        }
        sec.innerText = secCount < 10 ? `0${secCount}` : secCount;
    }, 1000);
}

start.addEventListener('click', function() {
    startTimer();
});

stop.addEventListener('click', function() {
    clearInterval(intervalId);
});

restart.addEventListener('click', function() {
    clearInterval(intervalId);
    secCount = 0;
    minCount = 0;
    hrCount = 0;
    sec.innerText = '00';
    min.innerText = '00';
    hr.innerText = '00';
});

