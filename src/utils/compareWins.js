/* eslint-disable no-undef */
const compareWins = (grid, winCondition) => {
  const areEquals = function() {
    const len = arguments.length
    for (let i = 1; i < len; i++) {
      if (arguments[i] === null || arguments[i] !== arguments[i - 1]) {
        return false
      }
    }
    return true
  }

  if (areEquals(grid[winCondition[0] - 1], grid[winCondition[1] - 1], grid[winCondition[2] - 1])) {
    return true
  }

  return false
}

export default compareWins
