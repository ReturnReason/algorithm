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
