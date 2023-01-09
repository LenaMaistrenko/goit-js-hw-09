const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');

const INTERVAL_DURATION = 1_000;
let timerId = null;
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

stopBtn.disabled = true;
startBtn.disabled = false;
startBtn.addEventListener('click', startOn);
function startOn() {
  startBtn.disabled = true;
  stopBtn.disabled = false;
  document.body.style.backgroundColor = getRandomHexColor();
  timerId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, INTERVAL_DURATION);
  return;
}

stopBtn.addEventListener('click', stopOn);
function stopOn() {
  clearInterval(timerId);
  startBtn.disabled = false;
  stopBtn.disabled = true;
}
