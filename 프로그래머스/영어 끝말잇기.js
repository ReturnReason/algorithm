function solution(n, words) {
  var answer = [0, 0]; // 번호, 차례
  let personNumber = 1; // 사람 번호
  let turn = 1; // 차례
  const list = {};

  // 이전에 나왔던 단어면 탈락
  for (let i = 0; i < words.length; i++) {
    if (list[words[i]] == undefined) {
      list[words[i]] = 1;
    } else {
      answer[0] = personNumber;
      answer[1] = turn;
      return answer;
    }

    if (personNumber == n) {
      personNumber = 1;
      turn += 1;
    } else {
      personNumber += 1;
    }
  }

  personNumber = 1;
  turn = 1;

  // 끝말을 못 이으면 탈락
  for (let i = 1; i < words.length; i++) {
    let prev = words[i - 1].slice(-1);

    if (i % n == 0) {
      turn += 1;
      personNumber = 1;
    } else {
      personNumber += 1;
    }

    // 앞 원소의 끝이랑 현재 글자 0번째랑 같은지 확인
    if (!(words[i].slice(0, 1) === prev)) {
      answer[0] = personNumber;
      answer[1] = turn;
      return answer;
    }
  }

  return answer;
}
