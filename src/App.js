import { Console } from '@woowacourse/mission-utils';
import InputView from './views/InputView.js';
import Delimiter from './Delimiter.js';
import Expression from './Expression.js';

class App {
  constructor() {
    this.inputView = new InputView();
  }

  async run() {
    const userInput = await this.inputView.read('덧셈할 문자열을 입력해 주세요.');

    const delimiter = new Delimiter(userInput);
    const expression = new Expression(userInput);
    const numbers = expression.split(delimiter);

    const result = numbers.getSum();
    
    Console.print(`결과 : ${result}`);
  }
}

export default App;
