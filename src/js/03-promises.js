// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//   if (shouldResolve) {
//     // Fulfill
//   } else {
//     // Reject
//   }
// }

// const ref = {
//   formPromises: document.querySelector('.form'),
//   delayInput: document.querySelector('input[name="delay"]'),
//   stepInput: document.querySelector('input[name="step"]'),
//   amountInput: document.querySelector('input[name="amount"]'),
//   promisesBtn: document.querySelector('button'),
// };
// console.log(ref.promisesBtn);

// let position = null;
// let delay = null;
// let step = null;

const formPromises = document.querySelector(".form");

formPromises.addEventListener("sudmit", onCreatePromises);

function onCreatePromises (event) {
  event.preventDefault();
  const {
    elements: { delay, step, amount }
  } = event.currentTarget;
  console.log(delay.value, step.value, amount.value);
};

