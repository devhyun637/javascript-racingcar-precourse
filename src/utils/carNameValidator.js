import { MAX_LENGTH_OF_NAME, ERROR_MESSAGE } from './constants.js';

const isNotNull = (carName) => {
  return carName === '' ? alert(ERROR_MESSAGE.IS_NULL) : true;
};

const isNotIncludedEmptyString = (carName) => {
  return carName.search(/\s/) !== -1 ? alert(ERROR_MESSAGE.IS_INCLUDED_EMPTY_STRING) : true;
};

const isLessThanMaxLength = (carName) => {
  return carName.length > MAX_LENGTH_OF_NAME ? alert(ERROR_MESSAGE.OVER_MAX_LENGTH_NAME) : true;
};

export default function CarNameValidator(carNames) {
  for (let i = 0; i < carNames.length; i++) {
    if (
      !isNotNull(carNames[i]) ||
      !isNotIncludedEmptyString(carNames[i]) ||
      !isLessThanMaxLength(carNames[i])
    )
      return false;
  }
  return true;
}
