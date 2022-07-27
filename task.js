const hasTooltip = [...document.querySelectorAll('.has-tooltip')]; // массив ссылок с подсказками
const tooltip = document.querySelector('.tooltip'); // всплывающее окно с подсказкой

hasTooltip.forEach((link) => {
    link.setAttribute('style', 'display: inline-block; position: relative;'); // применить к ссылке инлайновый тип блока
    link.addEventListener('click', promptAppearance); // обработчик события нажатия на ссылку
})

function promptAppearance(evnt) { // обработка появления подсказки 
    if (this.contains(tooltip)) { // если в ссылке есть тег с подсказкой 
        tooltip.classList.toggle('tooltip_active'); // сменить появление всплывающего окна
    } else {
        tooltip.classList.add('tooltip_active'); // появление всплывающего окна
        this.appendChild(tooltip); // переместить окно с подсказкой внуть ссылки
        tooltip.textContent = this.getAttribute('title'); // title ссылки в текст всплывающего окна
        
        //задание с data атрибутами

        // tooltip.setAttribute('style', `bottom: ${this.getBoundingClientRect().height}px; position: absolute;`); // подсказка сверху от ссылки
        tooltip.setAttribute('style', `position: absolute;`); // подсказка снизу от ссылки
        // tooltip.setAttribute('style', `display: inline;`); // подсказка справа от ссылки
    }
    evnt.preventDefault();
}


// const div = document.createElement('div'); // создание элкмента-обертки
// div.classList.add('wrapper'); // добавление класса

// hasTooltip.forEach((link) => {
//     // console.log(link.parentNode);
//     let divClone = div.cloneNode(false); // создание клона без дочерних элементов
//     // divClone.appendChild(link); 
//     // link.replaceWith(divClone);
//     link.parentNode.childNodes.forEach(child => {
//         if(child.classList.contains('has-tooltip')) {
//             divClone.appendChild(child);
//             link.parentNode.appendChild(divClone);
//         }
//     })

// })
