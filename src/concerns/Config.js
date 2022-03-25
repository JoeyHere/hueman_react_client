export const BLOCKS = {
  player: 1,
  red: 2,
  blue: 3,
  yellow: 4,
  green: 5,
  purple: 6,
  orange: 7,
  brown: 8,
  wall: 10,
  floor: 9,
  flash: 11,
  combineGreen: 12,
  combinePurple: 13,
  combineOrange: 14,
  bomb: 15,
  explode: 16
}

export const SAMEHASH = {
  [`${BLOCKS.green}`]: BLOCKS.combineGreen,
  [`${BLOCKS.purple}`]: BLOCKS.combinePurple,
  [`${BLOCKS.orange}`]: BLOCKS.combineOrange,
  [`${BLOCKS.combineGreen}`]: BLOCKS.green,
  [`${BLOCKS.combineOrange}`]: BLOCKS.orange,
  [`${BLOCKS.combinePurple}`]: BLOCKS.purple
}

export const COMBINEHASH = {
  [`${BLOCKS.red}`]: {
    [`${BLOCKS.blue}`]: BLOCKS.combinePurple,
    [`${BLOCKS.yellow}`]: BLOCKS.combineOrange,
    [`${BLOCKS.bomb}`]: BLOCKS.explode
  },
  [`${BLOCKS.blue}`]: {
    [`${BLOCKS.red}`]: BLOCKS.combinePurple,
    [`${BLOCKS.yellow}`]: BLOCKS.combineGreen,
    [`${BLOCKS.bomb}`]: BLOCKS.explode
  },
  [`${BLOCKS.yellow}`]: {
    [`${BLOCKS.red}`]: BLOCKS.combineOrange,
    [`${BLOCKS.blue}`]: BLOCKS.combineGreen,
    [`${BLOCKS.bomb}`]: BLOCKS.explode
  },
  [`${BLOCKS.green}`]: {
    [`${BLOCKS.bomb}`]: BLOCKS.explode
  },
  [`${BLOCKS.orange}`]: {
    [`${BLOCKS.bomb}`]: BLOCKS.explode
  },
  [`${BLOCKS.purple}`]: {
    [`${BLOCKS.bomb}`]: BLOCKS.explode
  },
  [`${BLOCKS.bomb}`]: {
    [`${BLOCKS.red}`]: BLOCKS.explode,
    [`${BLOCKS.blue}`]: BLOCKS.explode,
    [`${BLOCKS.yellow}`]: BLOCKS.explode,
    [`${BLOCKS.green}`]: BLOCKS.explode,
    [`${BLOCKS.purple}`]: BLOCKS.explode,
    [`${BLOCKS.orange}`]: BLOCKS.explode,
    [`${BLOCKS.wall}`]: BLOCKS.explode,
    [`${BLOCKS.bomb}`]: BLOCKS.explode
  }
}

export const BLOCKCLASSES = {
  [`${BLOCKS.player}`]: "playerBlock",
  [`${BLOCKS.red}`]: "redBlock",
  [`${BLOCKS.blue}`]: "blueBlock",
  [`${BLOCKS.yellow}`]: "yellowBlock",
  [`${BLOCKS.green}`]: "greenBlock",
  [`${BLOCKS.purple}`]: "purpleBlock",
  [`${BLOCKS.orange}`]: "orangeBlock",
  [`${BLOCKS.brown}`]: "brownBlock",
  [`${BLOCKS.wall}`]: "wallBlock",
  [`${BLOCKS.floor}`]: "floorBlock",
  [`${BLOCKS.flash}`]: "flashBlock",
  [`${BLOCKS.combineGreen}`]: "combineGreenBlock",
  [`${BLOCKS.combinePurple}`]: "combinePurpleBlock",
  [`${BLOCKS.combineOrange}`]: "combineOrangeBlock",
  [`${BLOCKS.bomb}`]: "bombBlock",
  [`${BLOCKS.explode}`]: "explodeBlock"
}

export const BLOCKCOLORS = {
  [`${BLOCKS.player}`]: "rgb(250, 242, 242)",
  [`${BLOCKS.red}`]: "rgb(223, 85, 85)",
  [`${BLOCKS.blue}`]: "rgb(81, 81, 243)",
  [`${BLOCKS.yellow}`]: "rgb(236, 236, 53)",
  [`${BLOCKS.green}`]: "rgb(100, 192, 100)",
  [`${BLOCKS.purple}`]: "rgb(170, 101, 170)",
  [`${BLOCKS.orange}`]: "rgb(243, 173, 42)",
  [`${BLOCKS.brown}`]: "rgb(165, 129, 62)",
  [`${BLOCKS.wall}`]: "rgb(180, 175, 175)",
  [`${BLOCKS.floor}`]: "rgb(206, 206, 206)",
  [`${BLOCKS.flash}`]: "rgb(206, 206, 206)",
  [`${BLOCKS.combineGreen}`]: "rgb(206, 206, 206)",
  [`${BLOCKS.combinePurple}`]: "rgb(206, 206, 206)",
  [`${BLOCKS.combineOrange}`]: "rgb(206, 206, 206)",
  [`${BLOCKS.bomb}`]: "rgb(109, 109, 122)",
  [`${BLOCKS.explode}`]: "rgb(206, 206, 206)"
}

export const paletteColors = [
  [
    BLOCKS.red,
    BLOCKS.blue,
    BLOCKS.yellow,
    BLOCKS.green,
    BLOCKS.purple,
    BLOCKS.orange,
    BLOCKS.brown,
    BLOCKS.bomb,
    BLOCKS.wall,
    BLOCKS.floor,
    BLOCKS.player
  ]
]

export const blankBoards = {
  medium: [
    [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
    [10, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 10],
    [10, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 10],
    [10, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 10],
    [10, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 10],
    [10, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 10],
    [10, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 10],
    [10, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 10],
    [10, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 10],
    [10, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 10],
    [10, 9, 9, 9, 9, 9, 9, 9, 9, 9, 1, 10],
    [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]
  ],
  small: [
    [10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
    [10, 9, 9, 9, 9, 9, 9, 9, 9, 10],
    [10, 9, 9, 9, 9, 9, 9, 9, 9, 10],
    [10, 9, 9, 9, 9, 9, 9, 9, 9, 10],
    [10, 9, 9, 9, 9, 9, 9, 9, 9, 10],
    [10, 9, 9, 9, 9, 9, 9, 9, 9, 10],
    [10, 9, 9, 9, 9, 9, 9, 9, 9, 10],
    [10, 9, 9, 9, 9, 9, 9, 9, 9, 10],
    [10, 9, 9, 9, 9, 9, 9, 9, 1, 10],
    [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]
  ],
  large: [
    [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
    [10, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 10],
    [10, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 10],
    [10, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 10],
    [10, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 10],
    [10, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 10],
    [10, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 10],
    [10, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 10],
    [10, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 10],
    [10, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 10],
    [10, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 10],
    [10, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 10],
    [10, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 1, 10],
    [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]
  ]
}
