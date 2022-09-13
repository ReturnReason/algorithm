/* 스택을 사용한 풀이
  삼항 연산자가 if else 보다 속도가 빠름.
*/

function solution(s) {
  var answer = 0;

  if (s.length < 2) return 0;
  const stack = [];
  stack.push(s[0]);

  for (let i = 1; i < s.length; i++) {
    if (stack[stack.length - 1] == s[i]) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }

  answer = stack.length > 0 ? 0 : 1;
  return answer;
}

/**
 *
 * 호율성 테스트2 시간 초과 나는 코드
 */

function solution(s) {
  if (s.length < 2) return 0;
  const stack = [];
  stack.push(s[0]);

  for (let i = 1; i < s.length; i++) {
    if (stack[stack.length - 1] == s[i]) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }

  if (stack.length > 0) return 0;
  else return 1;
}

/**
 * ************************
 * 스택을 사용하지 않은 코드
 * 단, 정확성은 100%지만 효율성 0%인 풀이
 */

function solution(s) {
  // 같은 알파벳 2개 붙은 짝 찾기
  // 그 둘을 제거하고 앞 뒤로 문자열 이어붙이기
  // 이 과정 반복하여 모두 제거하면 짝지어 제거하기 종료
  // 수행 가능하면 1, 아니면 0

  if (s.length < 2) return 0;

  s = s.split('');
  for (let i = 1; i < s.length; i++) {
    let prev = s[i - 1]; // 이전 알파벳
    if (prev === s[i]) {
      // 현재 알파벳과 비교해서 같으면
      s.splice(i - 1, 2);
      i = 0;
    }
  }

  if (s.length > 0) return 0;
  else return 1;
}
