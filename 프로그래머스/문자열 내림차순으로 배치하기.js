function solution(s) {
  var answer = '';
  const arr = [];
  const arr2 = [];

  for (let c of s) {
    arr.push(c.charCodeAt());
  }

  arr.sort((a, b) => b - a);

  for (let a of arr) {
    arr2.push(String.fromCharCode(a));
  }

  answer = arr2.join('');

  return answer;
}

/* 2022.09.17 2번째 풀이*/

function solution(s) {
  return s
    .split('')
    .sort((a, b) => {
      if (a > b) return -1;
      else if (a < b) return 1;
      else return 0;
    })
    .join('');
}
