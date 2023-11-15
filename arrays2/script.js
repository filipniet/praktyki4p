const arr1 = ["Anna", "Maria"];
const arr2 = ["Adam", "Marek", "Bartek", "Tomek"];
const numbers = [1, 2, 3, 4, 5];

const concat = arr1.concat(arr2);

const reverseArray = concat.reverse();
const last = reverseArray[0];

const filterArray = (array, length) => array.filter(word => word.length === length);
const filter = filterArray(arr2, 5);

const sumaArray = (array) => array.reduce((wartosc, liczba) => wartosc + liczba, 0);
const suma = sumaArray(numbers);

const mapArray = (array) => array.map(number => Math.pow(number,2) + 3);
const map = mapArray(numbers);

const filterArrayNum = (array) => array.filter(number => number % 2 === 0);
const filterNum = filterArrayNum(numbers);

console.log(concat);
console.log(last);
console.log(filter);
console.log(suma);
console.log(map);
console.log(filterNum);
