'use strict'
/*1. Создайте функцию, которая будет помнить, каждое ваше посещение страницы и выводить сколько прошло 
времени с предыдущего захода.
Используя куки.*/


function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

let visitTimeCookieKey = "visitTime";

/**
 * В этой функции текущее время посещения страницы
 */
function writeVisitTime(){
  document.cookie = `${visitTimeCookieKey}=${Date.now()}`;
}

/**
 * эта функция возвращает куки с временем посещени пользователем страницы
 * @returns {string|undefined}
 */
function getVisitTime(){
  return getCookie(visitTimeCookieKey);
}

function checkUserVisit() {
  let visitTime = getVisitTime();//Проверить заходил я на страницу или нет
  
  if (visitTime) {
    //да заходил сравнить время текущее с тем что заходил date now минус визит тайм и запустить функцию визит тайм
    let timeDifference = Date.now() - visitTime;
    let timeDifferenceInHours = timeDifference / (1000 * 60 * 60);
    console.log(`Тебя не было ${timeDifferenceInHours} часов`);
  }

  //если нет то просто вызвать функцию
  writeVisitTime();
}
checkUserVisit();

