function solution(s) {
  var answer = '';

  let max = Number.MIN_SAFE_INTEGER;
  let min = Number.MAX_SAFE_INTEGER;

  s.split(' ')
    .sort((a, b) => a - b)
    .forEach((v) => {
      if (max < Math.abs(v)) max = v;
      if (min > Math.abs(v)) min = v;
    });

  if (max < 0 && Math.abs(max) > Math.abs(min)) [min, max] = [max, min];

  answer = `${min} ${max}`;

  return answer;
}

/* 2022.09.16 2번째 풀이 */
function solution(s) {
  let numbers = s.split(' ').map(Number);
  return Array.of(Math.min(...numbers), Math.max(...numbers)).join(' ');
}
