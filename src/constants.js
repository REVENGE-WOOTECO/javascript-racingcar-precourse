const NUMS = {
  MIN_LENGTH: 1,
  MAX_LENGTH: 5,
  RUN_OR_STOP: 4,
  COUNT_MIN: 1,
};

const NAMES = {
  SPACES: " ",
  SPLIT: ",",
};

const VALID_ALERTS = {
  NAME_INCLUDE_SPACES: "공백 없이 입력해주세요.",
  NAME_LENGTH_ERROR:
    "자동차 이름은 1자 이상, 5자 이하여야 합니다.\n예) 12345 (허용), 123456 (불가)",
  NAME_DUPLICATED: "중복되지 않은 이름을 사용해주세요.",
  NAME_NOT_ENOUGH: "자동차 이름을 2개 이상 입력해주세요.",
  COUNT_NOT_VALID: "1 이상의 수를 입력해주세요",
};

const RESULT_TEXT = "최종 우승자: ";

export { NUMS, NAMES, VALID_ALERTS, RESULT_TEXT };
