function solution(price, money, count) {
  var answer = 0;

  let n = 0;
  for (let i = 1; i <= count; i++) {
    n += price * i;
  }

  if (money - n < 0) answer = Math.abs(money - n);

  return answer;
}
