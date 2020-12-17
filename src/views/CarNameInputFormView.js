import View from './View.js';

export default class CarNameInputFormView extends View {
  setup($element) {
    this.init($element);
    this.$carNamesInput = $element.querySelector('#car-names-input');
    this.$carNamesSumbit = $element.querySelector('#car-names-submit');
    this.eventBind();
    return this;
  }

  eventBind() {
    this.$carNamesSumbit.addEventListener('click', () => this.onNameSubmitHandler());
  }

  resetInputForm() {
    this.$carNamesInput.value = '';
  }

  onNameSubmitHandler() {
    this.emit('submitCarNames', this.$carNamesInput.value);
  }
}
