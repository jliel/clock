const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

const hourDigital = document.querySelector('.hour-disp');
const minDigital = document.querySelector('.min-disp');
const secondDigital = document.querySelector('.second-disp');



function setDate() {
    const currenttime = new Date();
    const seconds = currenttime.getSeconds();
    const secondDeg = (seconds / 60) * 360 + 90;
    const min = currenttime.getMinutes();
    const minDeg = (min / 60) * 360 + 90;
    const hour = currenttime.getHours();
    const hourDeg = (hour / 12) * 360 + 90;
    secondHand.style.transform = `rotate(${secondDeg}deg)`;
    minHand.style.transform = `rotate(${minDeg}deg)`;
    hourHand.style.transform = `rotate(${hourDeg}deg)`;

    hourDigital.textContent = hour < 10 ? `0${hour}` : hour;
    minDigital.textContent = min < 10 ? `0${min}` : min;
    secondDigital.textContent = seconds < 10 ? `0${seconds}` : seconds;

    if (seconds == 0) {
        secondHand.style.transitionDuration = '0s'
        minHand.style.transitionDuration = '0s'
        hourHand.style.transitionDuration = '0s'
    } else {
        secondHand.style.transitionDuration = '0.05s'
        minHand.style.transitionDuration = '0.05s'
        hourHand.style.transitionDuration = '0.05s'
    }

    requestAnimationFrame(setDate);
}

setDate();