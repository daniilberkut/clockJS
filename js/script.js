// noinspection NonAsciiCharacters

'use strict';

let hoursElement = document.querySelector('.hours');
let minutesElement = document.querySelector('.minutes');
let secondElement = document.querySelector('.seconds');
let interval;

function startClock() {
    interval = setInterval(clockProcessing, 1000);
    clockProcessing();
}

function clockProcessing() {
    let today = new Date();
    minutesElement.textContent = today.getMinutes();
    hoursElement.textContent = today.getHours();
    secondElement.textContent = today.getSeconds();
}
function stopClock() {
    clearInterval(interval);
    interval = null;
}
