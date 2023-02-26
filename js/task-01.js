// 1. Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories,
// тобто елементів li.item.
// // Для кожного элемента li.item у списку ul#categories,
// знайде і виведе в консоль текст заголовку
// елемента(тегу < h2 >) і кількість елементів
// в категорії(усіх < li >, вкладених в нього).
// В результаті, в консолі будуть виведені наступні повідомлення.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5
'use strict';

const ul = Array.from(document.querySelector('#categories').children);
console.log('Number of categories:', ul.length)
for (let el of ul) {
    let category = el.firstElementChild.textContent;   
    let quantityElem = el.lastElementChild.children.length;
    console.log(`Category: ${category} \nElements: ${quantityElem}`);
};


    



