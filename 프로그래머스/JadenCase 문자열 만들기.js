function solution(s) {
  var answer = '';

  s.toLowerCase()
    .split(' ')
    .forEach((v, i) => {
      if (v === '') {
        answer += ' ';
        answer += v.slice(1);
      } else {
        answer += v[0].toUpperCase();
        answer += v.slice(1);
        answer += ' ';
      }
    });

  answer = answer.trimEnd();
  if (s[s.length - 1] === ' ') answer += ' ';

  return answer;
}

/* 2022.09.16 2번째 풀이 */
function solution(s) {
  let result = '';
  let rememberIdx;

  s.toLowerCase()
    .split('')
    .forEach((v, i) => {
      if (i === 0 || rememberIdx === i) result += v.toUpperCase();
      else result += v;
      if (v === ' ') {
        rememberIdx = i + 1;
      }
    });

  return result;
}
