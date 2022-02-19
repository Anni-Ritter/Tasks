visible = false; 
var extra = document.getElementById("extra");
var btn = document.getElementById("btn");
function toggle() {
    if(visible) {
        visible = 0;
        btn.innerHTML = 'More';
        extra.style.display = 'none';
    } else {
        visible = 1;
        btn.innerHTML = 'Less';
        extra.style.display = 'block';
    }
}