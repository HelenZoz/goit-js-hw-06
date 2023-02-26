// Напиши скрипт, який змінює кольори фону елемента < body > через
// інлайн - стиль по кліку на button.change - color і виводить 
// значення кольору в span.color.

// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div>

// Для генерування випадкового кольору використовуй функцію
// getRandomHexColor.
'use strict';

const spanEl = document.querySelector('span');
const btnEl = document.querySelector('button');
const bodyEl = document.querySelector('body');

function handleRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

let randomColor = handleRandomHexColor(); 
console.log(randomColor);

btnEl.addEventListener('click', e => {
  console.log("Button was clicked");
  spanEl.textContent = `${randomColor}`;
  bodyEl.style.backgroundColor = `${randomColor}`;
});











