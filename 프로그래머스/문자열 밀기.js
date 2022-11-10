function solution(A, B) {
  if (A === B) return 0;
  let ret = A.split('');
  let cnt = 0;

  for (let i = 0; i < A.length; i++) {
    let s = ret.pop();
    ret.unshift(s);
    cnt++;
    if (ret.join('') === B) return cnt;
  }
  return -1;
}
