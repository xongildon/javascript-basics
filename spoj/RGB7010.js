function thDiNumber(num) {
  let first = num % 10; //3
  let second = first - 1; //2
  let third = second / 2;
  let answer = first * second * third;
  return answer;
}
let answer = thDiNumber(123);
console.log(answer);
