function multiplyAsync(x, y) {
    return new Promise((resolve, reject) => {
        if (typeof x == 'number' && typeof y == 'number') {
            resolve(x * y);
        } else {
           reject(new Error('Zmienne muszą być liczbami.'));
        }
    }); 
}
  
function printResult(result) {
    console.log('Wynik: ', result);
}


const text = "x";
const num1 = 8;
const num2 = 4;
  
multiplyAsync(num1, num2).then(printResult).catch(error => console.error('Error: ', error.message));
multiplyAsync(text, num2).then(printResult).catch(error => console.error('Error: ', error.message));
  