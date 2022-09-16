/* 2022.09.02 1번째 풀이*/
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

/* 2022.09.16 2번째 풀이*/
function solution(arr) {
  if (arr.length === 1) return [-1];

  let min = arr[0];
  if (arr.length) {
    for (let i = 0; i < arr.length; i++) {
      if (min > arr[i]) min = arr[i];
    }
    arr.splice(arr.indexOf(min), 1);
    return arr;
  }
}
