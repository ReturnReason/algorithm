/* 2022.09.02 1번째 풀이 */
function solution(x) {
  var answer = true;

  const num = String(x).split('');
  let result = num.reduce((pre, curr) => {
    return Number(pre) + Number(curr);
  });

  if (x % result != 0) answer = false;

  return answer;
}

/* 2022.09.16 2번째 풀이 */
function solution(x) {
  let result = String(x)
    .split('')
    .map(Number)
    .reduce((c, p) => c + p, 0);
  return x % result === 0 ? true : false;
}
