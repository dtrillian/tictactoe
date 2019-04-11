import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const initialState = {
  playerTurn: 'O',
  gameStatus: 'play',
  movesNumber: 0,
  grid: ['', '', '', '', '', '', '', '', ''],
  warning: '',
  matchesNumber: 0,
  wins: {
    O: 0,
    X: 0,
  },
}

export const getters = {
  playerTurn: state => state.playerTurn,
  gameStatus: state => state.gameStatus,
  movesNumber: state => state.movesNumber,
  grid: state => state.grid,
  warning: state => state.warning,
  matchesNumber: state => state.matchesNumber,
  wins: state => state.wins,
}

export const actions = {
  PLACE_PAWN({ commit }, cellNumber) {
    commit('SET_PAWN', cellNumber)
  },
}

export const mutations = {
  SET_PAWN(state, cellNumber) {
    if (state.grid[cellNumber] === '') {
      state.grid[cellNumber] = state.playerTurn
    }
  },
}

Vue.config.devtools = true

export default new Vuex.Store({
  state: initialState,
  getters,
  actions,
  mutations,
})
