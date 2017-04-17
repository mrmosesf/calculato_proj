/**
 * Created by mosesfranco on 4/17/17.
 */
"use strict";
(function () {
    var leftOperand = document.getElementById('leftOp');
    var rightOperand = document.getElementById('rightOp');

    var operator = document.getElementById('operator');

    var one = document.getElementById('btnOne');
    var two = document.getElementById('btnTwo');
    var three = document.getElementById('btnThree');
    var four = document.getElementById('btnFour');
    var five = document.getElementById('btnFive');
    var six = document.getElementById('btnSix');
    var seven = document.getElementById('btnSeven');
    var eight = document.getElementById('btnEight');
    var nine = document.getElementById('btnNine');
    var zero = document.getElementById('btnZero');

    var mult = document.getElementById('btnMult');
    var clear = document.getElementById('btnClear');
    var equal = document.getElementById('btnEqual');
    var divide = document.getElementById('btnDivide');
    var plus = document.getElementById('btnPlus');
    var minus = document.getElementById('btnMinus');

    var placeholder = "";
    var currentOperator = "";

    function pressOne() {
        placeholder = placeholder + "1";
        displayOperand();
    }

    function pressTwo() {
        placeholder = placeholder + "2";
        displayOperand();
    }

    function pressThree() {
        placeholder = placeholder + "3";
        displayOperand();
    }

    function pressFour() {
        placeholder = placeholder + "4";
        displayOperand();
    }

    function pressFive() {
        placeholder = placeholder + "5";
        displayOperand();
    }

    function pressSix() {
        placeholder = placeholder + "6";
        displayOperand();
    }

    function pressSeven() {
        placeholder = placeholder + "7";
        displayOperand();
    }

    function pressEight() {
        placeholder = placeholder + "8";
        displayOperand();
    }

    function pressNine() {
        placeholder = placeholder + "9";
        displayOperand();
    }

    function pressZero() {
        placeholder = placeholder + "0";
        displayOperand();
    }

    function pressPlus() {
        currentOperator = "+"
        isOperatorDone = true;
        displayOperand();
    }

    function pressMinus() {
        currentOperator = "-"
        isOperatorDone = true;
        displayOperand();
    }

    function pressMult() {
        currentOperator = "*"
        isOperatorDone = true;
        displayOperand();
    }

    function pressDivide() {
        currentOperator = "/"
        isOperatorDone = true;
        displayOperand();
    }


    // Handles the display of proper text into corrext text field
    function displayOperand() {
        if(isRightDone){
            rightOperand.innerText = placeholder;
        }
        else if (isOperatorDone){
            operator.innerText = currentOperator;
        }
        else {
            leftOperand.innerText = placeholder;
        }
    }

    one.addEventListener('click', pressOne);
    two.addEventListener('click', pressTwo);
    three.addEventListener('click', pressThree);
    four.addEventListener('click', pressFour);
    five.addEventListener('click', pressFive);
    six.addEventListener('click', pressSix);
    seven.addEventListener('click', pressSeven);
    eight.addEventListener('click', pressEight);
    nine.addEventListener('click', pressNine);
    zero.addEventListener('click', pressZero);

    plus.addEventListener('click', pressPlus);
    minus.addEventListener('click', pressMinus);
    mult.addEventListener('click', pressMult);
    divide.addEventListener('click', pressDivide);

    var isLeftDone = false;
    var isOperatorDone = false;
    var isRightDone = false;

})();