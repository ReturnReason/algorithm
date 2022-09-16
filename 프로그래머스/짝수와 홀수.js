/* 2022.09.02 1번째 풀이 */
function solution(num) {
  var answer = '';
  answer = num % 2 === 0 ? 'Even' : 'Odd';
  return answer;
}

/* 2022.09.16 2번째 풀이 */
function solution(num) {
  if (num % 2 === 0) return 'Even';
  else return 'Odd';
}
