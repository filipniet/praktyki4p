function calculate() {
    const n1 = parseFloat(document.getElementById("n1").value);
    const n2 = parseFloat(document.getElementById("n2").value);
    const op = document.getElementById("op").value;
    let wynik;

    switch (op) {
        case "add":
            wynik = n1 + n2;
            break;
        case "sub":
            wynik = n1 - n2;
            break;
        case "multi":
            wynik = n1 * n2;
            break;
        case "div":
            if (n2 === 0) {
                alert("Nie można dzielić przez zero.");
                return;
            }
            wynik = n1 / n2;
            break;
    }

    document.getElementById("wynik").innerHTML = `Wynik: ${wynik}`;
}