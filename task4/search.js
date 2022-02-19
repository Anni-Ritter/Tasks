function search() {
   var searchText = document.getElementById("searchText").value;
   var el = document.getElementById('result');
   let element = document.querySelectorAll('#towns li');
   var matches = 0;

   for (let elem of element){
      if(elem.innerHTML == searchText){
         matches++;
         elem.innerHTML= '<u><b>' + elem.innerHTML + '</b></u>';
      }
      el.textContent = matches + " matches found";
   }
}
