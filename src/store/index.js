import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const initialState = {
  currentPlayer: 'O',
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
  currentPlayer: state => state.currentPlayer,
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
    commit('NEXT_PLAYER_TURN')
  },
}

export const mutations = {
  SET_PAWN(state, cellNumber) {
    if (state.grid[cellNumber] === '') {
      state.grid[cellNumber] = state.playerTurn
    }
  },
  NEXT_PLAYER_TURN(state) {
    state.currentPlayer === 'X' ? (state.currentPlayer = 'O') : (state.currentPlayer = 'X')
  },
}

Vue.config.devtools = true

export default new Vuex.Store({
  state: initialState,
  getters,
  actions,
  mutations,
})
