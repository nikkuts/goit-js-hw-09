import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const ref = {
    dateInput: document.querySelector('input#datetime-picker'),
    startBtn: document.querySelector('button[data-start]'),
    days: document.querySelector('[data-days]'),
    hours: document.querySelector('[data-hours]'),
    minutes: document.querySelector('[data-minutes]'),
    seconds: document.querySelector('[data-seconds]'),
};

let date = null;
ref.startBtn.disabled = true;
ref.startBtn.addEventListener('click', onCountdown);

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        date = selectedDates[0];

        if(date <= Date.now()) {
            window.alert("Please choose a date in the future");
        } else {
            ref.startBtn.disabled = false;
        }
    },
};

flatpickr(ref.dateInput, options);

function onCountdown() {
    ref.startBtn.disabled = true;
    timer.start();
};

const timer = {
    intervalId: null,
    isActive: false,
    start() {
        if(this.isActive) {
            return;
        } else {
            this.isActive = true;
            this.intervalId = setInterval(() => {
                calculateDate(date) 
            }, 1000); 
        }
    },
    stop() {
        clearInterval(this.intervalId);
    },
};

function calculateDate() {
    const delta = date - Date.now();

    if(delta > 0) {
        const objectDate = convertMs(delta);
        ref.days.textContent = addLeadingZero(objectDate.days);
        ref.hours.textContent = addLeadingZero(objectDate.hours);
        ref.minutes.textContent = addLeadingZero(objectDate.minutes);
        ref.seconds.textContent = addLeadingZero(objectDate.seconds);
        console.log(convertMs(delta));
        } else {
        timer.stop();
    };  
};

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
};

function addLeadingZero(value) {
    return value.toString().padStart(2, '0');
};

