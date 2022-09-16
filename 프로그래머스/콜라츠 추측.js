/* 2022.09.02 1번째 풀이 */

function solution(num) {
  var answer = 0;

  while (num != 1) {
    if (answer > 500) return -1;

    if (num % 2 == 0) {
      num /= 2;
      answer++;
    } else {
      num = num * 3 + 1;
      answer++;
    }
  }

  return answer;
}

/* 2022.09.16 2번째 풀이 */
function solution(num) {
  let cnt = 0;
  if (num === 1) return 0;

  while (num !== 1) {
    if (cnt >= 500) return -1;

    if (num % 2 === 0) {
      num = Math.floor(num / 2);
      cnt++;
    } else {
      num = num * 3 + 1;
      cnt++;
    }
  }

  return cnt;
}
