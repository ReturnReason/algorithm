/* 2022.09.02 1번째 풀이 */
function solution(n) {
  var answer = 0;

  for (let i = 1; i <= n; i++) {
    if (i ** 2 === n) {
      answer = (i + 1) ** 2;
      break;
    } else {
      answer = -1;
    }
  }

  return answer;
}

/* 2022.09.16 2번째 풀이 */
function solution(n) {
  var answer = -1;

  for (let i = 1; i <= n; i++) {
    if (i * i === n) return (i + 1) * (i + 1);
  }

  return answer;
}
