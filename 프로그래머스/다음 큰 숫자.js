function solution(n) {
  var answer = 0;

  let cnt = n
    .toString(2)
    .split('')
    .filter((v) => {
      return v == '1';
    }).length;

  for (let i = n + 1; n <= 1000000; i++) {
    let cnt2;
    cnt2 = i
      .toString(2)
      .split('')
      .filter((v) => {
        return v == '1';
      }).length;

    if (cnt === cnt2) return i;
  }

  return answer;
}
