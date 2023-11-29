function twoDiNumber(num) {
  let first = num % 10; //7
  let second = (num - first) / 10; // 27 - 7/10= 2//
  let answer = second * first;
  return answer;
}
let answer = twoDiNumber(27);
console.log(answer);
