"use strict";

window.onload = init;

function init() {

    let addBtn = document.getElementById("addBtn");
    let subtractBtn = document.getElementById("subtractBtn");
    let multiplyBtn = document.getElementById("multiplyBtn");
    let divideBtn = document.getElementById("divideBtn");

    addBtn.onclick = onAddBtnClicked;
    subtractBtn.onclick = onSubtractBtnClicked;
    multiplyBtn.onclick = onMultiplyBtnClicked;
    divideBtn.onclick = onDivideBtnClicked;
}

function onAddBtnClicked() {

    let number1Field = document.getElementById("number1Field");
    let number2Field = document.getElementById("number2Field");
    let number1 = Number(number1Field.value);
    let number2 = Number(number2Field.value);

    let answerField = document.getElementById("answerField");
    answerField.value = `${number1 + number2}`;

}

function onSubtractBtnClicked() {

    let number1Field = document.getElementById("number1Field");
    let number2Field = document.getElementById("number2Field");
    let number1 = Number(number1Field.value);
    let number2 = Number(number2Field.value);

    let answerField = document.getElementById("answerField");
    answerField.value = `${number1 - number2}`;

}

function onMultiplyBtnClicked() {

    let number1Field = document.getElementById("number1Field");
    let number2Field = document.getElementById("number2Field");
    let number1 = Number(number1Field.value);
    let number2 = Number(number2Field.value);

    let answerField = document.getElementById("answerField");
    answerField.value = `${number1 * number2}`;
}

function onDivideBtnClicked() {

    let number1Field = document.getElementById("number1Field");
    let number2Field = document.getElementById("number2Field");
    let number1 = Number(number1Field.value);
    let number2 = Number(number2Field.value);

    let answerField = document.getElementById("answerField");
    answerField.value = `${number1 / number2}`;

}