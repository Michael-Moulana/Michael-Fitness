const numbers = {
    0: '۰',
    1: '۱',
    2: '۲',
    3: '۳',
    4: '۴',
    5: '۵',
    6: '۶',
    7: '۷',
    8: '۸',
    9: '۹'
}

exports.toPersianNumbers = (input) => {
    // convert input to String, split by empty space(the result will be an array)
    // map the array with number
    // if the number (each element of the resulted array) exists in the object 'numbers', return the number, else return the number itself and join it with the empty space
    return String(input).split('').map(number => numbers[number] ? numbers[number] : number).join('')

}