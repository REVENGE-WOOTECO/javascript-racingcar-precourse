import { forwardCar } from './Car.js';

const hiddenHTML = () => {
  document.querySelector('#text1').style.visibility = 'hidden';
  document.querySelector('#text2').style.visibility = 'hidden';
  document.querySelector('#racing-count-form').style.visibility = 'hidden';
}; // html 요소 숨김

const printCarStatus = (cars) => { // 차의 distance에 따라 값을 그려주는 함수
  const gameRound = document.createElement('div');
  gameRound.style.marginBottom = '35px';

  const $cars = Object.values(cars);

  $cars.forEach((e) => {
    const car = document.createElement('p');
    const resultCarMove = document.createTextNode(
      `${e.name}: ${forwardCar(e.distance)}`,
    );
    car.append(resultCarMove);
    gameRound.appendChild(car);
  });
  document.querySelector('#app').appendChild(gameRound);
};

const determineWinner = (cars) => { // 최종 우승자 배열 형태로 반환하는 함수
  const $cars = Object.values(cars);
  $cars.sort((a, b) => b.distance - a.distance);

  const MAX_DISTANCE = $cars[0].distance;

  const winners = $cars.reduce((acc, cur) => {
    if (cur.distance === MAX_DISTANCE) {
      acc.push(cur.name);
    }
    return acc;
  }, []);

  return winners;
};

const printWinnerTitle = () => { // "최종 우승자: "를 html에 보여주는 함수
  const winnerTitle = '최종 우승자: ';
  const winnerTitleTag = document.createElement('span');
  const winnerTitleNode = document.createTextNode(winnerTitle);

  winnerTitleTag.appendChild(winnerTitleNode);
  document.querySelector('#app').appendChild(winnerTitleTag);
};

const printWinner = (winners) => { // 최종 우승자 리스트를 html에 보여주는 함수
  const gameResult = document.createElement('span');
  gameResult.id = 'racing-winners';

  let $winner = '';
  winners.forEach((e, idx) => {
    if (idx === 0) {
      $winner += e;
    } else {
      $winner += `, ${e}`;
    }
  });

  const winnerTextNode = document.createTextNode($winner);
  gameResult.appendChild(winnerTextNode);
  document.querySelector('#app').appendChild(gameResult);
};

export {
  hiddenHTML, printCarStatus, determineWinner, printWinner, printWinnerTitle,
};
