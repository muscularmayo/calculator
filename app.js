
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
display.innerHTML = '0';
let displayValue = '0';
let num1;
let num2;
let operator;

const buttonPress = function (e) {
  const nums = ['1','2','3','4','5','6','7','8','9','0']

  console.log(typeof displayValue, displayValue)
  if(nums.includes(e.target.value)) { //number button input
    if (displayValue !== '0') {
      let number = displayValue + e.target.value
      console.log(displayValue, e.target.value, number, typeof number)
      displayValue = number;
    } else if (displayValue === '0') {
      displayValue = e.target.value;
      console.log(displayValue)
    }
    display.innerHTML = displayValue;

  } else if (this.classList[0] === "operator") {
    if (!num1 && !operator) {
      num1 = Number(displayValue);
      operator = this.value;
      displayValue = '0'
    } else {
      num2 = Number(displayValue)
      display.innerHTML = operate(operator, num1, num2)
    }
  } else if (this.classList[0] === "equals") {
    return operate(operator, num1, num2)
  }

}
buttons.forEach(function(button) {
  button.addEventListener('click', buttonPress)
})
