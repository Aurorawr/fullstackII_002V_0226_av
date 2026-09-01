
class Navbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <nav>
            <ol>
                <li><a href="index.html">Inicio</a></li>
                <li><a href="inicio-sesion.html">Iniciar sesión</a></li>
                <li><a href="registro.html">Registro</a></li>
                <li><a href="contacto.html">Contacto</a></li>
            </ol>
        </nav>
        `
    }
}

customElements.define('custom-navbar', Navbar)

