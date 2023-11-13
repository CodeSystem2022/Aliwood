const hrefRegistro = document.getElementById("idHref");
const iniSesion = document.getElementById("idSesion");
const sesion = document.getElementById("cerrarSesion");
const userDelete = document.getElementById("delUser");
const nombreUsuario = document.getElementById("nombreUsuario");
const editarUsuario = document.getElementById("editarUsuario");
const editar = document.getElementById("editar");
const nombre = document.getElementById("nombreInput");
const email = document.getElementById("emailInput");
const apellido = document.getElementById("apellidoInput");
const password = document.getElementById("inputPass");
const cod_postal = document.getElementById("codigoPostalInput");
const celular = document.getElementById("celularInput");
const direccion = document.getElementById("direccionInput");
const dni = document.getElementById("dniInput");
const dir_envio = document.getElementById("direccionEnvioInput");
const pref_contacto = document.getElementById("preferenciasContactoInput");
const localidad = document.getElementById("localidadInput");
let id;
let contrasenia;

//Si no hay un usuario logueado vuelve a la pantalla de login
if(!sessionStorage.getItem("user")) window.location.href = "/assets/pages/Inicio3.html";

//Si no hay un usuario logueado vuelve a la pantalla de login
if(sessionStorage.getItem("user")){
    iniSesion.innerHTML = '';
    hrefRegistro.href="/assets/pages/mi-cuenta.html";
    hrefRegistro.innerHTML = "Mi Cuenta";
}

//Obtengo el mail del usuario logueado
const userMail = sessionStorage.getItem("user");

//A traves del email del usuario logueado obtengo los datos del mismo y los cargo en el formulario de mi-cuenta.html
fetch(`http://127.0.0.1:3000/usuarios/${userMail}`)
.then((response) => response.json())
.then((data) => {
    if(data.message){
        console.log(`No se encontraron datos`);
    }else{
        id= data.id;
        nombreUsuario.innerHTML = data.nombre + " " + data.apellido;
        nombre.placeholder = data.nombre;
        apellido.placeholder = data.apellido;
        email.placeholder = data.email
        password.placeholder = "********";
        contrasenia = data.contrasenia;
        if(data.codigo_postal) cod_postal.value = data.codigo_postal;
        if(data.numero_de_telefono) celular.value = data.numero_de_telefono;
        if(data.direccion) direccion.value = data.direccion;
        if(data.dni) dni.value = data.dni;
        if(data.direccion_envio) dir_envio.value = data.direccion_envio;
        if(data.preferencia_contacto) pref_contacto.value = data.preferencia_contacto;
        if(data.localidad) localidad.value = data.localidad;
        
    }
});

//Escucha el evento click del boton cerrar sesion
sesion.addEventListener("click", function (){
    sessionStorage.removeItem("user");
    window.location.href = "/index.html";
});

//Escucha el evento click del boton editar
editar.addEventListener("click", function (){

    if(password.value) contrasenia = password.value;

    //Actualizamos los datos del usuario de los campos que modifico
    fetch(`http://127.0.0.1:3000/usuarios/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            contrasenia: contrasenia,
            dni: dni.value,
            numero_de_telefono: celular.value,
            direccion: direccion.value,
            codigo_postal: cod_postal.value,
            direccion_envio: dir_envio.value,
            preferencia_contacto: pref_contacto.value,
            localidad: localidad.value,
          }),
        })
          .then((response) => response.json())
          .then((data) => {
            editarUsuario.innerHTML = "Usuario Editado";
          });
});

//Escucha el evento click del boton Eliminar Usuario
userDelete.addEventListener("click", function (){
    
    //Eliminamos al usuario de la Base de Datos
    fetch(`http://127.0.0.1:3000/usuarios/${id}`, {
        method: 'DELETE',
    })
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
    if (data.message) {
        console.log(data.message);
        sessionStorage.removeItem("user");
        window.location.href = "/index.html";
    } else {
        console.log("No se pudo eliminar el Usuario");
    }
    }); 

});