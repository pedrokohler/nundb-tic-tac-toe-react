import styled from 'styled-components';
import Square from './Square';

const Container = styled.div`
    height: 300px;
    width: 300px;

    display: flex;
    flex-direction: row;
    align-items: space-around;
    justify-content: center;
    flex-wrap: wrap;
`;

const Board = ({ squares, handleSquareClick }) => {

    return (
        <Container>
            {squares.map((symbol, i) => (
                <Square
                    key={i}
                    onClick={() => { handleSquareClick(i); }}
                >
                    {symbol}
                </Square>
            ))}
        </Container>
    )
}

export default Board;