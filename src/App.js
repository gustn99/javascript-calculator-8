import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    const userInput = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.');
    const numbers = this.parseNumbers(userInput);
    numbers.forEach(this.validateNumber);

    const result = numbers.reduce((total, cur) => total + cur, 0);
    Console.print(`결과 : ${result}`);
  }

  parseNumbers(userInput) {
    const regex = /\/\/(.*?)\\n/g;
    const matchResults = [...userInput.matchAll(regex)];

    let expression = userInput;
    let delimiter = ',:';

    if (matchResults.length > 1) {
      throw new Error('[ERROR] 커스텀 구분자는 한 번만 선언할 수 있습니다.');
    }

    if (matchResults.length === 1) {
      const regex = /^(\/\/.*?\\n)(.*)/;
      const groups = userInput.match(regex);

      expression = groups[2];
      delimiter = matchResults[0][1];
    }

    const numbers = expression.split(new RegExp(`[${delimiter}]`));
    numbers.forEach(this.validateNumeric);

    return numbers.map(Number);
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
