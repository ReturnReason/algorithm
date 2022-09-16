function solution(absolutes, signs) {
  var answer = 0;

  for (let i = 0; i < signs.length; i++) {
    if (signs[i]) answer += absolutes[i];
    else answer += -absolutes[i];
  }

  return answer;
}

/* 2022.09.16 2번째 풀이 */
function solution(absolutes, signs) {
  let result = 0;
  absolutes.forEach((v, i) => {
    if (signs[i]) result += v;
    else result -= v;
  });

  return result;
}
