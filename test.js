let counter = 0;
document.getElementById("counter").innerHTML = counter;
let counterPlus = 1;
document.getElementById("plus").innerHTML = `Прибавить ${counterPlus}`;
let counterPlusText = document.getElementById("plus").innerHTML;
let counterMinus = 1;
document.getElementById("minus").innerHTML = `Вычесть ${counterMinus}`;
let counterMinusText = document.getElementById("minus").innerHTML;
document.getElementById("newGame").innerHTML = `Новая игра`;
document.getElementById("resetScore").innerHTML = `Сбросить счёт`;
document.getElementById("makeNumber").innerHTML = `Загадать число`;
let requiredNumber = document.getElementById("requiredNumber").innerHTML;
requiredNumber = ``;
document.getElementById("success").innerHTML = "GG!";
document.getElementById("success").hidden = true;

function makeNumber() {
    let numberPreference = prompt("Моё число должно быть в промежутке от 0 до (макс. 1000):", 100);
    if (numberPreference > 1000) {
        alert("Слишком большое число, выберите меньше 1000 для вашего удобства :)");
        return document.getElementById("makeNumber").innerHTML = `Загадать число`;
    } else if (numberPreference < 1) {
        alert("Нужно выбрать число больше нуля.");
    } else {
            let rand = Math.floor(Math.random() * (numberPreference - 1) + 1);
        document.getElementById("requiredNumber").innerHTML = rand;
        }
    document.getElementById("makeNumber").innerHTML = `Загадать другое число`;
    }

function plus() {
    document.getElementById("counter").innerHTML = `${counter += counterPlus}`;
    counterPlus += 2;
    document.getElementById("plus").innerHTML = `Прибавить ${counterPlus}`;
        if (counter === requiredNumber) {
            document.getElementById("success").hidden = false;
        }
}
function minus() {
    document.getElementById("counter").innerHTML = `${counter -= counterMinus}`;
    if (counterMinus == 1) {
        counterMinus++;
    } else {
        counterMinus += 2;}
    document.getElementById("minus").innerHTML = `Вычесть ${counterMinus}`;
        if (counter === requiredNumber) {
            document.getElementById("success").hidden = false;
        }
}

function newGame() {
    counter = 0;
    counterMinus = 1;
    counterPlus = 1;
    document.getElementById("requiredNumber").innerHTML = ` `;
    document.getElementById("counter").innerHTML = `${counter}`;
    document.getElementById("plus").innerHTML = `Прибавить ${counterPlus}`;
    document.getElementById("minus").innerHTML = `Вычесть ${counterMinus}`;
    document.getElementById("makeNumber").innerHTML = `Загадать число`;
    document.getElementById("success").hidden = true;
}

function resetScore() {
    counter = 0;
    counterMinus = 1;
    counterPlus = 1;
    document.getElementById("counter").innerHTML = `${counter}`;
    document.getElementById("plus").innerHTML = `Прибавить ${counterPlus}`;
    document.getElementById("minus").innerHTML = `Вычесть ${counterMinus}`;
    document.getElementById("resetScore").innerHTML = `Сбросить счёт`;
}
