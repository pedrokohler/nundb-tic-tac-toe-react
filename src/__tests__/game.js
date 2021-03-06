import {
  initialState,
  symbols,
  tryToFillSquare,
  join,
} from '../domain/game';

describe('GAME', () => {
  describe('Initial state', () => {
    it('Should have the correct properties and values', () => {
      const state = initialState();

      expect(state).toHaveProperty('X', null);
      expect(state).toHaveProperty('O', null);
      expect(state).toHaveProperty('winner', null);
      expect(state).toHaveProperty('maxPlays', 9);
      expect(state).toHaveProperty('board', new Array(3).fill([]).map(() => new Array(3).fill('')));
      expect(state).toHaveProperty('nextSymbol', 'X');
      expect(state).toHaveProperty('plays', 0);
    });
  });
  describe('Join game', () => {
    it('Should add the player to the players list when the player joins the game', () => {
      const state = initialState();
      expect(join({ state, player: 'Peter' })).toEqual({
        ...state,
        X: 'Peter',
      });
    });
    it('Should allow up to two players in a game', () => {
      const state = initialState();
      const stateWithOnePlayer = join({ state, player: 'Peter' });
      const stateWithTwoPlayers = join({ state: stateWithOnePlayer, player: 'Paul' });
      expect(stateWithTwoPlayers).toEqual({
        ...state,
        X: 'Peter',
        O: 'Paul',
      });
    });
    it('Should not allow more than two players in a game', () => {
      const state = initialState();
      const stateWithOnePlayer = join({ state, player: 'Peter' });
      const stateWithTwoPlayers = join({ state: stateWithOnePlayer, player: 'Paul' });
      const stateWithStillTwoPlayers = join({ state: stateWithTwoPlayers, player: 'João' });
      expect(stateWithStillTwoPlayers).toEqual({
        ...state,
        X: 'Peter',
        O: 'Paul',
      });
    });
    it('Should not allow null as a player', () => {
      const state = initialState();
      const stateWithoutPlayers = join({ state, player: null });
      expect(stateWithoutPlayers).toEqual({
        ...state,
      });
    });
    it('Should not allow including the same player twice', () => {
      const state = initialState();
      const stateWithOnePlayer = join({ state, player: 'Peter' });
      const stateWithStillOnePlayer = join({ state: stateWithOnePlayer, player: 'Peter' });
      expect(stateWithStillOnePlayer).toEqual({
        ...state,
        X: 'Peter',
      });
    });
  });
  describe('Try to fill square', () => {
    it('Should not allow a no player to play', () => {
      const state = initialState();
      state.X = 'Peter';
      const sameStateAsBefore = tryToFillSquare({
        state, row: 0, column: 0, player: null,
      });
      expect(sameStateAsBefore.board).toEqual([
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
      ]);
    });
    it('Should update the next symbol after a new square is filled', () => {
      const state = initialState();
      state.X = 'Peter';
      state.O = 'Paul';
      const stateAfterSquareIsFilled = tryToFillSquare({
        state, row: 0, column: 0, player: 'Peter',
      });
      expect(stateAfterSquareIsFilled.nextSymbol).toBe(symbols[1]);
    });
    it('Should increment the amount of plays after a square is successfully filled', () => {
      const state = initialState();
      state.X = 'Peter';
      state.O = 'Paul';
      const stateAfterSquareIsFilled = tryToFillSquare({
        state, row: 0, column: 0, player: 'Peter',
      });
      expect(stateAfterSquareIsFilled.plays).toBe(1);
    });
    it('Should add the correct symbol to the board after a square is successfully filled', () => {
      const state = initialState();
      state.X = 'Peter';
      state.O = 'Paul';
      const stateAfterSquareIsFilled = tryToFillSquare({
        state, row: 0, column: 0, player: 'Peter',
      });
      expect(stateAfterSquareIsFilled.board).toEqual([
        [symbols[0], '', ''],
        ['', '', ''],
        ['', '', ''],
      ]);
    });
    it('Should not allow the wrong player to play', () => {
      const state = initialState();
      state.X = 'Peter';
      state.O = 'Paul';
      const stateAfterSquareIsFilled = tryToFillSquare({
        state, row: 0, column: 0, player: 'Paul',
      });
      expect(stateAfterSquareIsFilled.board).toEqual([
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
      ]);
    });
    it('Should not allow a previously filled square to be filled again', () => {
      const state = initialState();
      state.X = 'Peter';
      state.O = 'Paul';
      const stateAfterFirstSquareIsFilled = tryToFillSquare({
        state, row: 0, column: 0, player: 'Peter',
      });
      const stateAfterAttemptingToFillingSameSquare = tryToFillSquare({
        state: stateAfterFirstSquareIsFilled, row: 0, column: 0, player: 'Paul',
      });
      expect(stateAfterAttemptingToFillingSameSquare.board).toEqual([
        [symbols[0], '', ''],
        ['', '', ''],
        ['', '', ''],
      ]);
    });
    it('Should have winner === null while there is no winner', () => {
      const state0 = initialState();
      state0.X = 'Peter';
      state0.O = 'Paul';
      const state1 = tryToFillSquare({
        state: state0, row: 0, column: 0, player: 'Peter',
      });
      expect(state1.winner).toBe(undefined);
    });
    it('Should calculate the winner in a row', () => {
      const state0 = initialState();
      state0.X = 'Peter';
      state0.O = 'Paul';
      const state1 = tryToFillSquare({
        state: state0, row: 0, column: 0, player: 'Peter',
      });
      const state2 = tryToFillSquare({
        state: state1, row: 1, column: 0, player: 'Paul',
      });
      const state3 = tryToFillSquare({
        state: state2, row: 0, column: 1, player: 'Peter',
      });
      const state4 = tryToFillSquare({
        state: state3, row: 1, column: 1, player: 'Paul',
      });
      const state5 = tryToFillSquare({
        state: state4, row: 0, column: 2, player: 'Peter',
      });
      expect(state5.board).toEqual([
        [symbols[0], symbols[0], symbols[0]],
        [symbols[1], symbols[1], ''],
        ['', '', ''],
      ]);
      expect(state5.winner).toBe('Peter');
    });
    it('Should calculate the winner in a column', () => {
      const state0 = initialState();
      state0.X = 'Peter';
      state0.O = 'Paul';
      const state1 = tryToFillSquare({
        state: state0, row: 0, column: 0, player: 'Peter',
      });
      const state2 = tryToFillSquare({
        state: state1, row: 0, column: 1, player: 'Paul',
      });
      const state3 = tryToFillSquare({
        state: state2, row: 1, column: 0, player: 'Peter',
      });
      const state4 = tryToFillSquare({
        state: state3, row: 1, column: 1, player: 'Paul',
      });
      const state5 = tryToFillSquare({
        state: state4, row: 2, column: 0, player: 'Peter',
      });
      expect(state5.board).toEqual([
        [symbols[0], symbols[1], ''],
        [symbols[0], symbols[1], ''],
        [symbols[0], '', ''],
      ]);
      expect(state5.winner).toBe('Peter');
    });
    it('Should calculate the winner in the descending diagonal', () => {
      const state0 = initialState();
      state0.X = 'Peter';
      state0.O = 'Paul';
      const state1 = tryToFillSquare({
        state: state0, row: 0, column: 0, player: 'Peter',
      });
      const state2 = tryToFillSquare({
        state: state1, row: 0, column: 1, player: 'Paul',
      });
      const state3 = tryToFillSquare({
        state: state2, row: 1, column: 1, player: 'Peter',
      });
      const state4 = tryToFillSquare({
        state: state3, row: 1, column: 2, player: 'Paul',
      });
      const state5 = tryToFillSquare({
        state: state4, row: 2, column: 2, player: 'Peter',
      });
      expect(state5.board).toEqual([
        [symbols[0], symbols[1], ''],
        ['', symbols[0], symbols[1]],
        ['', '', symbols[0]],
      ]);
      expect(state5.winner).toBe('Peter');
    });
    it('Should calculate the winner in the ascending diagonal', () => {
      const state0 = initialState();
      state0.X = 'Peter';
      state0.O = 'Paul';
      const state1 = tryToFillSquare({
        state: state0, row: 0, column: 0, player: 'Peter',
      });
      const state2 = tryToFillSquare({
        state: state1, row: 0, column: 2, player: 'Paul',
      });
      const state3 = tryToFillSquare({
        state: state2, row: 1, column: 2, player: 'Peter',
      });
      const state4 = tryToFillSquare({
        state: state3, row: 1, column: 1, player: 'Paul',
      });
      const state5 = tryToFillSquare({
        state: state4, row: 2, column: 2, player: 'Peter',
      });
      const state6 = tryToFillSquare({
        state: state5, row: 2, column: 0, player: 'Paul',
      });
      expect(state6.board).toEqual([
        [symbols[0], '', symbols[1]],
        ['', symbols[1], symbols[0]],
        [symbols[1], '', symbols[0]],
      ]);
      expect(state6.winner).toBe('Paul');
    });
    it('Should not allow another move after a winner already exists', () => {
      const state0 = initialState();
      state0.X = 'Peter';
      state0.O = 'Paul';
      const state1 = tryToFillSquare({
        state: state0, row: 0, column: 0, player: 'Peter',
      });
      const state2 = tryToFillSquare({
        state: state1, row: 0, column: 2, player: 'Paul',
      });
      const state3 = tryToFillSquare({
        state: state2, row: 1, column: 2, player: 'Peter',
      });
      const state4 = tryToFillSquare({
        state: state3, row: 1, column: 1, player: 'Paul',
      });
      const state5 = tryToFillSquare({
        state: state4, row: 2, column: 2, player: 'Peter',
      });
      const state6 = tryToFillSquare({
        state: state5, row: 2, column: 0, player: 'Paul',
      });
      const state7 = tryToFillSquare({
        state: state6, row: 2, column: 1, player: 'Peter',
      });
      expect(state7.board).toEqual([
        [symbols[0], '', symbols[1]],
        ['', symbols[1], symbols[0]],
        [symbols[1], '', symbols[0]],
      ]);
      expect(state6.winner).toBe('Paul');
    });
  });
});
