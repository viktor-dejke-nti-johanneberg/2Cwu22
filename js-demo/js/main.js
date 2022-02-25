document.querySelector(".menu-button").addEventListener("click", showMenu);
document.querySelector(".fade-layer").addEventListener("click", showMenu);

function showMenu(){
    document.querySelector("nav.menu").classList.toggle("show");
    document.querySelector(".fade-layer").classList.toggle("visible");
}