function add(x: number, y = x) {
  return x + y;
}

function mult(x: number, y = x) {
  return x * y;
}

function pow(x: number, p = 2) {
  return Math.pow(x, p);
}

export { add, mult, pow };
