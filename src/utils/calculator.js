export const calculate = (numbers) => {
  if (numbers.length === 1 && numbers[0] === "") {
    return 0;
  }

  const validNumbers = numbers.map((n) => {
    validateNumber(n);
    return Number(n);
  });

  const result = validNumbers.reduce((total, num) => total + num, 0);

  return result;
};

const validateNumber = (n) => {
  const numN = Number(n);
  if (n === "" || isNaN(numN) || numN <= 0) {
    throw new Error(`[ERROR] 잘못된 입력입니다. : ${n}`);
  }
};
