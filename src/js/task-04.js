// Счетчик состоит из спана и кнопок, которые, при клике,
// должны увеличивать и уменьшать его значение на единицу.

// < div id = "counter" >
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </ >

// Создай переменную counterValue в которой будет храниться текущее значение счетчика
// и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

const refs = {
    decrementBtn: document.querySelector('button[data-action="decrement"]'),
    incrementBtn: document.querySelector('button[data-action="increment"]'),
    spanValue: document.querySelector("#value")
}

let counterValue = refs.spanValue;
counterValue = 0;
// console.log(counterValue);

refs.decrementBtn.addEventListener("click", handlerDecreaseByCounter)
refs.incrementBtn.addEventListener("click", handlerAddByCounter)

function handlerDecreaseByCounter() {
    counterValue -= 1;
    refs.spanValue.textContent = counterValue;
    // console.log(event.currentTarget);
}

function handlerAddByCounter() {
    counterValue += 1;
    refs.spanValue.textContent = counterValue;
    // console.log(event.currentTarget);
}