/* 2022.09.05 1번째 풀이 */
function solution(seoul) {
  var answer = '';

  seoul.map((v, i) => {
    if (v === 'Kim') answer = `김서방은 ${i}에 있다`;
  });

  return answer;
}

/* 2022.09.16 2번째 풀이 */
function solution(seoul) {
  return `김서방은 ${seoul.indexOf('Kim')}에 있다`;
}
