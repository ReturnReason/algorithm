function solution(price) {
  let dc;
  if (price < 100_000) dc = price;
  if (price >= 100_000) dc = price - price * 0.05;
  if (price >= 300_000) dc = price - price * 0.1;
  if (price >= 500_000) dc = price - price * 0.2;

  return Math.floor(dc);
}
