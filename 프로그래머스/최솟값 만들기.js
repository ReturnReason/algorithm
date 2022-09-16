function solution(A, B) {
  var answer = 0;

  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);

  for (let i = 0; i < A.length; i++) {
    answer += A[i] * B[i];
  }

  return answer;
}

/* 2022.09.17 2번째 풀이 */

function solution(A, B) {
  let minA = A[0];
  let maxB = B[0];
  let result = 0;

  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);
  A.forEach((v, i) => {
    result += v * B[i];
  });
  return result;
}
