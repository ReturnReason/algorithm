function solution(arr) {
  var answer = [];
  answer.push(arr[0]);

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] == arr[i + 1]) {
      continue;
    } else {
      answer.push(arr[i + 1]);
    }
  }

  return answer;
}

/* 2022.09.17 나중에 다시 풀어보기 */
function solution(arr) {
  let result = [];
  // 연속 숫자는 1개만, 기존 배열 순서 유지
  result.push(arr[0]);

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i + 1]) continue;
    else result.push(arr[i + 1]);
  }

  return result;
}
