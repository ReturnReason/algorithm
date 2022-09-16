function solution(n) {
  var answer = '';

  if (n % 2 === 0) answer += '수박'.repeat(n / 2);
  else {
    while (n) {
      if (n % 2 !== 0) answer += '수';
      else answer += '박';
      n--;
    }
  }

  return answer;
}

/* 2022.09.16 2번째 풀이 */
function solution(n) {
  let result = '';

  for (let i = 1; i <= n; i++) {
    if (i % 2 !== 0) result += '수';
    else result += '박';
  }

  return result;
}
