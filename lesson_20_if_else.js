"use strict";

if (4 == 9) {
    console.log("Ok!");
}  else {
console.log('Error');
}

const num = 50;

if (num < 49) {
    console.log('Error');
} else if (num > 100) {
    console.log('Mnogo!');
} else {
    console.log('Ok');
}

// Тернарный опреатор это знак вопроса ? — Сарвшивают на собиседованиях
// Тернарным оператором называется так потому что внутри у него 3 аргумента как на примере ниже
const num = 50;
(num === 50) ? console.log('Ok') : console.log('Error');
// 4 + 4 — Бинарный аргумент
// +4 — унарный аргуиент

// Конструкция switch всегда идёт на строгое сравнение в отличие от обычных условий. Например что наша переменная num = 49;
const num = 50;
switch (num) {
case 49:
    console.log('Neverno');
    break;
case 100:
    console.log('Neverno');
    break;
case 50:
    console.log('V Tochku');
    break;
default:
        console.log('Ne v etot raz');
        break;
}