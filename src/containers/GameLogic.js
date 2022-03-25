import { BLOCKS, COMBINEHASH, SAMEHASH } from "../concerns/Config.js"

export const isSameBlock = (blockA, blockB) => {
  if (blockA === blockB) return true
  if (SAMEHASH[blockA] === blockB) return true
  return false
}

export const blocksCanCombine = (blockA, blockB) => {
  let combined = COMBINEHASH[blockA]?.[blockB]
  if (combined) return combined
  return false
}

export const removeFlashBlocks = array => {
  let newArray = array.map(row =>
    row.map(block => {
      let newBlock
      switch (block) {
        case BLOCKS.combineGreen:
          newBlock = SAMEHASH[block]
          break
        case BLOCKS.combineOrange:
          newBlock = SAMEHASH[block]
          break
        case BLOCKS.combinePurple:
          newBlock = SAMEHASH[block]
          break
        case BLOCKS.explode:
          newBlock = BLOCKS.floor
          break
        case BLOCKS.flash:
          newBlock = BLOCKS.floor
          break
        default:
          newBlock = block
      }
      return newBlock
    })
  )
  return newArray
}

export const getBlockFromBoard = (x, y, array) => array[y]?.[x]

export const checkArrayForThrees = inputArray => {
  let threesArray = inputArray.map((row, yi, array) => {
    return row.map((block, i) => {
      let prevBlock = getBlockFromBoard(i - 1, yi, array)
      let prevPrevBlock = getBlockFromBoard(i - 2, yi, array)
      let nextBlock = getBlockFromBoard(i + 1, yi, array)
      let nextNextBlock = getBlockFromBoard(i + 2, yi, array)
      let downBlock = getBlockFromBoard(i, yi + 1, array)
      let downDownBlock = getBlockFromBoard(i, yi + 2, array)
      let upBlock = getBlockFromBoard(i, yi - 1, array)
      let upUpBlock = getBlockFromBoard(i, yi - 2, array)
      if (block === BLOCKS.wall) return false
      if (block === BLOCKS.floor) return false
      if (block === BLOCKS.brown) return false
      if (block === BLOCKS.bomb) return false
      if (isSameBlock(nextBlock, block) && isSameBlock(nextNextBlock, block)) {
        return true
      }
      if (isSameBlock(prevBlock, block) && isSameBlock(nextBlock, block)) {
        return true
      }
      if (isSameBlock(prevBlock, block) && isSameBlock(prevPrevBlock, block)) {
        return true
      }
      if (isSameBlock(downBlock, block) && isSameBlock(downDownBlock, block)) {
        return true
      }
      if (isSameBlock(upBlock, block) && isSameBlock(downBlock, block)) {
        return true
      }
      if (isSameBlock(upBlock, block) && isSameBlock(upUpBlock, block)) {
        return true
      }
      return false
    })
  })
  return threesArray
}

export const moveBlocks = (array, dx, dy, board) => {
  array.reverse().forEach(block => {
    board[block.y + dy][block.x + dx] = board[block.y][block.x]
  })
  return board
}

export const getMovingBlocks = (
  oldBlock,
  newBlock,
  board,
  movingBlocks = []
) => {
  const dir = {
    dx: newBlock.x - oldBlock.x,
    dy: newBlock.y - oldBlock.y
  }
  if (!getBlockFromBoard(newBlock.x, newBlock.y, board)) return false
  if (getBlockFromBoard(newBlock.x, newBlock.y, board) === BLOCKS.wall)
    return false
  if (
    getBlockFromBoard(newBlock.x, newBlock.y, board) === BLOCKS.floor ||
    getBlockFromBoard(newBlock.x, newBlock.y, board) === BLOCKS.flash
  )
    return movingBlocks
  movingBlocks = [...movingBlocks, { x: newBlock.x, y: newBlock.y }]
  oldBlock = newBlock
  newBlock = { x: newBlock.x + dir.dx, y: newBlock.y + dir.dy }
  return getMovingBlocks(oldBlock, newBlock, board, movingBlocks)
}

export const combineBlocks = (
  blockA,
  dx,
  dy,
  movingBlocks = [],
  inputArray
) => {
  let blockB = { x: blockA.x + dx, y: blockA.y + dy }

  if (!getBlockFromBoard(blockA.x, blockA.y, inputArray)) {
    return false
  }
  if (!getBlockFromBoard(blockB.x, blockB.y, inputArray)) {
    return false
  }
  if (getBlockFromBoard(blockA.x, blockA.y, inputArray) === BLOCKS.wall) {
    return false
  }
  if (getBlockFromBoard(blockB.x, blockB.y, inputArray) === BLOCKS.wall) {
    return false
  }

  if (
    blocksCanCombine(
      getBlockFromBoard(blockA.x, blockA.y, inputArray),
      getBlockFromBoard(blockB.x, blockB.y, inputArray)
    )
  ) {
    let color = blocksCanCombine(
      getBlockFromBoard(blockA.x, blockA.y, inputArray),
      getBlockFromBoard(blockB.x, blockB.y, inputArray)
    )
    movingBlocks = [...movingBlocks, { x: blockA.x, y: blockA.y }]
    let newArray = moveBlocks(movingBlocks, dx, dy, inputArray)
    newArray[blockB.y][blockB.x] = color
    return newArray
  } else {
    movingBlocks = [...movingBlocks, { x: blockA.x, y: blockA.y }]
  }
  return combineBlocks(blockB, dx, dy, movingBlocks, inputArray)
}

export const updatePlayerOnBoard = (oldblock, newblock, array) => {
  array[newblock.y][newblock.x] = BLOCKS.player
  array[oldblock.y][oldblock.x] = BLOCKS.floor
  return array
}

export const getPlayerPositionFromBoard = array => {
  let columnIndex = undefined
  let rowIndex = array.findIndex(row =>
    row.find(block => block === BLOCKS.player)
  )
  if (rowIndex || rowIndex === 0) {
    columnIndex = array[rowIndex].findIndex(block => block === BLOCKS.player)
  }
  return { x: columnIndex, y: rowIndex }
}

export const clearBoardOfThrees = inputArray => {
  let threesArray = checkArrayForThrees(inputArray)

  let newArray = inputArray.map((row, rowi) => {
    return row.map((block, columni) =>
      threesArray[rowi][columni] ? BLOCKS.flash : block
    )
  })
  return newArray
}
