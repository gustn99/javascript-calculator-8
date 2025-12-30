import { Console } from '@woowacourse/mission-utils';

class InputView {
  async read(questions) {
    return await Console.readLineAsync(questions);
  }

  async readString() {
    return await this.read('덧셈할 문자열을 입력해 주세요.\n');
  }
}

export default InputView;
