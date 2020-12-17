import CarNameInputFormView from '../views/CarNameInputFormView.js';
import RacingCountInputFormView from '../views/RacingCountInputFormView.js';
import ResultView from '../views/ResultView.js';

import carNameValidator from '../utils/carNameValidator.js';
import racingCountValidator from '../utils/racingCountValidator.js';
import { CAR_RUN_CONDITION_NUMBER } from '../utils/constants.js';

import Car from '../models/Car.js';

const tag = `[RacingCarGame]`;
export default class RacingCarGame {
  init() {
    this.carNameInputForm = new CarNameInputFormView()
      .setup(document.querySelector('#car-name-input-container'))
      .on('submitCarNames', (event) => this.onSubmitCarNamesHandler(event.detail));

    this.racingCountInputForm = new RacingCountInputFormView()
      .setup(document.querySelector('#racing-count-input-container'))
      .hide()
      .on('submitRacingCount', (event) => this.onSubmitRacingCountHandler(event.detail));

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

  onSubmitRacingCountHandler(racingCount) {
    console.log(`${tag} onSubmitRacingCountHandler`);
    this.racingCount = parseInt(racingCount);
    racingCountValidator(this.racingCount)
      ? this.play(racingCount)
      : this.racingCountInputForm.resetInputForm();
  }

  createCar(carNames) {
    console.log(`${tag} createCar`);
    this.setCars(carNames.map((carName) => new Car(carName)));
  }

  setCars(createdCars) {
    this.cars = createdCars;
    this.renderRacingCountForm();
  }

  play(racingCount) {
    for (let i = 0; i < racingCount; i++) {
      this.cars.forEach((car) => {
        if (this.getRandomNumber() > CAR_RUN_CONDITION_NUMBER) car.run();
      });
    }
  }

  getRandomNumber() {
    return Math.floor(Math.random() * 9 + 1);
  }

  renderRacingCountForm() {
    this.racingCountInputForm.show();
  }
}

new RacingCarGame();
