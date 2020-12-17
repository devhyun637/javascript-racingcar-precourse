import View from './View.js';

const tag = `[RacingCountInputFormView]`;
export default class RacingCountInputFormView extends View {
  setup($element) {
    this.init($element);
    this.$racingCountInput = $element.querySelector('#racing-count-input');
    this.$racingCountSumbit = $element.querySelector('#racing-count-submit');
    this.eventBind();
    return this;
  }

  eventBind() {
    this.$racingCountSumbit.addEventListener('click', () => this.onRacingCountSubmitHandler());
  }

  resetInputForm() {
    this.$racingCountInput.value = '';
  }

  onRacingCountSubmitHandler() {
    console.log(`${tag} RacingCountInputFormView`);
    this.emit('submitRacingCount', this.$racingCountInput.value);
  }
}
