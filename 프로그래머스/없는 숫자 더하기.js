function solution(numbers) {
  var answer = 0;
  const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  arr.forEach((v) => {
    if (numbers.includes(v) === false) {
      answer += v;
    }
  });

  return answer;
}
