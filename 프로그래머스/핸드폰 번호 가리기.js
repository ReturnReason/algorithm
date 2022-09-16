/* 2022.09.02 1번째 풀이 */
function solution(phone_number) {
  var answer = '';

  for (let i = 0; i < phone_number.length - 4; i++) {
    answer += '*';
  }

  answer += phone_number.slice(phone_number.length - 4, phone_number.length);

  return answer;
}

/* 2022.09.16 2번째 풀이 */
function solution(phone_number) {
  return '*'.repeat(phone_number.length - 4) + phone_number.slice(-4);
}
