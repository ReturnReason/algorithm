/* 2022.09.02 1번째 풀이 */
function solution(n) {
  var answer = 0;

  String(n)
    .split('')
    .forEach((v) => {
      answer += Number(v);
    });

  return answer;
}

/* 2022.09.16 2번째 풀이 */

function solution(n) {
  let result = 0;

  while (n > 0) {
    result += n % 10;
    n = Math.floor(n / 10);
  }

  return result;
}
