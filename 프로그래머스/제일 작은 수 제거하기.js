function solution(arr) {
  var answer;
  let min = arr[0];

  if (arr.length === 1) answer = [-1];
  else {
    arr.forEach((v) => {
      if (min > v) min = v;
    });
    answer = arr.filter((v) => v > min);
  }

  return answer;
}
