function solution(s) {
  var answer = false;

  let tf = Number.isNaN(Number(s));

  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'e') return false;
  }

  if (tf) {
    answer = false;
  } else if (s.length == 4 || s.length == 6) {
    answer = true;
  }

  return answer;
}
