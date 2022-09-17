function solution(n) {
  var answer = 0;

  let cnt = 1;
  let k = 1;
  while (k < n) {
    let sum = 0;
    for (let i = k; i < n; i++) {
      sum += i;
      if (sum > n) break;
      if (sum === n) {
        cnt++;
        break;
      }
    }
    k++;
  }

  return cnt;
}

/**
 *
 * sum이 n보다 클 때 break를 해주지 않으면
 * 효율성 테스트에서 시간 초과가 난다.
 */

/* 2022.09.17 2번째 풀이 */
function solution(n) {
  let result = 0;

  for (let i = 0; i < n; i++) {
    let sum = 0;
    for (let j = i + 1; j <= n; j++) {
      sum += j;
      if (sum === n) {
        result++;
        break;
      } else if (sum > n) break;
    }
  }

  return result;
}
