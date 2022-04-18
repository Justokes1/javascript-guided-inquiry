// VERY HARD: Create a simple calculator that prompts the user for a number, an operator (either +, -, * or /) and another number, 
// and then uses the functions created in the hard challenge to output the value in sentence form. Example output: "3 + 4 = 7"

var x;
var y;
var operator;

  let num1 = prompt('Choose your first number');
  var x = parseInt(num1,10);

  if (!isNaN(x)) {
    alert(`Your first value is ${x}`);
    } else {
    alert('You must choose a number');
  }

  let num2 = prompt('Choose your second number');
  var y = parseInt(num1,10);

  if (!isNaN(y)) {
    alert(`Your first value is ${y}`);
    } else {
    alert('You must choose a number');
  }  


  var operator = prompt('Please Choose A Operator');

  if (operator === '+'|| operator === '-'|| operator === '/'|| operator ==='*') {
    alert(`You Chose ${operator}`); 
   } else {
    alert('Input Invalid: Please select a Operator');
  }


function math() {
  if (operator === '+') {
    alert(`${x} + ${y} = ${x + y}`)
  } else if (operator ==='-') {
    alert(`${x} - ${y} = ${x - y}`)
  } else if (operator === '*') {
    alert(`${x} * ${y} = ${x * y}`)
  } else {
    alert(`${x} / ${y} = ${x / y}`)
  }
}
math();
