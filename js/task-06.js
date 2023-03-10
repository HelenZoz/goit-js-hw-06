// Напиши скрипт, який під час втрати фокусу на інпуті(подія blur),
// перевіряє його вміст щодо правильної кількості введених символів.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />

// Яка кількість символів повинна бути в інпуті, зазначається в його
// атрибуті data - length.
// Якщо введена правильна кількість символів, то border інпуту стає
// зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS - класи valid і invalid, які
// ми вже додали у вихідні файли завдання.

// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;
// }
'use strict';

const inputTextEl = document.querySelector('#validation-input');
const inputLengthEl = document.querySelector('input[data-length="6"]');
console.log(inputTextEl);

const dataLength = Number(inputLengthEl.getAttribute('data-length'));
console.log(typeof dataLength);

inputTextEl.addEventListener("blur", (e) => {
  const lengthElements = inputTextEl.value.length;
  console.log(lengthElements);

  if (lengthElements === dataLength) {
    e.target.classList.add("valid");
    e.target.classList.remove("invalid");
    e.target.classList.remove("#validation-input");
  }
  if (lengthElements !== dataLength) {
    e.target.classList.add("invalid");
    e.target.classList.remove("valid");
    e.target.classList.remove("#validation-input");
  }
});



