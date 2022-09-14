function solution(array, commands) {
  var answer = [];

  // 배열 i번째부터 j까지 자르고 정렬 k번째 수 구하기
  commands.map((v) => {
    let [start, end, target] = v;
    answer.push(array.slice(start - 1, end).sort((a, b) => a - b)[target - 1]);
  });

  return answer;
}
