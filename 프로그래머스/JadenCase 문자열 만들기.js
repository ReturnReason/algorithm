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
