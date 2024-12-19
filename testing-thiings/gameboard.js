const WINNING_COMBINATIONS = [
  [
    { row: 0, column: 0 },
    { row: 0, column: 1 },
    { row: 0, column: 2 },
  ],
  [
    { row: 1, column: 0 },
    { row: 1, column: 1 },
    { row: 1, column: 2 },
  ],
  [
    { row: 2, column: 0 },
    { row: 2, column: 1 },
    { row: 2, column: 2 },
  ],
  [
    { row: 0, column: 0 },
    { row: 1, column: 0 },
    { row: 2, column: 0 },
  ],
  [
    { row: 0, column: 1 },
    { row: 1, column: 1 },
    { row: 2, column: 1 },
  ],
  [
    { row: 0, column: 2 },
    { row: 1, column: 2 },
    { row: 2, column: 2 },
  ],
  [
    { row: 0, column: 0 },
    { row: 1, column: 1 },
    { row: 2, column: 2 },
  ],
  [
    { row: 0, column: 2 },
    { row: 1, column: 1 },
    { row: 2, column: 0 },
  ],
];

const initialGameBoard = [
  ['a', 'b', 'c'],
  ['d', 'e', 'f'],
  ['g', 'h', 'i'],
];

for (const comb of WINNING_COMBINATIONS) {
    // console.log(comb[2].row, comb[2].column)
    const firstSquareSybol = initialGameBoard[comb[0].row][comb[0].column]
    console.log(firstSquareSybol);
    const secondSquareSymbol = initialGameBoard[comb[1].row][comb[1].column]
    console.log(secondSquareSymbol);
    const thirdSquareSymbol = initialGameBoard[comb[2].row][comb[2].column]
    console.log(thirdSquareSymbol);
    console.log('\n')
}
