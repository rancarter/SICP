function compute_pascal_element(row, col) {
  return col === 0 || col > row
    ? 0
    : row === 1
    ? 1
    : compute_pascal_element(row - 1, col - 1) +
      compute_pascal_element(row - 1, col);
}

console.log(compute_pascal_element(5, 3));
