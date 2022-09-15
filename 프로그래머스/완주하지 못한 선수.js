function solution(participant, completion) {
  var answer;

  participant.sort();
  completion.sort();
  for (let i = 0; i < completion.length; i++) {
    if (participant[i] !== completion[i]) {
      return participant[i];
    }
  }

  for (let j = 0; j < participant.length; j++) {
    if (completion.includes(participant[j]) === false) answer = participant[j];
  }

  return answer;
}
