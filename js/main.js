//Mobile Nav code
document.querySelector(".material-icons").addEventListener("click", showMenu);
document.querySelector(".fade-layer").addEventListener("click", showMenu);
document.querySelector(".cross").addEventListener("click", showMenu);
document.querySelector("#contactus").addEventListener("click", showMenu);

function showMenu(){
    document.querySelector(".navmobile").classList.toggle("show");
    document.querySelector(".fade-layer").classList.toggle("visible");
}

