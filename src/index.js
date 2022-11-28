const sum = (...numbers) => {
  return numbers.reduce((acc, curr) => acc + curr, 0);
};

const average = (...numbers) => {
  return sum(...numbers) / numbers.length;
};

const subtract = (total, ...numbers) => {
  return numbers.reduce((acc, curr) => acc - curr, total);
};

const multiply = (...numbers) => {
  return numbers.reduce((acc, curr) => acc * curr, 1);
};

const divide = (total, ...numbers) => {
  return numbers.reduce((acc, curr) => acc / curr, total);
};

module.exports = {
  sum,
  average,
  subtract,
  multiply,
  divide,
};
