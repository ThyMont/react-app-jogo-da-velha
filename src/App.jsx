import Header from './components/Header';
import Board from './components/Board';

export default function App() {
  return (
    <div>
      <Header>React Jogo da Velha</Header>
      <main>
        <Board></Board>
      </main>
    </div>
  );
}
