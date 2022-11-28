const { average, divide, multiply, subtract, sum } = require(".");

describe("Unit tests for calculator functions", () => {
  test("sum", () => {
    expect(sum(1, 2)).toBe(3);
  });

  test("subtract", () => {
    expect(subtract(1, 2)).toBe(-1);
  });

  test("multiply", () => {
    expect(multiply(1, 2)).toBe(2);
  });

  test("divide", () => {
    expect(divide(1, 2)).toBe(0.5);
  });

  test("average", () => {
    expect(average(1, 2)).toBe(1.5);
  });
});
