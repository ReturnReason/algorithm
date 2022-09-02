function solution(x) {
  var answer = true;

  const num = String(x).split('');
  let result = num.reduce((pre, curr) => {
    return Number(pre) + Number(curr);
  });

  if (x % result != 0) answer = false;

  return answer;
}
