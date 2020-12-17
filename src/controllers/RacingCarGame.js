import CarNameInputFormView from '../views/CarNameInputFormView.js';
import RacingCountInputFormView from '../views/RacingCountInputFormView.js';
import ResultView from '../views/ResultView.js';

import carNameValidator from '../utils/carNameValidator.js';

import Car from '../models/Car.js';

const tag = `[RacingCarGame]`;
export default class RacingCarGame {
  init() {
    this.carNameInputForm = new CarNameInputFormView()
      .setup(document.querySelector('#car-name-input-container'))
      .on('submitCarNames', (event) => this.onSubmitCarNamesHandler(event.detail));
    this.racingCountInputForm = new RacingCountInputFormView()
      .init(document.querySelector('#racing-count-input-container'))
      .hide();
    new ResultView().init(document.querySelector('#racing-result-container')).hide();

    this.cars = [];
  }

  onSubmitCarNamesHandler(carNames) {
    console.log(`${tag} onSubmitCarNamesHandler`);
    this.carNames = carNames.split(',');
    this.carNames.map(carNameValidator).every((result) => result)
      ? this.createCar(this.carNames)
      : this.carNameInputForm.resetInputForm();
  }

  createCar(carNames) {
    console.log(`${tag} createCar`);
    this.setCars(carNames.map((carName) => new Car(carName)));
  }

  setCars(createdCars) {
    this.cars = createdCars;
  }
}

new RacingCarGame();
