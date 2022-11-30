const problem6 = (forms) => {
  const crew = {};
  const duplicateResult = [];

  forms.forEach(([email, nickname]) => {
    if (!crew[email]) {
      crew[email] = [];
    }

    let twoLetters = '';
    nickname.split('').forEach((nick) => {
      if (twoLetters.length === 2) {
        crew[email].push(twoLetters);
        twoLetters = twoLetters[1];
      }
      twoLetters += nick;
    });
    crew[email].push(twoLetters);

    const duplicateCount = {};
    Object.entries(crew).forEach(([_, splitNicknames]) => {
      splitNicknames.forEach((splitNickname) => {
        if (!duplicateCount[splitNickname]) {
          duplicateCount[splitNickname] = 1;
        } else {
          duplicateCount[splitNickname] += 1;
        }
      });
    });
  });
};

module.exports = problem6;
