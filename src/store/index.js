import { clone } from 'ramda';

export const state = {
  board: [[0, 0, 0], [0, 0, 0], [0, 0, 0]],
  winner: 'none',
};

export const mutations = {
  change(state, { x, y, value }) {
    // theres a bug where it doesnt really map in the data, but ui shows it correctly
    const { board, winner } = evaluateNewBoard(state.board, x, y, value);
    state.board = board;
    state.winner = winner;
  },
};

export const actions = {
  trigger({ commit }, payload) {
    commit('change', payload);
  },
};

export const getters = {
  getCardState: state => (x, y) => {
    return state.board[x][y];
  },
  getWinner: state => state.winner,
};

//minmax algorithm is possible here. I suppose thats cheating though
const evaluateNewBoard = (board, x, y, value) => {
  let _board = clone(board);
  let winner = 'none';
  if (_board[x][y] !== 0) {
    return _board;
  }

  _board[x][y] = value; //set player choice

  // check board win state
  if (!winCondition(_board, 1)) {
    // computer turn
    // _board = aiPlay(_board); // if no win => computer play
    // if (winCondition(_board, 2)) {
    //   // check board win state
    //   winner = 'computer';
    // }
  } else {
    winner = 'player'; // if win game over => player win
  }

  return {
    board: _board,
    winner,
  };
};

/*
  00,01,02
  10,11,12,
  20,21,22
*/

const aiPlay = board => {};

const winCondition = (board, player) => {
  if (
    (board[0][0] == player && board[0][1] == player && board[0][2] == player) ||
    (board[1][0] == player && board[1][1] == player && board[1][2] == player) ||
    (board[2][0] == player && board[2][1] == player && board[2][2] == player) ||
    (board[0][0] == player && board[1][0] == player && board[2][0] == player) ||
    (board[0][1] == player && board[1][1] == player && board[2][1] == player) ||
    (board[0][2] == player && board[1][2] == player && board[2][2] == player) ||
    (board[0][0] == player && board[1][1] == player && board[2][2] == player) ||
    (board[0][2] == player && board[1][1] == player && board[2][0] == player)
  ) {
    return true;
  }
  return false;
};
