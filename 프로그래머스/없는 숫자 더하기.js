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

/* 2022.09.16 2번째 풀이 */
function solution(numbers) {
  const list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let result = 0;

  for (let i = 0; i < list.length; i++) {
    if (numbers.indexOf(list[i]) === -1) result += list[i];
  }
  return result;
}
