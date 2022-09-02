function solution(n) {
  var answer = 0;

  String(n)
    .split('')
    .forEach((v) => {
      answer += Number(v);
    });

  return answer;
}
