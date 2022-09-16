function solution(s) {
  var answer = '';

  if (s.length % 2 === 0) {
    answer += s[Math.floor(s.length / 2) - 1];
    answer += s[Math.floor(s.length / 2)];
  } else answer = s[Math.floor(s.length / 2)];

  return answer;
}

/* 2022.09.16 2번째 풀이 */
function solution(s) {
  if (s.length % 2 === 0) {
    let idx = Math.floor(s.length / 2);
    return s.substring(idx - 1, idx + 1);
  } else {
    let idx = Math.floor(s.length / 2);
    return s[idx];
  }
}
