/* 2022.09.02 1번째 풀이 */
function solution(n) {
  var answer = [];

  answer = String(n).split('').reverse();
  answer = answer.map((v) => {
    return Number(v);
  });

  return answer;
}

/* 2022.09.16 2번째 풀이 */
function solution(n) {
  return String(n).split('').map(Number).reverse();
}
