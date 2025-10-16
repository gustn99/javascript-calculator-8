import { Console } from "@woowacourse/mission-utils";
import { parseDelimiter } from "./utils/delimiter.js";
import { calculate } from "./utils/calculator.js";

class App {
  async run() {
    const input = await Console.readLineAsync(
      "덧셈할 문자열을 입력해 주세요.\n"
    );

    const [strippedInput, delimiter] = parseDelimiter(input);
    const numbers = strippedInput.split(delimiter);
    const result = calculate(numbers);

    Console.print(result);
  }
}

export default App;
