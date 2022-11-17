"use strict"
/**
 *
 * @type {Date} date
 */
const now=new Date();
function updateTime(date) {
    const hours=document.querySelector('.hours');
    const minutes=document.querySelector('.minutes');
    const seconds=document.querySelector('.seconds');

    hours.innerText=date.getHours().toString().padStart(2, '0');
    minutes.innerText=date.getMinutes().toString().padStart(2, '0');
    seconds.innerText=date.getSeconds().toString().padStart(2, '0');

}
updateTime(now);
// setInterval(()=>{
// now.setSeconds(now.getSeconds()+1);
//     updateTime(now);
// },1000)
const intervalId=setInterval(()=>{
    now.setSeconds(now.getSeconds()+1);
    updateTime(now);
},1000);

// function renderNotification(text) {
//     const list=document.querySelector('ul')
//     const notification=document.createElement('li');
//     notification.innerText=text;
//     list.append(notification);
//     return notification;
//
// };
function createCalendar(elem, year, month) {
    let mon = month - 1; // месяцы в JS идут от 0 до 11, а не от 1 до 12
    let d = new Date(year, mon);
    let table = '<table><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr>';
    // пробелы для первого ряда
    // с понедельника до первого дня месяца
    // * * * 1  2  3  4
    for (let i = 0; i < getDay(d); i++) {
        table += '<td></td>';
    }
    // <td> ячейки календаря с датами
    while (d.getMonth() == mon) {
        table += '<td>' + d.getDate() + '</td>';

        if (getDay(d) % 7 == 6) { // вс, последний день - перевод строки
            table += '</tr><tr>';
        }
        d.setDate(d.getDate() + 1);
    }
    // добить таблицу пустыми ячейками, если нужно
    // 29 30 31 * * * *
    if (getDay(d) != 0) {
        for (let i = getDay(d); i < 7; i++) {
            table += '<td></td>';
        }
    }
    // закрыть таблицу
    table += '</tr></table>';

    elem.innerHTML = table;
}
function getDay(date) { // получить номер дня недели, от 0 (пн) до 6 (вс)
    let day = date.getDay();
    if (day == 0) day = 7; // сделать воскресенье (0) последним днем
    return day - 1;
}

createCalendar(calendar, 2022, 11);


const button = document.querySelector('button');
const list = document.querySelector('ul');
const names = ['Bohdan', 'Stepan', 'Yura', 'Julia', 'Olena'];

const renderItem = (text) => {
    const item = document.createElement('li');
    const button = document.createElement('button');
    button.innerText = 'X';
    item.innerText = text;
    item.append(button);
    button.onclick = () => {
        item.remove();
    };
    item.onmousedown = () => {
        item.classList.add('red');
    };

    item.onmouseup = () => {
        item.classList.remove('red');
    }


    list.append(item);
};

names.forEach(renderItem);