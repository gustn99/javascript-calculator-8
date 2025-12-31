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

    // number 검증
    const numbers = expression.split(new RegExp(`[${delimiter}]`)).map(Number);

    return numbers;
  }

}

export default App;
