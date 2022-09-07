// ==UserScript==
// @name         GoogleBot
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Aleksandra Krait
// @match        https://r0.ru/*
// @match        https://nova.rambler.ru/*
// @icon         
// @grant        none
// ==/UserScript==
let links = document.links; // полный список ссылок на странице
let btnK = document.querySelectorAll('[type="submit"]')[0]; //вызов кнопки по идентификатору массива 
let keywords = ['Персональная постановка целей',
'10 шагов для достижения целей',
'Планирование недели', 
'Как планирование изменит вашу жизнь', 
'Искусство расставлять приоритеты',
'Тайм-менеджмент: управление временем']; 
// ключевые слова для поиска
let keyword = keywords[getRandom(0, keywords.length)]; // достаем из массива рандомную фразу
let menu = document.querySelector('.Menu__filter-controller__new_closed--149vp Menu__filter-controller__new--o5XEp Menu__filter-controller--3oJA9');
if (btnK !== undefined) { // если кнопка поиска на странице определена
document.getElementsByName('query')[0].value = keyword; //  то в строку поиска вносится рандомная фраза из массива  
  btnK.click(); // клик на кнопку поиска
} 
if (menu == null){ // когда кнопка поиска на страние не найдена (undefined)
for (let i=0; i<links.length; i++) { // запускается цикл поиска 
  if (links[i].href.indexOf("4brain.ru") !== -1) { // из полного списка ссылкок страницы находим указанную
    console.log("нашел строку" + links[i]); // выводим в консоль найденную ссылку  
    let link = links[i]; // присваиваем ссылке переменную
    link.click(); // кликаем на эту переменную
    break; // завершаем цикл
  }
}
}
function getRandom(min,max) { // случайным образом выдает 
return Math.floor(Math.random()*(max - min) + min);// округляем в меньшую сторону(рандомное значение 
}
