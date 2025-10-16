import { isNumber } from "./isNumber.js";

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

const validateNumber = (num) => {
  if (num.trim() === "") {
    throw new Error("[ERROR] 잘못된 수식입니다.");
  }

  if (!isNumber(num)) {
    throw new Error("[ERROR] 지정한 구분자 외의 문자가 포함되어 있습니다.");
  }

  if (Number(num) <= 0) {
    throw new Error("[ERROR] 양수만 입력 가능합니다.");
  }
};
