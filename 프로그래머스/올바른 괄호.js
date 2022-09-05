function solution(s) {
  var answer = true;
  const stack = [];

  if (s[0] === ')') return false;

  for (let i = 0; i < s.length; i++) {
    if (s[i] == ')') {
      if (stack.pop() !== '(') {
        answer = false;
        break;
      }
    } else {
      stack.push(s[i]);
    }
  }

  if (stack.length > 0) answer = false;

  return answer;
}
