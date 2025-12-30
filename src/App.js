import CalculatorController from './controllers/CalculatorController.js';

class App {
  async run() {
    const calculator = new CalculatorController();
    await calculator.run();
  }
}

export default App;
