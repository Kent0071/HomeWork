'use strict'
/* 1. Написать функцию с названием searchArrayWord и ищет слово в массиве. 
Она принимает 2 параметра - 
1) Слово которое нужно найти
2) Массив в котором находятся элементы со словами. Например ['Кот', 'Собака', 'Жираф' ]
Функция должна вернуть true или false */



/* 2. Определить среднее арифмитическое чисел из массива.
var arr = [1, 2, 3, 7, 6, 9]; */

let arr = [1, 2, 3, 7, 6, 9];

let sum = 0;
for(let key of arr){
    sum += key;
}
let average = sum / arr.length;
console.log(average.toFixed(2));


/* 3. Перевернуть элементы массива задом наперед. Не используя reverse(мы еще не учили его)
var arr2 = [1, 3, 5, 6, 7, 9]; */

let arr2 = [1, 3, 5, 6, 7, 9];
for (let i = arr2.length - 1; i >= 0 ; i--) {
    console.log( arr2[i] );
  }
 

/* 4. Дан объект {html:'HTML', css: 'CSS', js: 'ECMA'}
Нужно получить массив ключей этого объекта и отобразить в консоли.
 */

let obj = {
    html: 'HTML',
    css: 'CSS',
    js: 'ECMA',
};
console.log(Object.keys(obj));
/*  for (let key in obj){
    console.log(key);
} 
 */

/* 5. Создайте объект описывающий Заказ на сайте.
Создать можно любым из способов - даже просто написать консрукцию var obj = {...}. 
Главное учесть, что единицы измерения обычно не записываются в объект, а 
записываются просто цифры переведенные к общей единице измерения(например кг переводятся в граммы).

В нем должно храниться:
- Имя покупателя
- Телефон покупателя
- Адрес покупателя
- Общая сумма заказа
- Общий вес заказа
- Купленные товары:
1 товар - Чашка \ 100 грн. \ вес 200 грамм
2 товар - Ложка \ 30 грн. \ вес 100 грамм
3 товар - Чайник \ 550 грн. \ вес 2 кг
4 товар - Кружка \ 150 грн \ вес 400 грамм
 */

let buy = {
    user: {
    name: 'Vasil',
    phoneNumber: '3-16-49',
    address: 'Kylibina street 59',
    },
   
    products: {
        cup: {
            price: 100,
            weight: 200,
        },
        spoon: {
            price: 30,
            weight: 100,
        },
        teapot: {
            price: 550,
            weight: 2000,
        },
        mug:{
            price: 150,
            weight: 400,
        },
    },
    get totalPrice() {
        let sumPrice = 0;
        for(let productName in this.products){
            sumPrice += this.products[productName].price;
        }
         return sumPrice;
    },
    
    get totalWeight() {
        let sumWeight = 0;
        for(let productName in this.products){
            sumWeight += this.products[productName].weight;
        }
         return sumWeight;
    },

};

  

console.log(buy);
console.log(buy.totalPrice);
console.log(buy.totalWeight);
 