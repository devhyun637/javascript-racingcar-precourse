import View from './View.js';

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
    this.$racingCountInput.focus();
  }

  onRacingCountSubmitHandler() {
    this.emit('submitRacingCount', this.$racingCountInput.value);
  }
}
