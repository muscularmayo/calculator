
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
    if(num2===0) {
      alert('cannot divide by 0!');
      return 6969;
    }
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
const backspace = document.querySelector('#backspace')
const plusMinus = document.querySelector('#plusMinus')

let displayValue;
display.innerHTML = '0';

let num1;
let num2;
let operator;

const plusMinusPress = function (e) {
  if (Number(displayValue) === num2) {
    displayValue = (num2*-1).toString();
    num2 *= -1
  } else {
    displayValue = (num1*-1).toString();
    num1 *= -1
  }

  if (displayValue === 'NaN' || displayValue === undefined || displayValue === '') {
    displayValue = '0'
  }

  display.innerHTML = displayValue;
}

const digitPress = function (e) {
  if(e.target.value === '.') {
    if (displayValue === undefined || displayValue === '0') {
      displayValue = '0'
    } else if (displayValue.indexOf('.') !== -1) {
      return;
    }
  }

  if (displayValue === undefined) { //only for first press or after clear
    displayValue = e.target.value;
  } else if (displayValue) {
    displayValue = displayValue + e.target.value
  }


  if (num1 === undefined || operator === undefined) {
    num1 = Number(displayValue)
  } else {
    num2 = Number(displayValue)
  }

  display.innerHTML = displayValue;
}

const backspacePress = function (e) {
  if (displayValue !== undefined && num1) {
    num1 = Number(num1.toString().slice(0, -1))
    displayValue = num1.toString();
  } else if (displayValue && num1 && num2===undefined) {
    displayValue = displayValue.slice(0,-1)
  } else if (displayValue === undefined && num1) {
    num1 = Number(num1.toString().slice(0, -1))
    displayValue = num1.toString();
  } else {
    displayValue = displayValue.slice(0,-1);

  }
  if (displayValue === 'NaN' || displayValue === '') {
    displayValue = '0';
  }
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

  if ((num1 && num2 && operator) !== undefined) {
    let result = operate(operator, num1, num2)
    result = decimalHandler(result)
    displayValue = undefined
    num1 = result;
    num2 = undefined;
    display.innerHTML = '' + result;
  }
  operator = e.target.value
  displayValue = undefined;



}



const equalPress = function (e) {
  if((num1 && num2 && operator) !== undefined) {
    let result = operate(operator, num1, num2)
    result = decimalHandler(result);

    displayValue = undefined
    num1 = result;
    num2 = undefined;
    display.innerHTML = '' + result;;
    operator = undefined;
  }

}

const decimalHandler = function(number) {
  let result = number;
  if(Math.floor(number.valueOf())===number.valueOf()) {
    return number;
  }
  const decimalCount = number.toString().split('.')[1].length || 0;
  if(decimalCount >= 4) {
    result = Number(result.toFixed(3))
  }
  return result;
}

digits.forEach(function(digit) {
  digit.addEventListener('click', digitPress)
})

ac.addEventListener('click', clear)

operators.forEach(function(operator) {
  operator.addEventListener('click', operatorPress)
})

equals.addEventListener('click', equalPress)

backspace.addEventListener('click', backspacePress)

plusMinus.addEventListener('click', plusMinusPress)























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