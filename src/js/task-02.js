// В HTML есть пустой список ul#ingredients.
// Напиши скрипт, который для каждого элемента массива ingredients:

// 1)Создаст отдельный элемент < li >.
// Обзательно используй метод document.createElement().
// const heading = document.createElement("h1");
// console.log(heading); // <h1></h1>
// 2)Добавит название ингредиента как его текстовое содержимое.
// heading.textContent = "This is a heading";
// console.log(heading); // <h1>This is a heading</h1>
// 3)Добавит элементу класс item.
// elem.classList.add(cls) - добавляет класс cls в список классов элемента.
// 4)После чего вставит все < li > 
// за одну операцию в список ul#ingredients.
// element.append(el1, el2, ...) - добавляет один или несколько элементов после всех детей элемента element.
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listProduct = document.querySelector("#ingredients")
const itemEl = document.createElement("li");
itemEl.textContent = "Potatoe";
console.log(itemEl);
itemEl.classList.add("item");

const itemElFirst = document.createElement("li");
itemElFirst.textContent = "Mushrooms";
console.log(itemElFirst);
itemElFirst.classList.add("item");

const itemElSecond = document.createElement("li");
itemElSecond.textContent = "Garlic";
itemElSecond.classList.add("item");
console.log(itemElSecond);

const itemElNext = document.createElement("li");
itemElNext.textContent = "Tomatos";
itemElNext.classList.add("item");
console.log(itemElNext);

const itemElt = document.createElement("li");
itemElt.textContent = "Herbs";
itemElt.classList.add("item");
console.log(itemElt);

const itemElLast = document.createElement("li");
itemElLast.textContent = "Condiments";
itemElLast.classList.add("item");
console.log(itemElLast);
listProduct.append(itemEl, itemElFirst, itemElSecond, itemElNext, itemElt, itemElLast)