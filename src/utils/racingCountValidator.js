import { ERROR_MESSAGE } from './constants.js';

const isNotNumber = (racingCount) => {
  return isNaN(racingCount) ? alert(ERROR_MESSAGE.IS_NOT_NUMBER) : true;
};

const isPositiveNumber = (racingCount) => {
  return racingCount <= 0 ? alert(ERROR_MESSAGE.IS_NOT_POSITIVE_NUMBER) : true;
};

export default function racingCountValidator(racingCount) {
  return isNotNumber(racingCount) && isPositiveNumber(racingCount);
}
