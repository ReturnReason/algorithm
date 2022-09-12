function solution(d, budget) {
  var answer = 0;

  d.sort((a, b) => a - b).forEach((v) => {
    if (budget - v >= 0) {
      budget -= v;
      answer++;
    }
  });

  console.log(budget);
  return answer;
}

/**
 * sort함수 사용할 때 숫자 정렬은 매개변수 넣어주는 거 까먹지 말기!
 */
