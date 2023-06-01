// Напиши скрипт управления формой логина.
//1 !Обработка отправки формы form.login-form должна быть по событию submit.
//2 При отправке формы страница не должна перезагружаться. ?prevent defoult()
//3 !Если в форме есть незаполненные поля, выводи alert с предупреждением о том, что все поля должны быть заполнены.
//4 Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект,где имя поля будет именем свойства, а значение поля - значением свойства.
//5!Для доступа к элементам формы используй свойство elements.
//6 Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.

const refs = {
    form: document.querySelector(".login-form"),
}

refs.form.addEventListener("submit", handleSubmitForm);

function handleSubmitForm(e) {
    e.preventDefault();

    const formElements = e.currentTarget.elements
    const email = formElements.email.value;
    const password = formElements.password.value;

    if (email === "" || password === "") {
        return alert("Error, please fill in all the fields")
    }
    const formData = {
        email,
        password
    };
    console.log(formData);
}



// Збірка данних з форми для відправки на сервер
// const formData = new FormData(e.currentTarget);
// formData.forEach((value, name) => {
//     console.log(`name`, name)
//     console.log(`value`, value)
//     e.currentTarget.reset();
// })
// Доступ до даних форми
// const {
//     elements: { email, password }
// } = e.currentTarget;