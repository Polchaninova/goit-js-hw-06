
// Напиши скрипт создания и очистки коллекции элементов.
// Пользователь вводит количество элементов в input и нажимает кнопку
// Создать, после чего рендерится коллекция.
// При нажатии на кнопку Очистить, коллекция элементов очищается.

{/* < div id = "controls" >
  <input type="number" min="1" max="100" step="1" />
  <button type="button" data-create>Create</button>
  <button type="button" data-destroy>Destroy</button>
</ >

<div id="boxes"></div> */}

// Создай функцию createBoxes(amount),
// которая принимает один параметр - число. 
// !Функция создает столько < div >,
// !сколько указано в amount и добавляет их в div#boxes.
// Размеры самого первого < div > - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX.
// Используй готовую функцию getRandomHexColor для получения цвета.
// Создай функцию destroyBoxes(),
// которая очищает содержимое div#boxes,
// тем самым удаляя все созданные элементы.

const refs = {
  amountEl: document.querySelector('#controls input'),
  divBoxes: document.querySelector("#boxes"),
  btnCreate: document.querySelector("button[data-create]"),
  btnDestroy: document.querySelector("button[data-destroy]")
}

refs.btnCreate.addEventListener("click", onClickCreate)

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    let newDivInBoxes = document.createElement("div");

    newDivInBoxes.style.width = 30 + (10 * i) + 'px'
    newDivInBoxes.style.height = 30 + 'px';
    newDivInBoxes.style.backgroundColor = getRandomHexColor()

    refs.divBoxes.append(newDivInBoxes);
  }
}
function onClickCreate() {
  const amount = refs.amountEl.value;
  if (amount > 0) {
    createBoxes(amount)
  }
}
refs.btnDestroy.addEventListener('click', function () {
  refs.divBoxes.innerHTML = '';
});

// createBoxes(4)
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
