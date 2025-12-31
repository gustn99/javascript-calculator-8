import { Console } from '@woowacourse/mission-utils';

class InputView {
  async read(question) {
    return await Console.readLineAsync(question);
  }
}

export default InputView;
