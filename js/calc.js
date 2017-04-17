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

    function pressOne() {
        placeholder = placeholder + "1";
    }

    function pressTwo() {
        placeholder = placeholder + "2";
    }

    function pressThree() {
        placeholder = placeholder + "3";
    }

    function pressFour() {
        placeholder = placeholder + "4";
    }

    function pressFive() {
        placeholder = placeholder + "5";
    }

    function pressSix() {
        placeholder = placeholder + "6";
    }

    function pressSeven() {
        placeholder = placeholder + "7";
    }

    function pressEight() {
        placeholder = placeholder + "8";
    }

    function pressNine() {
        placeholder = placeholder + "9";
    }

    function pressZero() {
        placeholder = placeholder + "0";
        displayLeftOperand();
        console.log(placeholder);
    }

    function displayLeftOperand() {
        leftOperand.innerHTML = placeholder;
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

    var placeholder = "";
    var isLeftEmpty = null;
    var isOperatorFull = null;
    var isRightEmpty = null;

})();