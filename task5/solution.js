function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   

   function onClick() {
      var phrase = document.getElementById('searchField');
      var table = document.getElementById('table');
      var regPhrase = new RegExp(phrase.value, 'i');
      var flag = false;
      for (var i = 1; i < table.rows.length; i++) {
          flag = false;
          for (var j = table.rows[i].cells.length - 1; j >= 0; j--) {
              flag = regPhrase.test(table.rows[i].cells[j].innerHTML);
              if (flag) break;
          }
          if (flag) {
              table.rows[i].classList.add("select"); 
          }       
      }
   }  
}