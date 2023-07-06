function add(x: number, y = x) {
  return x + y;
}

function mult(x: number, y = x) {
  return x * y;
}

function pow(x: number) {
  return mult(x);
}

export { add, mult, pow };
