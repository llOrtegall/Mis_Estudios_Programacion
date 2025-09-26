const fruits = ['apple', 'banana', 'orange']

const copy = [...fruits]

copy[1] = 'pear'

console.log(fruits)

console.log(copy)

// new method
const copy2 = fruits.with(1, 'aguacate')

console.log(copy2)


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let grouped = {
    impar: [],
    par: []
}

numbers.forEach(number => {
    if(number % 2 === 0){
        grouped.par.push(number)
    }else{
        grouped.impar.push(number)
    }
})

console.log(grouped)

const grouped2 = Object.groupBy(
    numbers,
    num => {
        if(num % 2 === 0) return 'par'
        return 'impar'
    }
)

console.log(grouped2)

const wizzards = ['Harry', 'Hermione', 'Ron', 'Severus', 'Hagrid']

const groupedWizzards = Object.groupBy(wizzards, wizzard => wizzard[0])

console.log(groupedWizzards)


const avangers = [
    { name: 'Spiderman', age: 16 },
    { name: 'Black Widow', age: 34 },
    { name: 'Hulk', age: 49 },
    { name: 'Thor', age: 1500 },
    { name: 'Iron Man', age: 40 },
    { name: 'Hawkeye', age: 34 },
    { name: 'Black Panther', age: 49 },
]

const groupedAvangers = Object.groupBy(avangers, avanger => avanger.age)

console.log(groupedAvangers)