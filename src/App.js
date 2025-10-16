import { Console } from "@woowacourse/mission-utils";
import { parseDelimiter } from "./utils/delimiter.js";
import { calculate, parseNumber, validateNumber } from "./utils/number.js";

class App {
  async run() {
    const input = await Console.readLineAsync(
      "덧셈할 문자열을 입력해 주세요.\n"
    );

    const [strippedInput, delimiter] = parseDelimiter(input);
    const numbers = strippedInput.split(delimiter);
    const validNumbers = numbers.map((n) => {
      validateNumber(n);
      return Number(n);
    });

    const result = calculate(validNumbers);

    Console.print(result);
  }
}

export default App;
