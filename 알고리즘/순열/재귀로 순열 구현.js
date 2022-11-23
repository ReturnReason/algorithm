const arr = [1, 2, 3];

const makePermutation = (n, r, depth) => {
  if (r === depth) {
    let ret = '';
    for (let i = 0; i < arr.length; i++) {
      ret += arr[i];
    }
    console.log(ret);
    return;
  }

  for (let i = depth; i < n; i++) {
    [arr[i], arr[depth]] = [arr[depth], arr[i]];
    makePermutation(n, r, depth + 1);
    [arr[i], arr[depth]] = [arr[depth], arr[i]];
  }
};

makePermutation(3, 3, 0);
