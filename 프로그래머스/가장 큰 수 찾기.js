function solution(array) {
  const ret = array.reduce((p, c) => Math.max(p, c));
  return [ret, array.indexOf(ret)];
}
