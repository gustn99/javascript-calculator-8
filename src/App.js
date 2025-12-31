import { Console } from '@woowacourse/mission-utils';
import InputView from './views/InputView.js';
import Numbers from './Numbers.js';

class App {
  constructor() {
    this.inputView = new InputView();
  }

  async run() {
    const userInput = await this.inputView.read('덧셈할 문자열을 입력해 주세요.');
    const { expression, delimiter } = this.parseExpression(userInput);
    const numbers = new Numbers(expression, delimiter);

    const result = numbers.getSum();
    Console.print(`결과 : ${result}`);
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

}

export default App;
