const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat'
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish'
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running'
  },
];
// Напиши скрипт для создания галереи изображений по массиву данных.
// В HTML есть список ul.gallery.Используй массив объектов images для создания элементов <img> вложенных в < li >.
// ?Для создания разметки используй шаблонные строки и метод insertAdjacentHTML(). !Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через CSS классы.
const listGallery = document.querySelector(".gallery");

const bestGallery = images.map((image) =>
  `<li class = "item"><img class = "img" src = "${image.url}" alt ="${image.alt}" ></li>`).join("")

listGallery.insertAdjacentHTML("beforeend", bestGallery);



//? 2 Variant
// const elements = images.map((image) => {

//   const itemEl = document.createElement("li")
//   itemEl.classList.add("item")

//   const imageEl = document.createElement("img")
//   imageEl.classList.add("img")
//   imageEl.src = image.url;
//   imageEl.alt = image.alt;

//   itemEl.appendChild(imageEl)
//   return itemEl;
// })
// listGallery.append(...elements)
// // listGallery.insertAdjacentHTML("beforeend", listGallery)
// const itemElSecond = document.createElement("li")
// itemElSecond.classList.add("item")
// console.log(itemElSecond);
//? 3 Variant

// const itemEl = document.createElement("li")
// itemEl.classList.add("item")

// const imageFirst = document.createElement("img")
// imageFirst.classList.add("img")
// imageFirst.src = "https:images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
// imageFirst.alt = 'Orange and White Koi Fish Near Yellow Koi Fish'
// // console.log(imageSecond);

// const itemElSecond = document.createElement("li")
// itemElSecond.classList.add("item")

// const imageSecond = document.createElement("img")
// imageSecond.classList.add("img")
// imageSecond.src = "https:images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
// imageSecond.alt = 'Orange and White Koi Fish Near Yellow Koi Fish'
// // console.log(imageSecond);

// const itemElThird = document.createElement("li")
// itemElThird.classList.add("item")
// // console.log(itemElThird);

// const imageThird = document.createElement("img")
// imageThird.classList.add("img")
// imageThird.src = "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
// imageThird.alt = 'Group of Horses Running'
// console.log(imageThird);

// itemEl.appendChild(imageFirst);
// console.log(itemEl);

// itemElSecond.appendChild(imageSecond)
// console.log(itemElSecond);

// itemElThird.appendChild(imageThird)
// console.log(itemElThird);

// listGallery.appendChild(itemEl, itemElSecond, itemElThird)
// console.log(listGallery);
// listGallery.append(itemEl, itemElSecond, itemElThird);


