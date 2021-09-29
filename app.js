
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



const buttons = document.querySelectorAll('button');
const display = document.querySelector('#display');
display.innerHTML = '0';
let displayValue = 0;

const buttonPress = function (e) {
  const nums = ['1','2','3','4','5','6','7','8','9','0']
  let num1;
  let num2;
  console.log(typeof displayValue, displayValue)
  if(nums.includes(e.target.value)) { //number button input
    if (displayValue !== 0) {
      let number = e.target.value + displayValue
      console.log(displayValue, e.target.value, number, typeof number)
      displayValue = displayValue + e.targetValue;
      displayValue = Number(displayValue)
    } else if (displayValue === 0) {
      displayValue = e.target.value;
      console.log(displayValue)

    }
    display.innerHTML = displayValue;

  } else {
    num1 = displayValue;
  }

}
buttons.forEach(function(button) {
  button.addEventListener('click', buttonPress)
})
