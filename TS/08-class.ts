// Arrays
// * const lenguages = [] // que siempre este vacio
const lenguages: (string | number)[] = [];
const lenguages2: Array<string> = []; //TODO: otra forma de declarar el array con el type

lenguages.push('JavaScript')
lenguages.push('Python')

type cellValue = 'X' | 'O' | '';
type GameBoard = [
    [cellValue, cellValue, cellValue],
    [cellValue, cellValue, cellValue],
    [cellValue, cellValue, cellValue],
]

const gameBoard: GameBoard = [
    ['X', 'O', 'X'],
    ['X', 'O', 'X'],
    ['X', 'O', 'X']
]