import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';
let timeCheck;
let timerId = null;
const INTERVAL_DURATION = 1000;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    timeCheck = selectedDates[0].getTime();
    if (timeCheck >= date.getTime()) {
      ref.btnStart.disabled = false;
    } else Notiflix.Notify.failure('Please choose a date in the future');
  },
};

const date = new Date();

const fp = flatpickr('#datetime-picker', options);

const ref = {
  btnStart: document.querySelector('[data-start]'),
  timerDays: document.querySelector('[data-days]'),
  timerHours: document.querySelector('[data-hours]'),
  timerMinutes: document.querySelector('[data-minutes]'),
  timerSeconds: document.querySelector('[data-seconds]'),
};

ref.btnStart.disabled = true;
ref.btnStart.addEventListener('click', startOn);
function startOn() {
  ref.btnStart.disabled = true;
  let currentTime = timeCheck - date.getTime();

  timerId = setInterval(() => {
    if (currentTime < 0) {
      return;
    }
    ref.timerDays.textContent = addLeadingZero(convertMs(currentTime).days);
    ref.timerHours.textContent = addLeadingZero(convertMs(currentTime).hours);
    ref.timerMinutes.textContent = addLeadingZero(
      convertMs(currentTime).minutes
    );
    ref.timerSeconds.textContent = addLeadingZero(
      convertMs(currentTime).seconds
    );
      currentTime -= 1000;
  }, INTERVAL_DURATION);


function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
function addLeadingZero(value) {
  return String(value).padStart(2, 0);
}
