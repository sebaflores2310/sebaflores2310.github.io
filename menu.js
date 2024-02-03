document.getElementById("btn_menu").addEventListener("click", mostrar_menu);

document.getElementById("back_menu").addEventListener("click", ocultar_menu);

document.getElementById("btn_exit").addEventListener("click", ocultar_menu);



nav = document.getElementById("nav");
background_menu = document.getElementById("back_menu");
btn_exit = document.getElementById("btn_exit");

function mostrar_menu(){
    nav.style.right = "0px";
    background_menu.style.display = "block";
}

function ocultar_menu(){
    nav.style.right = "-250px";
    background_menu.style.display = "none";
}

document.querySelectorAll('.nav__links').forEach(n=>n.addEventListener("click",()=>{
    ocultar_menu();
}))


