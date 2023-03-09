const bodyPage = document.querySelector('body');
const startBtn = document.querySelector('button[data-start=""]');
const stopBtn = document.querySelector('button[data-stop=""]');
let timerId = null;

startBtn.addEventListener('click', onChangeColorStart);
stopBtn.addEventListener('click', onChangeColorStop);

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };

function onChangeColorStart(event) {
    timerId = setInterval(() => {
        bodyPage.style.backgroundColor = getRandomHexColor();
    }, 1000);
    startBtn.disabled = true;
};

function onChangeColorStop() {
    clearInterval(timerId);
    startBtn.disabled = false;
};