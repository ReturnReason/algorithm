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
  });
};

module.exports = problem6;
