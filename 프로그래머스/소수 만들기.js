function solution(nums) {
  var answer;
  let cnt = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        answer = prime(nums[i] + nums[j] + nums[k]);
        if (answer) cnt++;
      }
    }
  }

  return cnt;
}

function prime(n) {
  let count = 0;
  if (n === 1) return 0;

  for (let i = 2; i <= n; i++) {
    if (i !== n && n % i == 0) return false;
    else if (i === n) count++;
  }

  if (count === 1) return true;
}
