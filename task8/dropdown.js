function addItem() {
    var menu = document.getElementById('menu');
    var newItemText = document.getElementById('newItemText').value;
    var newItemValue = document.getElementById('newItemValue').value;
    var option = document.createElement('option');
    option.value = newItemValue;
    option.textContent = newItemText;
    menu.appendChild(option);
}