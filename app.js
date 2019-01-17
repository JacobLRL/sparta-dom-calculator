document.addEventListener("DOMContentLoaded", function () {
    let number1 = "";
    let operator;
    let number2 = "";
    let number1Set = false;
    let operatorSet = false;
    let number2Set = false;
    let isSqrt = false;
    let items = document.getElementsByClassName("item");
    let screen = document.getElementById("screen");
    let button = document.getElementById("button");
    // main function
    function inputNum() {
        for (let i = 0; i < items.length; i++) {
            items[i].addEventListener('click', function (e) {
                if (e.target.classList.contains("num") && number1Set == true && operatorSet == true && isSqrt == false) {
                    number2 += e.target.innerText;
                    screen.innerText = number1 + operator + number2;
                } else if (e.target.classList.contains("op") && number1Set == true && operatorSet == false) {
                    operator = e.target.innerText;
                    if (e.target.classList.contains("sqrt")) {
                        isSqrt = true;
                        number2Set = true;
                    }
                    screen.innerText = number1 + operator;
                    operatorSet = true;
                } else if (e.target.classList.contains("num") && isSqrt == false) {
                    number1 += e.target.innerText;
                    screen.innerText = number1;
                    number1Set = true;
                } else if (e.target.classList.contains("clear")) {
                    screen.innerText = "";
                    number1 = "";
                    number1Set = false;
                    clearUp();
                }
            });
        }
    }
    // clears up all but num1 and num1set because it is the common calls needed
    function clearUp() {
        number2 = "";
        operatorSet = false;
        number2Set = false;
        operator = "";
        isSqrt = false;
    }
    // adds listener to enter button only when requirements are met
    function enter() {
        button.addEventListener('click', function (e) {
            if (number1Set == true && operatorSet == true && number2Set == true) {
                if (isSqrt) {
                    screen.innerText = Math.pow(parseInt(number1), 0.5);
                    clearUp();
                    number1 = Math.pow(parseInt(number1), 0.5);
                }
            } else {
                screen.innerText = eval(number1 + operator + number2);
                number1 = (eval(number1 + operator + number2)).toString();
                clearUp();
            }
        });
    }
    // calls functions for adding listeners
    inputNum();
    enter();
}); //end of dom