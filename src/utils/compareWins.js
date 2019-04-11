/* eslint-disable no-undef */
const compareWins = (grid, winCondition) => {
  const areEquals = function() {
    const len = arguments.length
    for (let i = 1; i < len; i++) {
      if (arguments[i] === null || arguments[i] !== arguments[i - 1] || arguments[i] === '') {
        return false
      }
    }
    return true
  }

  return areEquals(grid[winCondition[0] - 1], grid[winCondition[1] - 1], grid[winCondition[2] - 1]) ? true : false
}

export default compareWins
