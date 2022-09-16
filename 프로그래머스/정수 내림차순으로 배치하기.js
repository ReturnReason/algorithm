/* 2022.09.02 1번째 풀이 */
function solution(n) {
  var answer = 0;

  const a = String(n).split('');
  answer = Number(a.sort((a, b) => b - a).join(''));

  return answer;
}

/* 2022.09.16 2번째 풀이 */
function solution(n) {
  return Number(
    String(n)
      .split('')
      .sort((a, b) => b - a)
      .join('')
  );
}
