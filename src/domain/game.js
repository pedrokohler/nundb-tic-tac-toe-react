class Game {
  constructor(rowSize) {
    this.resetGame(rowSize);
  }

  resetGame(rowSize) {
    this.winner = null;
    this.rowSize = Math.max(3, Math.min(10, rowSize));
    this.board = new Array(this.rowSize ** 2).fill('');
    this.symbols = ['X', 'O'];
    [this.currentSymbol] = this.symbols;
    this.plays = 0;
  }

  fillSquare(squareIndex) {
    if (this.canFill(squareIndex)) {
      this.board = this.board.map((symbol, i) => (squareIndex === i
        ? this.currentSymbol
        : symbol));
      this.plays += 1;
      this.currentSymbol = this.symbols[this.plays % this.symbols.length];
      this.checkForWinnerAndSet(squareIndex);
    }
  }

  canFill(squareIndex) {
    return this.board[squareIndex] === '' && !this.winner;
  }

  checkForWinnerAndSet(squareIndex) {
    const column = this.getColumn(squareIndex);
    const row = this.getRow(squareIndex);
    const winner = this.checkColumnForWinner(column)
            || this.checkRowForWinner(row)
            || this.checkDiagonalsForWinner();

    if (winner) {
      this.winner = winner;
    }
  }

  checkColumnForWinner(column) {
    const squares = this.board.filter((_, i) => this.getColumn(i) === column);
    return this.checkSquaresForWinner(squares);
  }

  checkRowForWinner(row) {
    const squares = this.board.filter((_, i) => this.getRow(i) === row);
    return this.checkSquaresForWinner(squares);
  }

  checkDiagonalsForWinner() {
    return this.checkSquaresForWinner(this.getDescendingDiagonalSquares())
            || this.checkSquaresForWinner(this.getAscendingDiagonalSquares());
  }

  checkSquaresForWinner(squares) {
    const targetSymbol = squares[0];
    if (squares.every((symbol) => symbol === targetSymbol)) {
      return targetSymbol;
    }
    return false;
  }

  getDescendingDiagonalSquares() {
    const isDescendingDiagonalSquare = (row, column) => row === column;
    return this.board.filter((_, i) => {
      const row = this.getRow(i);
      const column = this.getColumn(i);
      return isDescendingDiagonalSquare(row, column);
    });
  }

  getAscendingDiagonalSquares() {
    const isAscendingDiagonalSquare = (row, column) => row + column === this.rowSize - 1;
    return this.board.filter((_, i) => {
      const row = this.getRow(i);
      const column = this.getColumn(i);
      return isAscendingDiagonalSquare(row, column);
    });
  }

  getColumn(squareIndex) {
    return squareIndex % this.rowSize;
  }

  getRow(squareIndex) {
    return Math.floor(squareIndex / this.rowSize);
  }
}

export default Game;
