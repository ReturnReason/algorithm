function solution(n) {
  var answer = 0;

  for (let i = 1; i < n; i++) {
    if (n % i === 1) {
      answer = i;
      break;
    }
  }

  return answer;
}

/* 2022.09.16 2번째 풀이 */
function solution(n) {
  for (let i = 1; i <= n; i++) {
    if (n % i === 1) return i;
  }
}
