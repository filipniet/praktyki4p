function calculate(operator, liczba1, liczba2) {
    switch (operator) {
      case '+':
        return liczba1 + liczba2;
      case '-':
        return liczba1 - liczba2;
      case '*':
        return liczba1 * liczba2;
      case '/':
        if (liczba2 !== 0) {
          return liczba1 / liczba2;
        } else {
          return "nie da sie przez 0 ";
        }
      default:
        return "wybierz cos innego";
    }
  }
  
  function calculateResult() {
    const liczba1 = parseFloat(document.getElementById("liczba1").value);
    const liczba2 = parseFloat(document.getElementById("liczba2").value);
    const operator = document.getElementById("operator").value;
    const result = calculate(operator, liczba1, liczba2);
    document.getElementById("result").textContent = result;
  }
  
