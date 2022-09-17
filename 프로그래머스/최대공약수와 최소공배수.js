function solution(n, m) {
  var answer = [];

  let a = Math.max(n, m);
  let b = Math.min(n, m);

  let c = a * b;

  let r;

  while (b) {
    r = a % b;
    a = b;
    b = r;
  }

  c = c / a;

  answer.push(a);
  answer.push(c);

  return answer;
}

/* 2022.09.17 2번째 풀이 */
function solution(n, m) {
  let a, b, r;
  a = Math.max(n, m);
  b = Math.min(n, m);
  let c = a * b;

  let result = [];

  while (b) {
    r = a % b;
    a = b;
    b = r;
  }

  c = c / a;

  return [a, c];
}

/** 최대공약수 구하는 방법
 *  큰거(a) % 작은거(b) = 0 이면 작은 것(b)이 최대 공약수가 된다.
 *  0이 아니라면 a에 b를, b에는 a를 넣고 b가 0이 될 때 까지 반복. (이 경우 a가 최대공약수)
 * 최대 공약수를 구했다면 (큰거 * 작은거) / 최대공약수 = 최소공배수 가 된다.
 */
