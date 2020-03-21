// function toggleMenu() {
//     document.getElementById("primaryNav").classList.toggle("hide");
//     document.getElementById("navButton").classList.toggle("close");
// }

function toggleMenu() {
    document.getElementById('navButton').classList.toggle("open");
    document.getElementById('primaryNav').classList.toggle("open");
    
}

var x = document.getElementById('navButton');
x.onclick=toggleMenu;