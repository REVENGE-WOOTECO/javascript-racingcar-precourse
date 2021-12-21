export const getMessageByErrorCode = (code) => {
  return `ERROR ${code} : ${errorCodes[code]}`;
};

const errorCodes = {
  code1: `입력값이 없습니다.`,
  code2: `자동차 이름은 5자 이하만 가능합니다.`,
  code3: `자동차 이름은 중복없이 입력해주세요.`,
  code4: `횟수는 0보다 커야 합니다.`,
};
