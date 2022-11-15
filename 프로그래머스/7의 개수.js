function solution(array) {
  let cnt = 0;
  array.map((a) => {
    if (String(a).match(/7/g)) {
      cnt += String(a).match(/7/g).length;
    }
  });
  return cnt;
}
