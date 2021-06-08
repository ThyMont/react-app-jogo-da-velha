import Header from './components/Header';
import Board from './components/Board';
import BoardSpots from './components/BoardSpots';
import { useEffect, useState } from 'react';
import { board as baseBoard } from './json/board.json';
import { getNewId } from './services/idService';

export default function App() {
  const [user, setUser] = useState(true);
  const [playerMessage, setPlayerMessage] = useState('');
  const [board, setBoard] = useState([]);
  const [gameContinue, setGameContinue] = useState(true);

  useEffect(() => {
    const newBoard = [
      [baseBoard[0], baseBoard[1], baseBoard[2]],
      [baseBoard[3], baseBoard[4], baseBoard[5]],
      [baseBoard[6], baseBoard[7], baseBoard[8]],
    ];
    setBoard(newBoard);
  }, []);

  const handleClickSpot = (coordinates) => {
    const [x, y] = coordinates;
    const spot = user ? 'X' : 'O';
    const newBoard = [...board];
    newBoard[x][y].play = spot;
    setBoard(newBoard);
    checkBoard(coordinates);
    setUser((currentUser) => !currentUser);
  };
  const restart = () => {
    let newBoard = [...board];
    newBoard = newBoard.map((row) =>
      row.map((spot) => {
        spot.play = '';
        return spot;
      })
    );
    setBoard(newBoard);
    setGameContinue(true);
  };

  const checkBoard = (coordinates) => {
    //false = sem ganhador
    //true = com ganhador
    const [x, y] = coordinates;
    const b = [...board];
    const search = user ? 'X' : 'O';

    if (
      b[x][0].play === search &&
      b[x][1].play === search &&
      b[x][2].play === search
    ) {
      setGameContinue((currentGameContinue) => !currentGameContinue);
      console.log('ganhou ' + search);
    }
    if (
      b[0][y].play === search &&
      b[1][y].play === search &&
      b[2][y].play === search
    ) {
      setGameContinue((currentGameContinue) => !currentGameContinue);
      console.log('ganhou ' + search);
    }
    if (
      b[0][0].play === search &&
      b[1][1].play === search &&
      b[2][2].play === search
    ) {
      setGameContinue((currentGameContinue) => !currentGameContinue);
      console.log('ganhou ' + search);
    }
    if (
      b[2][0].play === search &&
      b[1][1].play === search &&
      b[0][2].play === search
    ) {
      setGameContinue((currentGameContinue) => !currentGameContinue);
      console.log('ganhou ' + search);
    }
    if (
      b[0].findIndex((a) => a.play === '') < 0 &&
      b[1].findIndex((a) => a.play === '') < 0 &&
      b[2].findIndex((a) => a.play === '') < 0
    ) {
      setGameContinue((currentGameContinue) => !currentGameContinue);
      console.log('Empatou');
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
              {board.map((row) => (
                <tr key={getNewId()}>
                  {row.map((spot) => (
                    <td key={getNewId()}>
                      <BoardSpots
                        coordinates={[spot.x, spot.y]}
                        background={spot.play}
                        play={spot.play}
                        onClickBoardSpot={handleClickSpot}
                        doGameContinue={gameContinue}
                      ></BoardSpots>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </Board>
      </div>
    </div>
  );
}
