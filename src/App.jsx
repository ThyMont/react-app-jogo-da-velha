import Header from './components/Header';
import Board from './components/Board';
import BoardSpots from './components/BoardSpots';
import { useEffect, useState } from 'react';

export default function App() {
  const [user, setUser] = useState(true);
  const [playerMessage, setPlayerMessage] = useState('');
  const [board, setBoard] = useState([]);

  useEffect(() => {
    const newBoard = [
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
    ];
    setBoard(newBoard);
  }, []);

  const handleClickSpot = (spotId) => {
    const spot = user ? 'X' : 'O';
    const newBoard = [...board];
    newBoard[spotId[0]][spotId[1]] = spot;
    setBoard(newBoard);
    checkBoard(spotId);
    setUser((currentUser) => !currentUser);
  };
  const restart = () => {};

  const checkBoard = (spotId) => {
    //false = sem ganhador
    //true = com ganhador
    const [x, y] = spotId;
    const b = [...board];
    const search = user ? 'X' : 'O';
    //verificar horizontal

    if (b[x][0] === search && b[x][1] === search && b[x][2] === search) {
      console.log('ganhou ' + search);
    }
    if (b[0][y] === search && b[1][y] === search && b[2][y] === search) {
      console.log('ganhou ' + search);
    }
    if (b[0][0] === search && b[1][1] === search && b[2][2] === search) {
      console.log('ganhou ' + search);
    }
    if (b[2][0] === search && b[1][1] === search && b[0][2] === search) {
      console.log('ganhou ' + search);
    }
  };

  useEffect(() => {
    const message = user ? 'Jogador nº 1' : 'Jogador nº 2';
    setPlayerMessage(message);
  }, [user]);

  return (
    <div className="container text-center content-center mx-auto max-w-full">
      <Header>React Jogo da Velha</Header>
      <h1>{playerMessage}</h1>
      <button onClick={restart}>Reiniciar</button>
      <div>
        <Board>
          <table className="mx-auto">
            <tbody>
              <tr>
                <td>
                  <BoardSpots
                    spotId={[0, 0]}
                    user={user}
                    onClickBoardSpot={handleClickSpot}
                  ></BoardSpots>
                </td>
                <td>
                  <BoardSpots
                    spotId={[0, 1]}
                    user={user}
                    onClickBoardSpot={handleClickSpot}
                  ></BoardSpots>
                </td>
                <td>
                  <BoardSpots
                    spotId={[0, 2]}
                    user={user}
                    onClickBoardSpot={handleClickSpot}
                  ></BoardSpots>
                </td>
              </tr>
              <tr>
                <td>
                  <BoardSpots
                    spotId={[1, 0]}
                    user={user}
                    onClickBoardSpot={handleClickSpot}
                  ></BoardSpots>
                </td>
                <td>
                  <BoardSpots
                    spotId={[1, 1]}
                    user={user}
                    onClickBoardSpot={handleClickSpot}
                  ></BoardSpots>
                </td>
                <td>
                  <BoardSpots
                    spotId={[1, 2]}
                    user={user}
                    onClickBoardSpot={handleClickSpot}
                  ></BoardSpots>
                </td>
              </tr>
              <tr>
                <td>
                  <BoardSpots
                    spotId={[2, 0]}
                    user={user}
                    onClickBoardSpot={handleClickSpot}
                  ></BoardSpots>
                </td>
                <td>
                  <BoardSpots
                    spotId={[2, 1]}
                    user={user}
                    onClickBoardSpot={handleClickSpot}
                  ></BoardSpots>
                </td>
                <td>
                  <BoardSpots
                    spotId={[2, 2]}
                    user={user}
                    onClickBoardSpot={handleClickSpot}
                  ></BoardSpots>
                </td>
              </tr>
            </tbody>
          </table>
        </Board>
      </div>
    </div>
  );
}
