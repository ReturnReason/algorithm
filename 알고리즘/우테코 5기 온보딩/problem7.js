const problem7 = (user, friends, visitors) => {
  let knowUsers = [];
  friends.forEach((friend) => {
    if (friend.includes(user)) {
      knowUsers.push(friend);
    }
  });
  knowUsers = knowUsers.flat().filter((knowUser) => user !== knowUser);

  const score = {};
  friends.forEach((friend) => {
    const [firstUser, secondUser] = friend;
    if (
      knowUsers.includes(firstUser) &&
      secondUser !== user &&
      !score[secondUser]
    ) {
      score[secondUser] = 10;
    } else if (
      knowUsers.includes(firstUser) &&
      secondUser !== user &&
      score[secondUser]
    ) {
      score[secondUser] += 10;
    }

    if (
      knowUsers.includes(secondUser) &&
      firstUser !== user &&
      !score[firstUser]
    ) {
      score[firstUser] = 10;
    } else if (
      knowUsers.includes(secondUser) &&
      firstUser !== user &&
      score[firstUser]
    ) {
      score[firstUser] += 10;
    }
  });

  visitors.forEach((visitor) => {
    if (!knowUsers.includes(visitor) && !score[visitor]) {
      score[visitor] = 1;
    } else if (!knowUsers.includes(visitor) && score[visitor]) {
      score[visitor] += 1;
    }
  });

  console.log(score);
};

console.log(
  problem7(
    'mrko',
    [
      ['donut', 'andole'],
      ['donut', 'jun'],
      ['donut', 'mrko'],
      ['shakevan', 'andole'],
      ['shakevan', 'jun'],
      ['shakevan', 'mrko'],
    ],
    ['bedi', 'bedi', 'donut', 'bedi', 'shakevan']
  )
);

module.exports = problem7;
