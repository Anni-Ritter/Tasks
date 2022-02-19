function subtract() {
    var sub = Number(document.getElementById("firstNumber").value) - Number(document.getElementById("secondNumber").value);
    var el = document.getElementById('result');
    el.textContent = sub;

}