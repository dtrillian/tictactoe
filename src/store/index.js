import Vue from 'vue'
import Vuex from 'vuex'
import compareWins from '../utils/compareWins'
import getFailedSnapshotTests from 'jest-util/build/getFailedSnapshotTests'

Vue.use(Vuex)

const players = ['X', '0']
const winConditions = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]]

export const initialState = {
  currentPlayer: players[0],
  gameStatus: 'play',
  movesNumber: 0,
  grid: ['', '', '', '', '', '', '', '', ''],
  toaster: false,
  matchesNumber: 0,
  gameDraw: false,
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
  toaster: state => state.toaster,
  gameDraw: state => state.gameDraw,
  matchesNumber: state => state.matchesNumber,
  gameWon: state => state.gameWon,
  wins: state => state.wins,
}

export const actions = {
  PLACE_PAWN({ commit, state }, cellNumber, value) {
    commit('SET_PAWN', cellNumber, value)

    if (state.movesNumber !== 9) {
      commit('CHECK_FOR_WIN')
    } else {
      commit('WARNING_DRAW')
    }

    if (state.gameWon || state.gameDraw) {
      commit('TOGGLE_TOASTER')
    }

    if (!state.gameWon && !state.gameDraw) {
      commit('NEXT_PLAYER_TURN')
    }
  },
  RESET_GAME({ commit }) {
    commit('NEXT_PLAYER_TURN')
    commit('RESET_GAME')
  },
  NEXT_GAME({ commit }) {
    commit('NEXT_PLAYER_TURN')
    commit('NEXT_GAME')
  },
  TOGGLE_TOASTER({ commit }) {
    commit('TOGGLE_TOASTER')
  },
}

export const mutations = {
  SET_PAWN(state, cellNumber, value) {
    if (state.grid[cellNumber] === '') {
      state.grid[cellNumber] = value
    }
    state.movesNumber += 1
  },
  NEXT_PLAYER_TURN(state) {
    state.currentPlayer === 'X' ? (state.currentPlayer = 'O') : (state.currentPlayer = 'X')
  },
  // eslint-disable-next-line no-unused-vars
  NEXT_GAME(state) {
    for (let i = 0; i < 9; i++) {
      Vue.set(state.grid, i, '')
    }
    state.movesNumber = 0
    state.gameWon = false
    state.gameDraw = false
    state.toaster = false
  },
  // eslint-disable-next-line no-unused-vars
  RESET_GAME(state) {
    for (let i = 0; i < 9; i++) {
      Vue.set(state.grid, i, '')
    }
    state.gameWon = false
    state.gameDraw = false
    state.wins.O = 0
    state.wins.X = 0
    state.matchesNumber = 0
    state.movesNumber = 0
    state.toaster = false
  },
  CHECK_FOR_WIN(state) {
    winConditions.forEach(winCondition => {
      if (compareWins(state.grid, winCondition)) {
        state.gameWon = true
        state.wins[state.currentPlayer] += 1
        state.matchesNumber += 1
      }
    })
  },
  WARNING_DRAW(state) {
    state.gameDraw = true
  },
  TOGGLE_TOASTER(state) {
    state.toaster = !state.toaster
  },
}

Vue.config.devtools = true

export default new Vuex.Store({
  state: initialState,
  getters,
  actions,
  mutations,
})
