const increasebtn = document.getElementById("increasebtn");
const resetbtn = document.getElementById("resetbtn");
const decreasebtn = document.getElementById("decreasebtn");

const number = document.getElementById("number");

let count=0;


increasebtn.onclick = function()
{
    count++;
    number.textContent=count;
}



resetbtn.onclick = function()
{
    count=0;
    number.textContent=count;
}


decreasebtn.onclick = function()
{
    count--;
    number.textContent=count;
}

