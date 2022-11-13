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

/* 2022.11.14 풀이 */
function solution(n) {
  return Number([...String(n)].reduce((a, c) => Number(a) + Number(c)));
}
