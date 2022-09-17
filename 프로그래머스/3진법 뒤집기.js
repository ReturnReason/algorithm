function solution(n) {
  var answer = 0;

  answer = parseInt([...n.toString(3)].reverse().join(''), 3);

  return answer;
}
/* 2022.09.17 2번째 풀이 */
function solution(n) {
    
  let a = (Array.from(n.toString(3)).reverse().map(Number).join(''));
  return parseInt(a, 3);
  
}