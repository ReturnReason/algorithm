function solution(price, money, count) {
  var answer = 0;

  let n = 0;
  for (let i = 1; i <= count; i++) {
    n += price * i;
  }

  if (money - n < 0) answer = Math.abs(money - n);

  return answer;
}

/* 2022.09.17 2번째 풀이*/
function solution(price, money, count) {
  // 기본금액 price
  // n번째 이용시 * n배
  // 모자란 금액 리턴, 안 모자라면 0
  let result = 0;
  for (let i = 1; i <= count; i++) {
    result += price * i;
  }

  return money - result < 0 ? result - money : 0;
}
