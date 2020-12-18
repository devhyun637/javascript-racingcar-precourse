import CarNameInputFormView from '../views/CarNameInputFormView.js';
import RacingCountInputFormView from '../views/RacingCountInputFormView.js';
import ResultView from '../views/ResultView.js';

import carNameValidator from '../utils/carNameValidator.js';
import racingCountValidator from '../utils/racingCountValidator.js';
import { CAR_RUN_CONDITION_NUMBER, RANDOM_NUM } from '../utils/constants.js';

import Car from '../models/Car.js';

export default class RacingCarGame {
  init() {
    this.carNameInputForm = new CarNameInputFormView()
      .setup(document.querySelector('#car-name-input-container'))
      .on('submitCarNames', (event) => this.onSubmitCarNamesHandler(event.detail));

    this.racingCountInputForm = new RacingCountInputFormView()
      .setup(document.querySelector('#racing-count-input-container'))
      .hide()
      .on('submitRacingCount', (event) => this.onSubmitRacingCountHandler(event.detail));

    this.resultForm = new ResultView()
      .setup(document.querySelector('#racing-result-container'))
      .hide();

    this.cars = [];
  }

  createCar(carNames) {
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
      this.renderRacingOneRoundResult(this.cars);
    }
    this.renderRacingResult(this.getWinner(this.cars));
  }

  getRandomNumber() {
    return Math.floor(Math.random() * RANDOM_NUM + 1);
  }

  getWinner(cars) {
    const maxDistance = Math.max(...cars.map((car) => car.distance));
    return cars.filter((car) => car.distance === maxDistance);
  }

  renderRacingCountForm() {
    this.racingCountInputForm.show();
  }

  renderRacingOneRoundResult(cars) {
    this.resultForm.appendRacingOneRoundHTML(cars);
  }

  renderRacingResult(winner) {
    this.resultForm.show();
    this.resultForm.renderRacingResultHtml(winner);
  }

  onSubmitCarNamesHandler(carNames) {
    this.carNames = carNames.split(',');
    carNameValidator(this.carNames)
      ? this.createCar(this.carNames)
      : this.carNameInputForm.resetInputForm();
  }

  onSubmitRacingCountHandler(racingCount) {
    this.racingCount = parseInt(racingCount);
    racingCountValidator(this.racingCount)
      ? this.play(racingCount)
      : this.racingCountInputForm.resetInputForm();
  }
}
