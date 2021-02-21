import { useCallback, useState } from 'react';
import styled from "styled-components";
import Board from "./components/Board";
import Game from './domain/game';

const Container = styled.div`
  width: 95vw;
  height: 95vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  font-family: sans-serif;
`;


const game = new Game(5);
const maxPlays = game.rowSize ** 2;

const App = () =>  {
  const [winner, setWinner] = useState(game.winner);
  const [board, setBoard] = useState(game.board);
  const [plays, setPlays] = useState(game.plays);

  const handleSquareClick = useCallback((squareIndex) => {
    game.fillSquare(squareIndex);
    setBoard(game.board);
    setWinner(game.winner);
    setPlays(game.plays);
  }, [setBoard, setWinner]);

  return (
  <Container>
    <Board squares={board} handleSquareClick={handleSquareClick}/>
    <p>
      {winner
        ? `Winner: ${winner}`
        : (plays < maxPlays ? 'Click a square!' : 'No winner')
      }
    </p>
  </Container>
)};

export default App;
