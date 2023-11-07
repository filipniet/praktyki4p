function handleReverseForm(form){
    let word = form.inputbox3.value;
    document.getElementById("reverseResult").innerHTML = myReverse(word);
}