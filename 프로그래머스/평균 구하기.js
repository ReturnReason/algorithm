function solution(arr) {
  var answer = 0;

  let sum = arr.reduce((pre, cur) => {
    return pre + cur;
  });

  answer = sum / arr.length;

  // 평균값 arr.length

  return answer;
}
