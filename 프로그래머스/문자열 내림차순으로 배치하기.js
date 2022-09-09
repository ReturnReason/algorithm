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
