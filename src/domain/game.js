class Game {
    constructor() {
        this.resetGame();
    }

    resetGame(){
        this.winner = null;
        this.rowSize = 3;
        this.board = new Array(this.rowSize ** 2).fill('');
        this.symbols = ['X', 'O'];
        this.currentSymbol = this.symbols[0];
        this.plays = 0;
    }

    fillSquare(squareIndex){
        if(this.canFill(squareIndex)){
            this.board = this.board.map((symbol, i) => squareIndex === i
                ? this.currentSymbol
                : symbol
            )
            this.plays += 1;
            this.currentSymbol = this.symbols[this.plays % this.symbols.length];
            this.checkForWinnerAndSet(squareIndex);
        }
    }

    canFill(squareIndex){
        return this.board[squareIndex] === '' && !this.winner;
    }

    getColumn(squareIndex){
        return squareIndex % this.rowSize;
    }

    getRow(squareIndex) {
        return Math.floor(squareIndex / this.rowSize);
    }

    checkForWinnerAndSet(squareIndex){
        const column = this.getColumn(squareIndex);
        const row = this.getRow(squareIndex);
        const winner = this.checkColumnForWinner(column)
            || this.checkRowForWinner(row)
            || this.checkDiagonalsForWinner();

        if (winner){
            this.winner = winner;
        }
    }

    checkSquaresForWinner(squares) {
        const targetSymbol = squares[0];
        if (squares.every((symbol) => symbol === targetSymbol)){
            return targetSymbol;
        }
        return false;
    }

    checkColumnForWinner(column){
        const squares = this.board.filter((_, i) => this.getColumn(i) === column);
        return this.checkSquaresForWinner(squares);
    }

    checkRowForWinner(row){
        const squares = this.board.filter((_, i) => this.getRow(i) === row);
        return this.checkSquaresForWinner(squares);
    }

    getDescendingDiagonalSquares() {
        const isDescendingDiagonalSquare = (row, column) => row === column;
        return this.board.filter((_, i) => {
            const row = this.getRow(i);
            const column = this.getColumn(i);
            return isDescendingDiagonalSquare(row, column);
        });
    }

    getAscendingDiagonalSquares(){
        const isAscendingDiagonalSquare = (row, column) => row + column === this.rowSize - 1;
        return this.board.filter((_, i) => {
            const row = this.getRow(i);
            const column = this.getColumn(i);
            return isAscendingDiagonalSquare(row, column);
        });
    }

    checkDiagonalsForWinner(){
        return this.checkSquaresForWinner(this.getDescendingDiagonalSquares())
            || this.checkSquaresForWinner(this.getAscendingDiagonalSquares());
    }
}

export default Game;