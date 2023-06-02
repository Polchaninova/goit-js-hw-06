
// Напиши скрипт, который изменяет цвета фона элемента < body >
//   через инлайн стиль при клике на button.change - color 
// и выводит значение цвета в span.color.

{/* < div class="widget" >
  <p>Background color: <span class="color">-</span></p>
  <button type="button" class="change-color">Change color</button>
</ > */}
const refs = {
  body: document.querySelector("body"),
  divWidget: document.querySelector(".widget"),
  button: document.querySelector(".change-color"),
  spanColor: document.querySelector(".color"),
}

refs.button.addEventListener("click", onChangeColor)


function onChangeColor() {
  refs.body.style.backgroundColor = getRandomHexColor();
  // выводит значение цвета в span.color.
  refs.spanColor.textContent = getRandomHexColor();
}

// Для генерации случайного цвета используй функцию getRandomHexColor.
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}