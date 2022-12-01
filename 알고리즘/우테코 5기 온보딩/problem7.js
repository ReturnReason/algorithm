const problem7 = (user, friends, visitors) => {
  // 프렌즈 배열에서 user와 아는 사람 목록을 추려낸다.
  // 유저와 아는 사람 목록에 해당하는 모르는 사람이면 + 10점을 부여한다.

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
