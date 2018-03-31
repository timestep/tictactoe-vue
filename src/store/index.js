export const state = {
  board: [[0, 0, 0], [0, 0, 0], [0, 0, 0]],
};

export const mutations = {
  change(state, x, y, value) {
    state['board'][x][y] = value;
  },
};

export const actions = {
  trigger({ commit }, x, y, value) {
    commit('change', x, y, value);
  },
};
