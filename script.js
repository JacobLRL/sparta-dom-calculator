document.addEventListener("DOMContentLoaded", function () {
    class Calculator {
        constructor(bool) {
            this.number1 = "";
            this.operator = "";
            this.number2 = "";
            this.number1Set = bool;
            this.operatorSet = bool;
            this.number2Set = bool;
            this.isSqrt = bool;
            this.items = document.getElementsByClassName("item");
            this.screen = document.getElementById("screen");
            this.button = document.getElementById("button");
            console.log("this is being created");
            
        }

        inputNum() {
            for (let i = 0; i < this.items.length; i++) {
                this.items[i].addEventListener('click', e => {
                    if (e.target.classList.contains("num") && this.number1Set == true && this.operatorSet == true && this.isSqrt == false) {
                        this.number2 += e.target.innerText;
                        this.screen.innerText = this.number1 + this.operator + this.number2;
                    } else if (e.target.classList.contains("op") && this.number1Set == true && this.operatorSet == false) {
                        this.operator = e.target.innerText;
                        if (e.target.classList.contains("sqrt")) {
                            this.isSqrt = true;
                            this.number2Set = true;
                        }
                        this.screen.innerText = this.number1 + this.operator;
                        this.operatorSet = true;
                    } else if (e.target.classList.contains("num") && this.isSqrt == false) {
                        this.number1 += e.target.innerText;
                        this.screen.innerText = this.number1;
                        this.number1Set = true;
                    } else if (e.target.classList.contains("clear")) {
                        this.screen.innerText = "";
                        this.number1 = "";
                        this.number1Set = false;
                        this.clearUp();
                    }
                });
            }
        }

        clearUp() {
            this.number2 = "";
            this.operatorSet = false;
            this.number2Set = false;
            this.operator = "";
            this.isSqrt = false;
        }

        enter() {
            this.button.addEventListener('click', e => {
                if (this.number1Set == true && this.operatorSet == true && this.number2Set == true) {
                    if (this.isSqrt) {
                        this.screen.innerText = Math.pow(parseInt(this.number1), 0.5);
                        this.clearUp();
                        this.number1 = Math.pow(parseInt(this.number1), 0.5);
                    }
                } else {
                    this.screen.innerText = eval(this.number1 + this.operator + this.number2);
                    this.number1 = (eval(this.number1 + this.operator + this.number2)).toString();
                    this.clearUp();
                }
            });
        }
    }
    console.log("working");
    let calculator = new Calculator(false);
    calculator.inputNum();
    calculator.enter();
}); //end of dom