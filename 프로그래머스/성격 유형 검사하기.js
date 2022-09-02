function solution(survey, choices) {
  var answer = '';
  const userScore = {
    R: 0,
    T: 0,
    C: 0,
    F: 0,
    J: 0,
    M: 0,
    A: 0,
    N: 0,
  };
  const score = [3, 2, 1, 0, 1, 2, 3];
  // choices 가 1이면 3, 2면 2, 3이면 1,
  // 4면 0, 5면 1, 6이면 2, 7이면 3

  // survey[0]은  i+1 번 질문 비동의
  // survey[1]은 i+1번 질문 동의

  survey.forEach((v, i) => {
    console.log('스코어 확인 : ', score[choices[i] - 1]);
    console.log(choices[i]);

    if (choices[i] >= 5) {
      userScore[v[1]] += score[choices[i] - 1];
    } else if (choices[i] <= 3) {
      userScore[v[0]] += score[choices[i] - 1];
    }

    // 초이스의 숫자가 5이상이면 [1]번에 점수
    // 초이스 숫자가 3이하면 [0]번에 점수

    console.log(userScore);
  });

  // 성격 유형 정하기
  for (let o in userScore) {
    if (o == 'R') {
      if (userScore['R'] >= userScore['T']) {
        answer += 'R';
      } else {
        answer += 'T';
      }
    } else if (o == 'C') {
      if (userScore['C'] >= userScore['F']) {
        answer += 'C';
      } else {
        answer += 'F';
      }
    } else if (o == 'J') {
      if (userScore['J'] >= userScore['M']) {
        answer += 'J';
      } else {
        answer += 'M';
      }
    } else if (o === 'A') {
      if (userScore['A'] >= userScore['N']) {
        answer += 'A';
      } else {
        answer += 'N';
      }
    }
  }

  console.log(answer);

  return answer;
}
