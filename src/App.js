import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    const userInput = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.');
    const numbers = this.parseNumbers(userInput);

    const result = numbers.reduce((total, cur) => total + cur, 0);
    Console.print(`결과 : ${result}`);
  }

  parseNumbers(userInput) {
    // user input으로부터 식과 구분자 추출 -> numbers 배열 반환
    return [];
  }
}

export default App;
