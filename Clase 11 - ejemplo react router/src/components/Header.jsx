import { NavLink } from "react-router";

export function Header() {

    return (
        <header>
            <h3>App con react router</h3>
            <nav>
                <ul>
                    <li><NavLink to="/">Inicio</NavLink></li>
                    <li><NavLink to="/catalogo">Catalogo</NavLink></li>
                    <li><NavLink to="/demo">Página original</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}
