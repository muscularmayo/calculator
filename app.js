
const add = function(num1, num2) {
  return num1+num2;
}

const subtract = function(num1, num2) {
  return num1-num2;
}

const multiply = function (num1, num2) {
  return num1*num2
}

const divide = function (num1, num2) {
  return num1/num2;
}

const operate = function (operator, num1, num2) {
  if (operator === '+') {
    return add(num1,num2)
  } else if (operator === '-') {
    return subtract(num1,num2)
  } else if (operator === '*') {
    return multiply(num1,num2)
  } else if (operator === '/') {
    return divide(num1,num2)
  }
}

//digits and operators should have different functions attached?
//digits need to store displayValue as well as num1,num2
//operator needs to call on those num1/num2 values
//if an operator is hit, displayvalue shall be saved into either num1 or num2, operator shall be saved too
//and then when equal is hit, operate(operator, num1,num2) will

const operators = document.querySelectorAll('.operator')
const buttons = document.querySelectorAll('button')
const digits = document.querySelectorAll('.digit');
const display = document.querySelector('#display');
const equals = document.querySelector('#equals');
const ac = document.querySelector('#ac');
let displayValue;
display.innerHTML = '0';

let num1;
let num2;
let operator;


const digitPress = function (e) {
  if (displayValue === undefined) { //only for first press or after clear
    displayValue = e.target.value;
  } else if (displayValue) {
    displayValue = displayValue + e.target.value
  }

/* technically i don't need this, i can save num1 on 1st operator press
  if (num1 === undefined && operator === undefined) {
    num1 = Number(displayValue)
  } else {
    num2 = Number(displayValue)
  }*/
  display.innerHTML = displayValue;
}

const clear = function (e) {
  num1 = undefined;
  num2 = undefined;
  operator = undefined;
  displayValue = undefined;
  display.innerHTML = '0';
}

const operatorPress = function (e) {
  displayValue = undefined;
  if (num1 === undefined) {
    num1 = Number(displayValue)
  } else if (num1 && num2 && operator) {
    equalPress();
  }


}

const equalPress = function (e) {
  const result = operate(operator, num1, num2)
  displayValue = '' + result;
  num2 = result;
  display.innerHTML = displayValue;
  operator = undefined;
}

digits.forEach(function(digit) {
  digit.addEventListener('click', digitPress)
})

ac.addEventListener('click', clear)

operators.forEach(function(operator) {
  operator.addEventListener('click', operatorPress)
})

equals.addEventListener('click', equalPress)

























/*
const buttonPress = function (e) {
  const nums = ['1','2','3','4','5','6','7','8','9','0']

  console.log(typeof displayValue, displayValue)
  if(nums.includes(e.target.value)) { //number button input
    if (displayValue !== '0') {
      displayValue = '' + displayValue;
      let number = displayValue + e.target.value
      console.log(displayValue, e.target.value, number, typeof number)
      displayValue = number;
    } else if (displayValue === '0') {
      displayValue = e.target.value;
      console.log(displayValue)
    }
    display.innerHTML = displayValue;

  } else if (this.classList[0] === "operator") {
    if (!num1) {
      num1 = Number(displayValue);
      operator = this.value;
      displayValue = '0'
    } else if (!num2 && !operator) {
      num2 = Number(displayValue)
      displayValue = operate(operator, num1, num2)

      display.innerHTML = displayValue
      displayValue ='0'
      num1 = undefined;
      num2 = displayValue;
    } else if (num1 && num2 && operator) {
      displayValue = operate(operator, num1, num2)
    }
  } else if (this.classList[0] === "equals") {
    display.innerHTML = operate(operator, num1, num2)
    num1 = display.innerHTML;
  }

}
buttons.forEach(function(button) {
  button.addEventListener('click', buttonPress)
})
*/