const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// HTML містить порожній список ul#ingredients.

// <ul id="ingredients"></ul>

// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент < li >.
// Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію 
// у список ul#ingredients.

'use strict';

const ulEl = document.querySelector('ul#ingredients');

const makeLiEl = (ingredients) => {
  return ingredients.map(li => {
  const listEl = document.createElement('li');
  listEl.textContent = `${li}`;
    listEl.classList.add('item');

  return listEl;
});
}

const element = makeLiEl(ingredients);
console.log(element);

ulEl.append(...element);




