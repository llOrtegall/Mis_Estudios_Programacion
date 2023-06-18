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

// type State = [string, (newName: string) => void]

// const [hero, setHero]: State = useState('thor')

type RGB = [number, number, number]
const rgb: RGB = [255, 255, 0,] // 0 - 255
