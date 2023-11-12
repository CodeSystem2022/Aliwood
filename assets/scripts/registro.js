
// Obtener referencias a los elementos del formulario
const nombre = document.getElementById("InputName");
const apellido = document.getElementById("InputLastName");
const email = document.getElementById("InputEmail");
const password = document.getElementById("InputPassword");
const confirmpassword = document.getElementById("InputConfirmPassword");
const form = document.getElementById("form");

form.addEventListener("submit", async (e) => {

    e.preventDefault();                                                                                                                 //Evita que el formulario se envie automaticamente

    let warnings = "";                                                                                                                  // Variable para almacenar los mensajes de advertencia
    let registrar = "";
    let entrar = false;                                                                                                                   // Variable para determinar si se deben mostrar las advertencias
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;                                                                     // Expresión regular para validar el formato de correo electrónico
    let regexUsuario = /^[a-zA-Z0-9]+$/;                                                                                                  // Expresión regular para validar el formato de usuario
    let regexLetras = /^[A-Za-z\s]+$/;                                                                                                    // Expresión regular para validar que solo se ingresen letras
    let regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&{}()[\]^<>\\|_~.'"#,])([A-Za-z\d@$!%*?&{}()[\]^<>\\|_~.'"#,]){8,}$/; // Expresión regular para validar la fortaleza de la contraseña

    // Validar el campo nombre
    if(nombre.value.length < 3) {
        warnings = "El Nombre no es válido";
        entrar = true;
    }
    else if (!regexLetras.test(nombre.value)) {
      warnings = "El campo nombre solo puede contener letras";
      entrar = true;
    } // Validar el campo apellido
    else if(apellido.value.length < 3) {
      warnings = "El Apellido no es válido";
      entrar = true;
    }
    else if (!regexLetras.test(apellido.value)) {
      warnings = "El campo apellido solo puede contener letras";
      entrar = true;
    } // Validar el campo email
    else if (!regexEmail.test(email.value)) {
      warnings = "El email no es valido";
      entrar = true;
    } // Validar el campo contraseña
    else if (password.value.length < 8) {
      warnings = "La contraseña debe tener al menos 8 caracteres";
      entrar = true;
    } else if (!regexPassword.test(password.value)) {
      warnings = "La contraseña debe contener al menos una mayúscula, una minúscula, un número y un símbolo";
      entrar = true;
    } // Validar el campo confirmar contraseña
    else if (confirmpassword.value !== password.value) {
      warnings = "Las contraseñas no coinciden";
      entrar = true;
    }

    // Mostrar las advertencias o mensaje de envío según sea necesario
    if (entrar) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: warnings,
        showConfirmButton: false,
        timer: 1500,
      });
    } else {

      await fetch(`http://127.0.0.1:3000/usuarios/${email.value}`)
            .then((response) => response.json())
            .then((data) => {
                if(data.message){
                    registrar = `yes`;
                }else{
                    if(email.value == data.email){
                        Swal.fire({
                            //luego de copiar aparece un pop up de exito
                            position: "center",
                            icon: "error",
                            title: "El Email ya se encuentra registrado!",
                            showConfirmButton: false,
                            timer: 2500,
                          });
                    }else{
                      registrar = `yes`;
                    } 
                }
            if(warnings != ""){
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: warnings,
                    showConfirmButton: false,
                    timer: 1500,
                });
            }
          })
      if(registrar==="yes"){
        //await fetch("https://alikeydeploy-production.up.railway.app/personas/", {
        await fetch("http://127.0.0.1:3000/usuarios/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            nombre: nombre.value,
            apellido: apellido.value,
            email: email.value,
            contrasenia: password.value,
          }),
        })
          .then((response) => response.json())
          .then((data) => {
            warnings = data.message;
          });
        Swal.fire({
          //luego de conectar con la base de datos, se muestra un mensaje de éxito creación de usuario
          position: "center",
          icon: "success",
          title: warnings,
          showConfirmButton: false,
          timer: 2500,
        });
        setTimeout(() => {
          window.location.href = "/assets/pages/Inicio3.html";
        }
        , 2500);
      }
    }

});