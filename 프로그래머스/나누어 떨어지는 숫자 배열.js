function solution(arr, divisor) {
  var answer = [];

  arr.map((v) => {
    if (v % divisor === 0) answer.push(v);
  });

  if (answer.length > 0) answer.sort((a, b) => a - b);
  else answer.push(-1);

  return answer;
}

/* 2022.09.16 2번쨰 풀이 */
function solution(arr, divisor) {
  let result = arr.filter((v) => v % divisor === 0).sort((a, b) => a - b);
  return result.length > 0 ? result : [-1];
}
