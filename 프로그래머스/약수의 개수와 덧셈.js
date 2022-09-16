function solution(left, right) {
  var answer = 0;
  const numbers = [];

  for (let i = left; i <= right; i++) {
    let cnt = 0;
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) {
        cnt++;
        numbers.push(j);
      }
    }

    if (cnt % 2 === 0) {
      answer += i;
    } else {
      answer -= i;
    }
  }

  return answer;
}

/* 2022.09.17 2번째 풀이 */
function solution(left, right) {
  let result = 0;

  for (let i = left; i <= right; i++) {
    let cnt = 0;
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) cnt++;
    }
    if (cnt % 2 === 0) result += i;
    else result -= i;
  }

  return result;
}
