import InputView from '../views/InputView.js';

class CalculatorController {
  constructor() {
    this.inputView = new InputView();
  }

  async run() {
    const userString = await this.inputView.readString();
  }
}

export default CalculatorController;
