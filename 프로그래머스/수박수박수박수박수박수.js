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
