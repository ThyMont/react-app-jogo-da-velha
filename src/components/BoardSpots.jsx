import ball from '../img/ball.png';
import cross from '../img/cross.png';
import empty from '../img/empty.png';
export default function BoardSpots({
  play = null,
  onClickBoardSpot = null,

  coordinates,
}) {
  let background = '';
  if (play) {
    if (play === 'X') background = cross;
    if (play === 'O') background = ball;
    if (play === '') background = empty;
  }

  const handleSpotClick = () => {
    if (onClickBoardSpot) {
      onClickBoardSpot(coordinates);
    }
  };

  return (
    <div
      className="container bg-gray-100 m-2 p-2 shadow-xl h-20 w-20 sm:h-24 sm:w-24 lg:w-44 lg:h-44 cursor-pointer"
      style={{
        backgroundImage: `url(${background}) `,
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
