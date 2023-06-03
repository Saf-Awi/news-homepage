const sideBar = document.getElementById('sidebar');
const openMenu = document.getElementById('open-btn');
const closeMenu = document.getElementById('close-btn');
const overlay = document.getElementById('overlay');

openMenu.addEventListener("click", () => {
 sideBar.style.display = "flex";
 overlay.style.display = "flex";


})

closeMenu.addEventListener("click", () => {
    sideBar.style.display = "none";
    overlay.style.display = "none";

   

})