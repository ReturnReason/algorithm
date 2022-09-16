/* 2022.09.09 1번째 풀이 */
function solution(a, b) {
  var answer = 0;

  if (a === b) {
    answer = a;
  } else if (a > b) {
    for (let i = b; i <= a; i++) answer += i;
  } else if (a < b) {
    for (let i = a; i <= b; i++) answer += i;
  }

  return answer;
}

/* 2022.09.16 2번째 풀이 */
function solution(a, b) {
  if (a == b) return a;

  let start = a > b ? b : a;
  let end = a > b ? a : b;

  let result = 0;
  for (let i = start; i <= end; i++) {
    result += i;
  }

  return result;
}
