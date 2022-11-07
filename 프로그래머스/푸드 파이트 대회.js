function solution(food) {
  let front = '';
  let back = '';

  for (let i = 1; i < food.length; i++) {
    let div = Math.floor(food[i] / 2);
    for (let j = 0; j < div; j++) {
      front += i;
      back = i + back;
    }
  }

  return `${front}0${back}`;
}
