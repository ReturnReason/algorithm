function solution(n) {
  var answer = 0;

  answer = parseInt([...n.toString(3)].reverse().join(''), 3);

  return answer;
}
