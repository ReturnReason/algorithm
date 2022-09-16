function solution(arr1, arr2) {
  var answer = [];

  for (let i = 0; i < arr1.length; i++) {
    const a = [];
    for (let j = 0; j < arr1[i].length; j++) {
      a.push(arr1[i][j] + arr2[i][j]);
    }
    answer.push(a);
  }

  return answer;
}

/* 2022.09.17 2번째 풀이 */
function solution(arr1, arr2) {
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    let sum = [];
    for (let j = 0; j < arr1[i].length; j++) {
      sum.push(arr1[i][j] + arr2[i][j]);
    }
    result.push(sum);
  }

  return result;
}
