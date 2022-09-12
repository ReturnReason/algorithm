function solution(sizes) {
  var answer = 0;
  const arr = [];

  for (let i = 0; i < sizes.length; i++) {
    let f, l;

    if (sizes[i][0] > sizes[i][1]) {
      f = sizes[i][0];
      l = sizes[i][1];

      [f, l] = [l, f];
    } else {
      f = sizes[i][0];
      l = sizes[i][1];
    }
    arr.push([f, l]);
  }

  let w = Number.MIN_SAFE_INTEGER;
  let h = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < sizes.length; i++) {
    for (let j = 0; j < 2; j++) {
      if (w < arr[i][0]) w = arr[i][0];
      if (h < arr[i][1]) h = arr[i][1];
    }
  }

  answer = w * h;

  return answer;
}
