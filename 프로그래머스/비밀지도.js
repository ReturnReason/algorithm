function solution(n, arr1, arr2) {
  var answer = [];
  const arr3 = [];
  const arr4 = [];

  for (let i = 0; i < n; i++) {
    if (arr1[i].toString(2).length < n) {
      let s = arr1[i].toString(2);
      arr3.push('0'.repeat(n - s.length) + s);
    } else {
      arr3.push(arr1[i].toString(2));
    }

    if (arr2[i].toString(2).length < n) {
      let s = arr2[i].toString(2);
      arr4.push('0'.repeat(n - s.length) + s);
    } else {
      arr4.push(arr2[i].toString(2));
    }
  }

  for (let k = 0; k < n; k++) {
    let a = '';
    for (let i = 0; i < n; i++) {
      if (arr3[k][i] == '0' && arr4[k][i] == '0') {
        a += ' ';
      } else {
        a += '#';
      }
    }
    answer.push(a);
  }

  return answer;
}
