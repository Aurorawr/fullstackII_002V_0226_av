
// Identificar el input de correo
const inputEmail = document.getElementById("input-email")

// Identificar el input de contraseña
const inputPassword = document.getElementById("input-password")

// Identificar el botón de inicio de sesión
const botonInicioSesion = document.getElementById("btn-inicio-sesion")

// Agregamos evento click al botón
botonInicioSesion.addEventListener("click", function() {
    // Obtener correo del input
    const email = inputEmail.value

    if (email === "admin@tienda.cl") {
        // Guardar el rol del usuario en localStorage
        localStorage.setItem('rol_usuario', 'admin')
        // Redirigir a admin/index.html
        window.location = 'admin/index.html'
    } else if (email === "vendedor@tienda.cl") {
        // Guardar el rol del usuario en localStorage
        localStorage.setItem('rol_usuario', 'vendedor')
        // Redirigir a admin/vendedor.html
        window.location = "admin/vendedor.html"
    } else {
        alert("Credenciales incorrectas")
    }
})