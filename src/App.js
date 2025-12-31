import { Console } from '@woowacourse/mission-utils';
import InputView from './views/InputView.js';

class App {
  constructor() {
    this.inputView = new InputView();
  }

  async run() {
    const userInput = await this.inputView.read('덧셈할 문자열을 입력해 주세요.');
    const numbers = this.parseNumbers(userInput);
    numbers.forEach(this.validateNumber);

    const result = numbers.reduce((total, cur) => total + cur, 0);
    Console.print(`결과 : ${result}`);
  }

  parseNumbers(userInput) {
    let { expression, delimiter } = this.parseExpression(userInput);

    const numbers = expression.split(new RegExp(`[${delimiter}]`));
    numbers.forEach(this.validateNumeric);

    return numbers.map(Number);
  }

  parseExpression(userInput) {
    let expression = userInput;
    let delimiter = ',:';

    const regex = /\/\/(.*?)\\n/g;
    const foundDelimiters = [...userInput.matchAll(regex)].map(match => match[1]);
    this.validateCustomDelimiterCount(foundDelimiters);

    if (foundDelimiters.length === 1) {
      expression = this.removeCustomDelimiterPrefix(userInput);
      delimiter = foundDelimiters[0];
    }

    return { expression, delimiter };
  }

  removeCustomDelimiterPrefix(userInput) {
    const regex = /^(\/\/.*?\\n)(.*)/;
    const groups = userInput.match(regex);

    const expression = groups[2];
    return expression;
  }

  validateCustomDelimiterCount(foundDelimiters) {
    if (foundDelimiters.length > 1) {
      throw new Error('[ERROR] 커스텀 구분자는 한 번만 선언할 수 있습니다.');
    }
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
}

export default App;
