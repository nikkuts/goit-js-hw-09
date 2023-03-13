function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
};

const form = document.querySelector(".form");
const delayRef = document.querySelector('[name="delay"]');
const stepRef = document.querySelector('[name="step"]');
const amountRef = document.querySelector('[name="amount"]');

form.addEventListener("submit", onSubmitForm);

function onSubmitForm(event) {
  event.preventDefault();
  const delay = Number(delayRef.value);
  const step = Number(stepRef.value);
  const amount = Number(amountRef.value);
  
  console.log(delay, step, amount);
  // let delayPromise = delay;

  for(let i = 0; i < amount; i += 1) {
    let timeOut = delay + i * step;
    createPromise(i + 1, timeOut)
    .then(({ position, delay }) => {
      console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      console.log(`❌ Rejected promise ${position} in ${delay}ms`);
    });  
  }
};

