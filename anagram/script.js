function isitAnagram(a, b) {
            const cleanA = a.replace(/[^a-zA-Z]/g, '').toLowerCase();
            const cleanB = b.replace(/[^a-zA-Z]/g, '').toLowerCase();
            const sortA = cleanA.split('').sort().join('');
            const sortB = cleanB.split('').sort().join('');
            return sortA === sortB;
        }

function checkAnagram() {
    const a = document.getElementById('a').value;
    const b = document.getElementById('b').value;

    if (isitAnagram(a, b)) {
        wynik.innerHTML = 'Tak, slowa to anagram';
    } else {
        wynik.innerHTML = 'nie, slowa nie są anagramem';
    }
    return false;
}