function solution(strings, n) {
  var answer = [];

  answer = strings.sort((a, b) => {
    if (a[n] > b[n]) {
      return 1;
    } else if (a[n] < b[n]) {
      return -1;
    } else if (a[n] == b[n]) {
      if (a > b) {
        return 1;
      } else {
        return -1;
      }
    } else {
      return 0;
    }
  });

  return answer;
}

/**
 * a가 b보다 작을 때 -1 이면 a부터 시작
 * 1인 경우 b부터 시작
 * 같으면 0을 반환
 */
