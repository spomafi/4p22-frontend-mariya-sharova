'use strict';

const resultInput = document.getElementById('result');
const submitButton = document.getElementById('submit');

submitButton.addEventListener('click', (event) => {
    const numberFirst = document.getElementById('first').value;
    const operatorFirstSecond = document.getElementById('operators').value;
    const numberSecond = document.getElementById('second').value;

    event.preventDefault();
    let result;

    switch (operatorFirstSecond) {
        case '': result = 'Не введён знак'; break;
        case '+': result = Number(numberFirst) + Number(numberSecond); break;
        case '-': result = Number(numberFirst) - Number(numberSecond); break;
        case '/': result = Number(numberFirst) / Number(numberSecond); break;
        case '*': result = Number(numberFirst) * Number(numberSecond); break;
        default: result = 'Программа не поддерживает такую операцию'; break;
    }

    if (numberFirst === '') {
       result = 'Первое число не указано'
    }

    if (numberSecond === '') {
        result = 'Второе число не указано'
    }

    if (numberFirst === '' && numberSecond === '') {
        result = 'Операция не корректна'
    }

    if (result === Infinity) {
        result = 'Операция не корректна'
    }

    if (isNaN(numberFirst) === true || isNaN(numberSecond) === true) {
        result = 'Неккоректный ввод чисел'
    }

    if (result !== 'Программа не поддерживает такую операцию' && result !== 'Первое число не указано' && result !== 'Второе число не указано' && result !== 'Некорректный ввод чисел' && isNaN(result)) {
        result = 'Операция не корректна';
    };

    console.log(result);
    document.getElementById('result').innerText = result;
});