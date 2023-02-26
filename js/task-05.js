// Напиши скрипт, який під час набору тексту в інпуті
// input#name - input(подія input), підставляє його поточне значення
// в span#name - output.Якщо інпут порожній, у спані повинен
// відображатися рядок "Anonymous".

// < input type = "text" id = "name-input" placeholder = "Please enter
// your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

'use strict';

const inputTextEl = document.querySelector("input#name-input");
const outputEl = document.querySelector("span#name-output");

inputTextEl.addEventListener("input", handleInputWord);
  
function handleInputWord(e) {
  if (inputTextEl.value === '') {
  return outputEl.textContent = 'Anonymous';
  }

 return outputEl.textContent = inputTextEl.value;
};








