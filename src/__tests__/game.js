import {
  initialState,
  computeNewBoard,
  computeNewSymbol,
  canFill,
  checkSquaresForWinner,
  getRowSize,
  getColumn,
  getRow,
  checkColumnForWinner,
  checkRowForWinner,
  checkDiagonalsForWinner,
} from '../redux-flow/reducers/tic-tac-toe/domain/game';

describe('GAME', () => {
  describe('initialState', () => {
    let state;
    beforeEach(() => {
      state = initialState();
    });
    it('Should start with X playing, 0 plays and no winner', () => {
      expect(state).toHaveProperty('currentSymbol', 'X');
      expect(state).toHaveProperty('winner', null);
      expect(state).toHaveProperty('plays', 0);
    });

    it('Should have X and O symbols', () => {
      expect(state).toHaveProperty('symbols', expect.arrayContaining(['X', 'O']));
    });

    it('Should create a 3x3 board with 9 maximum plays if no parameter is passed', () => {
      expect(state).toHaveProperty('board');
      expect(state).toHaveProperty('maxPlays', 9);
      expect(state.board).toHaveLength(9);
    });

    it('Should create a NxN board with N² maximum plays if N is passed as a parameter', () => {
      const state4 = initialState(4);
      expect(state4).toHaveProperty('board');
      expect(state4).toHaveProperty('maxPlays', 4 * 4);
      expect(state4.board).toHaveLength(4 * 4);

      const state100 = initialState(100);
      expect(state100).toHaveProperty('board');
      expect(state100).toHaveProperty('maxPlays', 100 * 100);
      expect(state100.board).toHaveLength(100 * 100);
    });
  });

  describe('computeNewBoard', () => {
    it('Should compute a new board correctly', () => {
      const board = ['', '', 'X'];
      const newBoard = computeNewBoard({
        board,
        currentSymbol: 'O',
        squareIndex: 1,
      });
      expect(newBoard).toEqual(['', 'O', 'X']);
    });
  });

  describe('computeNewSymbol', () => {
    it('Should change from X to O after first play', () => {
      const symbols = ['X', 'O'];
      const symbol = computeNewSymbol({ plays: 1, symbols });
      expect(symbol).toBe('O');
    });
    it('Should change from O to X after second play', () => {
      const symbols = ['X', 'O'];
      const symbol = computeNewSymbol({ plays: 2, symbols });
      expect(symbol).toBe('X');
    });
  });

  describe('canFill', () => {
    const board = ['', '', 'X'];
    it('Should return true for unfilled square and no winner', () => {
      expect(canFill({
        board,
        squareIndex: 0,
        winner: null,
      })).toBe(true);
    });
    it('Should return false for filled square and no winner', () => {
      expect(canFill({
        board,
        squareIndex: 2,
        winner: null,
      })).toBe(false);
    });
    it('Should return false for filled square and some winner', () => {
      expect(canFill({
        board,
        squareIndex: 2,
        winner: 'Some',
      })).toBe(false);
    });
    it('Should return false for unfilled square and some winner', () => {
      expect(canFill({
        board,
        squareIndex: 0,
        winner: 'Some',
      })).toBe(false);
    });
  });

  describe('checkSquaresForWinner', () => {
    const symbol = 'D';
    const otherSymbol = 'N';
    let squares;
    beforeEach(() => {
      squares = new Array(10).fill(symbol);
    });

    it('Should return the symbol for a winning sequence of squares', () => {
      expect(checkSquaresForWinner(squares)).toBe(symbol);
    });
    it('Should return false for a non-winning sequence of squares', () => {
      squares[2] = otherSymbol;
      expect(checkSquaresForWinner(squares)).toBe(false);
    });
  });

  describe('getRowSize', () => {
    it('Should return the correct row size for a given board', () => {
      const rowSize = 3;
      const board = new Array(rowSize ** 2).fill();
      expect(getRowSize(board)).toBe(rowSize);
    });
  });

  describe('getColumn', () => {
    it('Should get the correct column', () => {
      const column = 2;
      const row = 3;
      const rowSize = 10;
      const board = new Array(rowSize ** 2).fill();
      const squareIndex = row * rowSize + column;
      expect(getColumn(squareIndex, board)).toBe(column);
    });
  });

  describe('getRow', () => {
    it('Should get the correct row', () => {
      const column = 1;
      const row = 4;
      const rowSize = 6;
      const board = new Array(rowSize ** 2).fill();
      const squareIndex = row * rowSize + column;
      expect(getRow(squareIndex, board)).toBe(row);
    });
  });

  describe('checkColumnForWinner', () => {
    const board = [
      'X', '',
      'X', 'X',
    ];

    it('Should return false for column without winner', () => {
      expect(checkColumnForWinner(board, 1)).toBe(false);
    });
    it('Should return the symbol for column with winner', () => {
      expect(checkColumnForWinner(board, 0)).toBe('X');
    });
  });

  describe('checkRowForWinner', () => {
    const board = [
      'X', '',
      'X', 'X',
    ];

    it('Should return the symbol for row without winner', () => {
      expect(checkRowForWinner(board, 1)).toBe('X');
    });
    it('Should return false for row with winner', () => {
      expect(checkRowForWinner(board, 0)).toBe(false);
    });
  });

  describe('checkDiagonalsForWinner', () => {
    it('Should return the symbol for diagonals with winner', () => {
      const board = [
        'X', '',
        'X', 'X',
      ];
      expect(checkDiagonalsForWinner(board)).toBe('X');
    });
    it('Should return false for diagonals without winner', () => {
      const board = [
        'X', '',
        'X', '',
      ];
      expect(checkDiagonalsForWinner(board)).toBe(false);
    });
  });
});
