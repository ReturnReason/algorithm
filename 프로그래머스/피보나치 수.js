function solution(n) {
  var answer = 0;

  answer = fibo(n);

  return answer;
}

function fibo(m) {
  const arr = Array(m).fill(0);
  arr[0] = 0;
  arr[1] = 1;
  arr[2] = 1;

  if (m === 2) return 1;
  else {
    for (let i = 3; i <= m; i++) {
      arr[i] = (arr[i - 1] + arr[i - 2]) % 1234567;
    }
  }

  return arr[m];
}
