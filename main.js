let adviceId = document.querySelector('.title');
let adviceText = document.querySelector('.text');

async function responseFunc() {
  let response = await fetch('https://api.adviceslip.com/advice', {
    method: "GET",
    cache: "no-cache"
  });
  let data = await response.json();

  let slipObj = data.slip;
  let {
    id,
    advice
  } = slipObj

  adviceId.textContent = 'Advice #' + id;
  adviceText.innerHTML = `"${advice}"`;
};
responseFunc();