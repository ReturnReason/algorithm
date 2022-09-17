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

/* 2022.09.17 2번째 풀이 */
function solution(s) {
  if (s[0] === ')') return false;
  if (s[s.length - 1] === '(') return false;

  let result = true;
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') stack.push(s[i]);
    else if (s[i] === ')') {
      if (stack.pop() !== '(') {
        result = false;
        break;
      }
    }
  }

  if (stack.length > 0) return false;
  else return result;
}
