/* 2022.09.02 1번째 풀이 */
function solution(x, n) {
  var answer = [];
  answer.push(x);

  for (let i = 0; i < n - 1; i++) {
    answer.push(answer[i] + x);
  }

  return answer;
}

/* 2022.09.16 2번째 풀이 */
function solution(x, n) {
  const list = [];

  for (let i = 1; i <= n; i++) {
    list.push(x * i);
  }

  return list;
}
