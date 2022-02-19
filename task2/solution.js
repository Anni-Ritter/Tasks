function solve() {
    var text = document.getElementById("text").value;
    var namingConvention = document.getElementById("naming-convention").value;
    var el = document.getElementById('result');
    function initPas(str) {
      return str.toLowerCase().replace(/(?:^|\s)[a-z]/g, function(m) {
         return m.toUpperCase().replace(/\s+/g, "");
      });
    };
    function initCap(str) {
      return str
        .split(' ')
        .map(
          (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
        )
        .join(' ');
    }
    switch(namingConvention){
      case "Camel Case":
        el.textContent = initCap(text);
        break;
      case "Pascal Case":
        el.textContent = initPas(text);
        break;
      default:
        el.textContent = "Error!";
    }
}