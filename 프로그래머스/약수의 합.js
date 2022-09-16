/* 2022.09.03 1번째 풀이 */
function solution(n) {
  var answer = 0;

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) answer += i;
  }

  return answer;
}

/* 2022.09.16 2번째 풀이 */
function solution(n) {
  var answer = 0;

  if (n === 0) return 0;
  for (let i = 1; i <= n; i++) {
    if (n % i == 0) answer += i;
  }

  return answer;
}
