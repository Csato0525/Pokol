
var count = 0;
var btn = document.getElementById("btn");
var disp = document.getElementById("darab");

btn.onclick = function () {
    count++;
    disp.innerHTML = count;
}