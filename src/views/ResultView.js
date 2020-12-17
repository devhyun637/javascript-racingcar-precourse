import View from './View.js';

export default class ResultView extends View {
  setup($element) {
    this.init($element);
    this.racingResult = $element.querySelector('.racing-results');
    this.racingRoundsHTML = '';
    return this;
  }

  renderRacingResultHtml(winner) {
    this.racingResult.innerHTML = this.racingRoundsHTML + this.getWinnerHTML(winner);
  }

  appendRacingOneRoundHTML(cars) {
    this.racingRoundsHTML += `<div class="racing-rounds">${cars
      .map((car) => this.getResultOfCarHTML(car))
      .join('')}</div>`;
  }

  getResultOfCarHTML(car) {
    return `<p>${car.name}: ${'-'.repeat(car.distance)}</p>`;
  }

  getWinnerHTML(cars) {
    return `<div id="racing-game-winner"><p>최종 우승자 : ${cars
      .map((car) => car.name)
      .join(',')}</p></div>`;
  }
}
