// Задача 1:
// Создать 2 поля ввода и кнопку,
// При нажатии на кнопку выводить сумму значений этих полей.
// Напоминаю, что такещее значение input хранится в его поле value.

const numb1 = document.getElementById('numb1');
const numb2 = document.getElementById('numb2');
const sum = document.getElementById('sum');
const result = document.getElementById('result');

sum.addEventListener('click', function(event) {
    event.preventDefault();
    
    let res = Number(numb1.value) + Number(numb2.value);
    result.innerText = res;
})

// Задача 2:
// Создать кнопку со значением 0.
// По клику на эту кнопку увеличивать значение на 1.

const increase = document.getElementById('increase');

increase.addEventListener('click', function(event) {
    event.preventDefault();
    increase.innerText = parseInt(increase.innerText) + 1;
})

// Задача 3:
// Создать форму с полем ввода адреса картинки и кнопкой добавить.
// По клику на кнопку вставлять картинку ниже этого поля используя введенный URL.

const imgForm = document.getElementById('image-form');
const imgUrl = document.getElementById('image-url');
const addImg = document.getElementById('add-image');

addImg.addEventListener('click', function(event) {
    event.preventDefault();
    if (imgUrl.value) {
        const imgWraper = document.createElement('div');
        const img = document.createElement('img');
        img.src = imgUrl.value;
        imgWraper.append(img);
        imgForm.append(imgWraper);
        imgUrl.value = '';
    }
})


// Задача 4:
// Создайте список сообщений.
// Добавьте каждому сообщению по кнопке для его скрытия.
// По клику на кнопку - сообщение должно исчезнуть.

let message1 = document.querySelector('.message1');
let btn1 = message1.querySelector('button');
let message2 = document.querySelector('.message2');
let btn2 = message2.querySelector('button');
let message3 = document.querySelector('.message3');
let btn3 = message3.querySelector('button');

function removeMessage(event) {
    event.preventDefault();
    event.target.parentNode.remove();
}

btn1.addEventListener('click', removeMessage);
btn2.addEventListener('click', removeMessage);
btn3.addEventListener('click', removeMessage);


// Задача 5:
// Сделайте список, элементы которого можно выделять кликом.
// (По клику добавляйте класс)
// Задача 6:
// Добавьте мульти-выделение к предыдущей задаче.
// Если клик с нажатым Ctrl (Cmd под Mac), то то выделяются все элементы между выделенным первым и последним.

const list = document.querySelector('#list');
let li = list.querySelectorAll('li');
list.addEventListener('click', function(event) {
        if (event.target.nodeName === 'LI') {
            event.target.classList.add('list-item');
            if (event.ctrlKey === true) {
                for (let i = 0; i < li.length; i++) {
                    li[i].classList.add('list-item');
                }
           }
        
        }
    })

