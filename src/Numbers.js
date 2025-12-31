class Numbers {
  #numbers;

  constructor(expression, delimiter) {
    const numbers = expression.split(delimiter.getDelimiterRegExp());
    numbers.forEach(this.validateNumeric);
    numbers.forEach(this.validateNumber);

    this.#numbers = numbers.map(Number);
  }

  validateNumeric(rawNum) {
    // 공백 허용(무시)
    const parsedNum = Number(rawNum);

    if (Number.isNaN(parsedNum)) {
      throw new Error('[ERROR] 피연산자는 숫자만 입력 가능합니다.');
    }
  }

  validateNumber(num) {
    if (num <= 0) {
      throw new Error('[ERROR] 피연산자는 양수만 입력 가능합니다.');
    }
  }

  getSum() {
    return this.#numbers.reduce((total, cur) => total + cur, 0);
  }
}

export default Numbers;
