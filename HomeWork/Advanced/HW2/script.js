'use strict';
//1=====================================================================================
//1) В переменную list_items получить все нечетные элементы  li из списка .list

let list_items = document.querySelectorAll('.list li:nth-child(odd)');
console.log(list_items);

for(let elem of list_items){
    console.log(elem.innerHTML);
}

//2) В переменную news_titles получить все заголовки новостей из секции news

let news_titles = document.querySelector('.news').querySelectorAll('.news-item_title');

console.log(news_titles);

// 3) В массив news_dates получить все тексты(даты) новостей из тега time каждой новости.
// Как получить текст мы смотрели на примере.

let news_dates = [];

let elementsByTagNameTime = document.getElementsByTagName('time');
for(let elem of elementsByTagNameTime){
    news_dates.push(elem.innerHTML);
}
console.log(news_dates);