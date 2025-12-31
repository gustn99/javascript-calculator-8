class Delimiter {
  #delimiter;

  constructor(userInput) {
    const regex = /\/\/(.*?)\\n/g;
    const foundDelimiters = [...userInput.matchAll(regex)].map(match => match[1]);
    this.validateCustomDelimiterCount(foundDelimiters);

    const delimiter = foundDelimiters[0] ?? ',:';
    this.#delimiter = delimiter;
  }

  validateCustomDelimiterCount(foundDelimiters) {
    if (foundDelimiters.length > 1) {
      throw new Error('[ERROR] 커스텀 구분자는 한 번만 선언할 수 있습니다.');
    }
  }

  getRegExp() {
    return new RegExp(`[${this.#delimiter}]`);
  }
}

export default Delimiter;
