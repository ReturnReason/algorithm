function solution(arr, divisor) {
  var answer = [];

  arr.map((v) => {
    if (v % divisor === 0) answer.push(v);
  });

  if (answer.length > 0) answer.sort((a, b) => a - b);
  else answer.push(-1);

  return answer;
}
