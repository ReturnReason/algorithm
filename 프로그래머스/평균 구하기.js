/* 2022.09.02 1번째 풀이 */
function solution(arr) {
  var answer = 0;

  let sum = arr.reduce((pre, cur) => {
    return pre + cur;
  });

  answer = sum / arr.length;

  // 평균값 arr.length

  return answer;
}

/* 2022.09.16 2번째 풀이 */
function solution(arr) {
  var answer = 0;

  answer = arr.reduce((pre, cur) => pre + cur) / arr.length;

  return answer;
}
