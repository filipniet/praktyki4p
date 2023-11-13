function palindrome(str) {
    const word = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const reverse = word.split('').reverse().join('');
    return word === reverse;
}

function isitpalindrome() {
    const word = document.getElementById('slowo').value;

    if (palindrome(word)) {
        wynik.innerHTML = 'Slowo to palindrom';
    } else {
        wynik.innerHTML = 'Slowo to nie palindrom';
    }

    // Prevent the form from actually submitting
    return false;
}