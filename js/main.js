//Mobile Nav code
document.querySelector(".menubutton").addEventListener("click", showMenumobile);
document.querySelector(".fade-layer").addEventListener("click", showMenumobile);
document.querySelector(".cross").addEventListener("click", showMenumobile);
document.querySelector("#contactus").addEventListener("click", showMenumobile);

function showMenumobile(){
    document.querySelector(".navmobile").classList.toggle("show");
    document.querySelector(".fade-layer").classList.toggle("visible");
}


//Desktop Nav code
document.querySelector(".menubuttondesk").addEventListener("click", showMenudesktop);
document.querySelector(".fade-layerdesk").addEventListener("click", showMenudesktop);
document.querySelector(".crossdesk").addEventListener("click", showMenudesktop);
document.querySelector("#contactusdesk").addEventListener("click", showMenudesktop);

function showMenudesktop(){
    document.querySelector(".navdesktop").classList.toggle("showdesktop");
    document.querySelector(".fade-layerdesk").classList.toggle("visibledesktop");
}

