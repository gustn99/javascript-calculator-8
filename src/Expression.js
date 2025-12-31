class Expression {
  #expression;

  constructor(userInput) {
    if (userInput.startsWith('//')) {
      this.#expression = this.removeCustomDelimiterPrefix(userInput);
      return;
    }
    this.#expression = userInput;
  }

  removeCustomDelimiterPrefix(userInput) {
    const regex = /^(\/\/.*?\\n)(.*)/;
    const groups = userInput.match(regex);

    const expression = groups[2];
    return expression;
  }

  split(delimiter) {
    return this.#expression.split(delimiter);
  }
}

export default Expression;
