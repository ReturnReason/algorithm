function solution(n) {
  var answer = [];

  answer = String(n).split('').reverse();
  answer = answer.map((v) => {
    return Number(v);
  });

  return answer;
}
