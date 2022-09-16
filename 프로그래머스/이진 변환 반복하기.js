function solution(s) {
  var answer = [];
  let n = s;
  let count = 0; // 제거한 0 카운트
  let r = 0; // 루프 횟수

  while (n != '1') {
    n = n
      .split('')
      .filter((v) => {
        if (v === '0') count++;
        return v !== '0';
      })
      .join('');

    n = n.length.toString(2);
    r++;
  }

  answer.push(r);
  answer.push(count);

  return answer;
}

/* 2022.09.17 2번째 풀이 */
function solution(s) {
  let cnt = 0;
  let eraseCnt = 0;

  // 0 카운트하고, 0없애고, 2진변환하고
  while (s != 1) {
    for (let i = 0; i < s.length; i++) {
      if (s[i] == 0) eraseCnt++;
    }
    s = s.replace(/0/g, '');
    s = s.length.toString(2);
    cnt += 1;
  }

  return [cnt, eraseCnt];
}
