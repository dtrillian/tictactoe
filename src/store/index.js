import Vue from 'vue'
import Vuex from 'vuex'
import compareWins from '../utils/compareWins'

Vue.use(Vuex)

const players = ['X', '0']
const winConditions = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]]

export const initialState = {
  currentPlayer: players[0],
  gameStatus: 'play',
  movesNumber: 0,
  grid: ['', '', '', '', '', '', '', '', ''],
  warning: '',
  matchesNumber: 0,
  gameWon: false,
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
  gameWon: state => state.gameWon,
  wins: state => state.wins,
}

export const actions = {
  PLACE_PAWN({ commit, state }, cellNumber) {
    commit('SET_PAWN', cellNumber)
    if (state.movesNumber !== 9) {
      commit('CHECK_FOR_WIN')
    } else {
      commit('WARNING_DRAW')
    }
    commit('NEXT_PLAYER_TURN')
  },
  RESET_GAME({ commit }) {
    commit('RESET_GAME')
  },
}

export const mutations = {
  SET_PAWN(state, cellNumber) {
    if (state.grid[cellNumber] === '') {
      state.grid[cellNumber] = state.currentPlayer
    }
    state.movesNumber += 1
  },
  NEXT_PLAYER_TURN(state) {
    state.currentPlayer === 'X' ? (state.currentPlayer = 'O') : (state.currentPlayer = 'X')
  },
  // eslint-disable-next-line no-unused-vars
  RESET_GAME(state) {
    state = { ...initialState, matchesNumber: state.matchesNumber, wins: state.wins }
  },
  CHECK_FOR_WIN(state) {
    winConditions.forEach(winCondition => {
      if (compareWins(state.grid, winCondition)) {
        state.gameWon = true
        state.wins[state.currentPlayer] += 1
      }
    })
  },
  WARNING_DRAW(state) {
    state.warning = 'Draw!'
  },
}

Vue.config.devtools = true

export default new Vuex.Store({
  state: initialState,
  getters,
  actions,
  mutations,
})
