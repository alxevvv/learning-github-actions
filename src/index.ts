function add(x: number, y = x) {
  return x + y;
}

function mult(x: number, y = x) {
  return x * y;
}

export { add, mult };
