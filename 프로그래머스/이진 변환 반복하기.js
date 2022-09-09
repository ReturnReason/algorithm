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
