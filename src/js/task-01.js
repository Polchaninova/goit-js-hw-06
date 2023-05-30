// 1) Посчитает и выведет в консоль количество категорий
// в ul#categories, то есть элементов li.item
// 2) Для каждого элемента li.item в списке ul#categories, 
// найдет и выведет в консоль текст заголовка элемента(тега < h2 >)
// и количество элементов в категории(всех вложенных в него < li >)



// Для выполнения этой задачи нужно использовать
// метод forEach() 

// и свойства навигации по DOM.
// elem.firstElementChild - выберет первый дочерний узел - элемент внутри elem
// elem.children - псевдомассив, хранит только дочерние узлы-элементы, то есть соответствующие тегам.
// elem.lastElementChild - выберет последний дочерний узел-элемент внутри elem.

const totalCategoryForItem = document.querySelectorAll(".items")
console.dir(`Number of categories: ${totalCategoryForItem.length}`);

totalCategoryForItem.forEach(function (item) {

    const categoryName = item.firstElementChild;
    console.dir(`Category: ${categoryName.innerHTML}`)

    const listItems = item.lastElementChild;
    console.dir(`Elements: ${listItems.children.length}`);

});

