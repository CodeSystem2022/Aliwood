const hrefRegistro = document.getElementById("idHref");
const iniSesion = document.getElementById("idSesion");


//Si no hay un usuario logueado vuelve a la pantalla de login
if(sessionStorage.getItem("user")){
    iniSesion.innerHTML = '';
    hrefRegistro.href="/assets/pages/mi-cuenta.html";
    hrefRegistro.innerHTML = "Mi Cuenta";
}