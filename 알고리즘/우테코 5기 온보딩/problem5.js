const problem5 = (money) => {
  const changes = [50_000, 10_000, 5_000, 1_000, 500, 100, 50, 10, 1];
  const result = [];

  changes.forEach((change) => {
    result.push(Math.floor(money / change));
    money %= change;
  });
  return result;
};

module.exports = problem5;
