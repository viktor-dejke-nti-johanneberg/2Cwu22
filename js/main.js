//Mobile Nav code
document.querySelector(".material-icons").addEventListener("click", showMenumobile);
document.querySelector(".fade-layer").addEventListener("click", showMenumobile);
document.querySelector(".cross").addEventListener("click", showMenumobile);
document.querySelector("#contactus").addEventListener("click", showMenumobile);

function showMenumobile(){
    document.querySelector(".navmobile").classList.toggle("show");
    document.querySelector(".fade-layer").classList.toggle("visible");
}

function showMenudesktop(){

}

