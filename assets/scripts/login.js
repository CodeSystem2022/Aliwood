const mail = document.getElementById("email");
const pass = document.getElementById("password");
const botonLoging = document.getElementById("btnLogin");

//Se escucha el evento submit del formulario-inicio-sesion.html
botonLoging.addEventListener("click", async (e) => {
    
    e.preventDefault();
    let warnings = "";
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&{}()[\]^<>\\|_~.'"#,])([A-Za-z\d@$!%*?&{}()[\]^<>\\|_~.'"#,]){8,}$/;
    let entrar = false;
    
    //Se valida el tipo de email ingresado
    if(mail.value.length < 4 || !regexEmail.test(mail.value)){
        warnings = 'El Email no es válido';
        entrar = true;
    }

    //Se valida el tipo de contraseña
    if(pass.value.length < 8){
        warnings = 'Email o Contraseña incorrecta';
        entrar = true;
    }else if(!regexPassword.test(pass.value)){
        warnings = 'Email o Contraseña incorrecta';
        entrar = true;
    }

    //Si pasa las validaciones anteriores se procede a verificar la existencia del usuario y la contraseña
    if(entrar){
        Swal.fire({
            position: "center",
            icon: "error",
            title: warnings,
            showConfirmButton: false,
            timer: 1500,
          });
    }else{
        const email = mail.value;
        const password = pass.value;

        await fetch(`http://127.0.0.1:3000/usuarios/${email}`)
            .then((response) => response.json())
            .then((data) => {
                if(data.message){
                    warnings = `Email o Contraseña incorrecto`;
                }else{
                    if(email == data.email && password == data.contrasenia){
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: "Acceso Concedido!",
                            showConfirmButton: false,
                            timer: 2500,
                          });
                            setTimeout(() => {
                                sessionStorage.setItem("user", data.email);
                                window.location.href = "/index.html";
                            }, 2500);
                    }else{
                        warnings = `Usuario o Contraseña incorrecta`;
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
    }
});