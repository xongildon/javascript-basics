function doSomething(input) {
  return input + input;
}

let result = doSomething(15);

console.log(result);

function getMultiInput(num1, num2) {
  console.log("num=", num1);
  console.log("num2=", num2);
  let sum = num1 + num2;
  return sum;
}

let sum = getMultiInput(20, 30);

console.log("sum", sum);
