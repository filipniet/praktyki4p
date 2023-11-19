const books = [
    {title: 'Total loss 100', pages: 600, genre: 'fantasy', rating: 7},
    {title: 'Total enlightenment', pages: 250, genre: 'romance', rating: 4},
    {title: 'Big loss', pages: 400, genre: 'fantasy', rating: 2},
    {title: 'Tenth Joy', pages: 32, genre: 'action', rating: 9},
    {title: 'Quickfix number 4', pages: 15, genre: 'fantasy', rating: 8},
    {title: 'World Ender 3', pages: 199, genre: 'fantasy', rating: 1},
    {title: 'Paranormal', pages: 200, genre: 'thriller', rating: 5},
];


function countLetters(title) {
    const x = title.replace(/\s/g, '');
    return x.length;
}

const filteredBooks1 = books.filter(book => book.pages % 2 === 0 && book.genre.endsWith('y'));
const letterCount = filteredBooks1.map(book => countLetters(book.title));
const totalLetterCount = letterCount.reduce((acc, count) => acc + count, 0);
console.log(`Ilość liter: ${totalLetterCount}`);

function isOdd(number) {return number % 2 !== 0;}
function hasNumber(title) {return /\d/.test(title);}
const filteredBooks2 = books.filter(book => book.rating > 5 && isOdd(book.pages) && hasNumber(book.title));
const booksCount = filteredBooks2.length;
console.log(`Ilość książek: ${positiveRatingCount}`);

const sortedBooks = books.sort((a, b) => b.title.length - a.title.length);
const secondLongest = sortedBooks[1].title;
console.log(`Drugi najdłuższy tytuł: ${secondLongest}`);