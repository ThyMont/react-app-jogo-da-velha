import { useState } from 'react';
import ball from '../img/ball.png';
import cross from '../img/cross.png';

export default function BoardSpots({
  user = null,
  onClickBoardSpot = null,
  spotId,
}) {
  const [play, setPlay] = useState('');

  const handleSpotClick = (a) => {
    if (onClickBoardSpot) {
      onClickBoardSpot(spotId);
    }

    const nextPlay = user ? cross : ball;
    if (play === '') setPlay(nextPlay);
  };

  return (
    <div
      className="container bg-gray-100 m-2 p-2 shadow-xl h-20 w-20 sm:h-24 sm:w-24 lg:w-44 lg:h-44 cursor-pointer"
      style={{
        backgroundImage: `url(${play}) `,
        backgroundSize: '80%',
        backgroundRepeat: 'no-repeat',
        backgroundPositionX: 'center',
        backgroundPositionY: 'center',
      }}
      onClick={handleSpotClick}
    ></div>
  );
}
//w-24 h-24
