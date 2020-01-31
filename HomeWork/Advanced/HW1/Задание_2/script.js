'use strict'
/*2. Создайте функцию, которая будет при 1 заходе на страницу будет просить вас ввести бесконечное количество любых
 слов(поочередно), пока вы не нажмете Отмена.
Она запишет эти слова в массив. И при следующих заходах, она будет просить 
ввести слово и если оно есть в массиве(который мы создали ранее), то выведется
alert верно.*/

function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

//Эта функция присваивает куки
function setUser() {
  document.cookie = "user=entered; max-age=3600";
}

//эта функции возвращает куки или undefined усли не найдено
function getSetUser() {
  return getCookie('user');
}

let wordArray = [];//Массив для хранения слов


//Функция которая просит  ввести числа и записывает их в массив
function wordInput() {
  while (true) {
    let value = prompt("Введите любое количество слов", '');
    if (value === "" || value === null) break;
    wordArray.push(value);
  }
  localStorage.setItem('firstWord', JSON.stringify(wordArray));
}

let keyLocalStorage = JSON.parse(localStorage.getItem('firstWord'));
//Преобразуем localStorage в массив

//Функция просящая ввести одно слово
function oneWord() {
  let word = prompt("Введите слово", '');
  for (let key of  keyLocalStorage){
      if (key == word) {
          alert('Верно');
      } 
  }
}

function checkUserVisit() {
  let visitUser = getSetUser();//Проверить заходил я на страницу или нет

  if (visitUser) {
    //да заходил, просим ввести слово и сравниваем его с тем массивом что получили при первом заходе
    oneWord();
  }else {
    setUser(); //для отправки куки
    //функция для ввода слов и записи в массив
    wordInput();
  }
}

checkUserVisit();


