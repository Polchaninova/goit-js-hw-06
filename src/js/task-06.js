// Напиши скрипт, который при потере фокуса на инпуте(событие blur), 
// проверяет его содержимое на правильное количество введённых символов.

// < input
// type = "text"
// id = "validation-input"
// data - length="6"
// placeholder = "Please enter 6 symbols"
//     />

// Сколько символов должно быть в инпуте, указывается 
// в его атрибуте data - length.
// Если введено подходящее количество символов,
//  то border инпута становится зелёным, 
// если неправильное - красным.
// Для добавления стилей, используй CSS - классы valid и invalid,
// которые мы уже добавили в исходные файлы задания.
const refs = {
    input: document.querySelector('#validation-input')
}
refs.input.addEventListener("blur", onInputBlur);

function onInputBlur(e) {
    // if (refs.input.dataset.length > e.currentTarget.value.length) {
    if (refs.input.getAttribute('data-length') > e.currentTarget.value.length) {

        refs.input.classList.remove("valid")
        refs.input.classList.add("invalid")
    }
    else if (refs.input.getAttribute('data-length') < e.currentTarget.value.length) {
        refs.input.classList.remove("valid")
        refs.input.classList.add("invalid")
    }
    else {
        refs.input.classList.remove("invalid")
        refs.input.classList.add("valid")
    }

};

// В завданні 6 бордер має набувати зеленого кольору лише якщо кількість введених
//  символів дорівнює значенню атрибута data - length
// https://monosnap.com/file/6G4PCxPgU6CbeZo2OWrpTf2aIQozXy ці кольори мають бути однаковими