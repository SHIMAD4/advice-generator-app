let adviceId = document.querySelector('.title');
let adviceText = document.querySelector('.text');

async function responseFunc() {
  let response = await fetch('https://api.adviceslip.com/advice');
  let data = await response.json();

  let slipObj = data.slip;
  let id = slipObj.id;
  let advice = slipObj.advice;

  adviceId.textContent = 'Advice #' + id;
  adviceText.textContent = '' + advice;
};
responseFunc();