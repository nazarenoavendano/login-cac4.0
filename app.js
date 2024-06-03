
let btn = document.getElementById("btnenviar");
let usuario = document.getElementById("usuario");
let contrasena = document.getElementById("contrasena");

btn.addEventListener("click", function(event) {
    event.preventDefault();

    const usuarioValue = usuario.value;
    const contrasenaValue = contrasena.value;

    // Validación del usuario (correo de Gmail)
    if (!usuarioValue.endsWith("@gmail.com")) {
        alert("El usuario debe ser un correo de Gmail válido.");
        condicion1 = true;
        return;
    }

    // Validación de la contraseña (no vacía)
    if (contrasenaValue.trim() === "") {
        alert("La contraseña no puede estar vacía.");
        condicion2 = true;
        return;
    }

    if (condicion1 == true && condicion2 == true) {
        console.log("pasó el login")
        location.assign("/api.html");
    }
});


