function checkarray() {
            const inputArray = document.getElementById('array').value;
            const array = inputArray.split(';');
            const trimArray = array.map(element => element.trim());

            if (trimArray.every(element => !isNaN(element))) {
                const numbers = Array.from(new Set(trimArray.map(Number)));
                const sortedNumbers = numbers.sort((a, b) => b - a);

                if (sortedNumbers.length >= 2) {
                    wynik.innerHTML = 'Drugi najwiekszy numer: ' + sortedNumbers[1];
                } else {
                    wynik.innerHTML= 'Nie ma drugiego najwiekszego numeru.';
                }
            } else if (trimArray.every(element => typeof element === 'string')) {
                const sortedStrings = trimArray.sort((a, b) => b.length - a.length);

                if (sortedStrings.length >= 2) {
                    wynik.innerHTML = 'Drugi nahdluzszy string: ' + sortedStrings[1];
                } else {
                    wynik.innerHTML= 'Nie ma drugiego najdluzszego stringu.';
                }
            }

            return false;
        }