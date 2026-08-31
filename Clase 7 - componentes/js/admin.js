
// Obtenemos el rol desde LocalStorage
const rolUsuario = localStorage.getItem('rol_usuario')

// Preguntamos si el rol es distinto a admin
if (rolUsuario != 'admin') {
    // Redirigimos a inicio
    window.location = '../index.html'
}