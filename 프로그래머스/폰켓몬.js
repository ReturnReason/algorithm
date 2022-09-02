function solution(nums) {
  var answer = 1;
  let pick = nums.length / 2 - 1;

  const myPick = [];
  myPick.push(nums[0]);

  for (let i = 1; i < nums.length; i++) {
    if (pick === 0) break;

    if (myPick.includes(nums[i])) {
      continue;
    } else {
      myPick.push(nums[i]);
      pick--;
      answer++;
    }
  }

  return answer;
}
