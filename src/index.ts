function sum(x: number, y = x) {
  return x + y;
}

function tim(x: number, y = x) {
  return x * y;
}

function div(x: number, y = 2) {
  if (y === 0) {
    throw new Error("Division by zero isn't allowed!");
  }
  return x / y;
}

function pow(x: number, p = 2) {
  return Math.pow(x, p);
}

export { div, pow, sum, tim };
