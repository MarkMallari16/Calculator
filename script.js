const displayValue = document.getElementById("display");
const decimalBtn = document.getElementById("decimal");
const operatorBtn = document.querySelectorAll(".operator");
const equalBtn = document.querySelector(".equal");
operatorBtn.forEach(button => {
    button.addEventListener('click',function(){
        pressOperationButton(button.value);
    });
});

function pressButton(value) {

    if (value === 'AC') {
        displayValue.value = '';
    } else if (value === 'DE') {
        displayValue.value = displayValue.value.toString().slice(0, -1);
    } else if (value === '.') {
       displayValue.value += '.';
       decimalBtn.disabled = true;
    } else if (value === '/') {
        displayValue.value += '/';
    }else {
        displayValue.value += value;
    }
}
function pressOperationButton(operator) {
    let fieldValue = displayValue.value;

    if (isOperator(fieldValue.charAt(fieldValue.value.length - 1))){
        displayValue.value = fieldValue.slice(0, -1) + operator;
    }else {
        displayValue.value += operator;
    }
}

function isOperator(character) {
    return ['+', '-', '*', '/'].includes(character);
}
function performCalculation(){
    displayValue.value = eval(displayValue.value);
    return displayValue.value ;
}