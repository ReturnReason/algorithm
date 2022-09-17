function solution(s) {
  var answer = '';

  const word = s.toLowerCase().split(' ');

  for (let i = 0; i < word.length; i++) {
    for (let j = 0; j < word[i].length; j++) {
      if (j % 2 === 0) answer += word[i][j].toUpperCase();
      else answer += word[i][j].toLowerCase();
    }
    if (i != word.length - 1) {
      answer += ' ';
    }
  }

  return answer;
}

/* 2022.09.17 2번째 풀이 */
function solution(s) {
  let result = '';
  let cnt = 0;

  s = s.toLowerCase();

  s.split('').forEach((v, i) => {
    if (cnt % 2 === 0) result += v.toUpperCase();
    else result += v;

    cnt++;

    if (v === ' ') cnt = 0;
  });

  return result;
}
