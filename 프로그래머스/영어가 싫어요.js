function solution(numbers) {
  const a = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  let s = '';
  let ret = '';

  for (let n of numbers) {
    if (!a[s]) s += n;
    if (a[s] >= 0) {
      ret += a[s];
      s = '';
    }
  }

  return Number(ret);
}

/* replace 사용 풀이 */
function solution(numbers) {
  let n = numbers
    .replaceAll('zero', 0)
    .replaceAll('one', 1)
    .replaceAll('two', 2)
    .replaceAll('three', 3)
    .replaceAll('four', 4)
    .replaceAll('five', 5)
    .replaceAll('six', 6)
    .replaceAll('seven', 7)
    .replaceAll('eight', 8)
    .replaceAll('nine', 9);

  return Number(n);
}
