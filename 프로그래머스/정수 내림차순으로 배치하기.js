function solution(n) {
  var answer = 0;

  const a = String(n).split('');
  answer = Number(a.sort((a, b) => b - a).join(''));

  return answer;
}
