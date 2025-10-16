import { isNumber } from "./common.js";

export const parseDelimiter = (input) => {
  const matches = [...input.matchAll(/\/\/(.*?)\\n/g)];

  if (matches.length === 0) {
    // 커스텀 구분자가 없는 경우
    const delimiter = /[,:]/;
    return [input, delimiter];
  } else if (matches.length === 1) {
    // 커스텀 구분자가 하나인 경우
    const delimiter = matches[0][1];
    validateDelimiter(delimiter);

    const prefix = matches[0][0];
    const strippedInput = input.replace(prefix, "");

    return [strippedInput, delimiter];
  } else {
    // 커스텀 구분자가 둘 이상인 경우
    throw new Error("[ERROR] 구분자는 한 번만 선언할 수 있습니다.");
  }
};

const validateDelimiter = (delimiter) => {
  if (delimiter.length === 0) {
    throw new Error("[ERROR] 구분자는 하나 이상의 문자여야 합니다.");
  }

  if (isNumber(delimiter)) {
    throw new Error("[ERROR] 숫자는 구분자가 될 수 없습니다.");
  }
};
