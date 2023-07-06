function sum(x: number, y = x) {
  return x + y;
}

function tim(x: number, y = x) {
  return x * y;
}

function pow(x: number, p = 2) {
  return Math.pow(x, p);
}

export { pow, sum, tim };
