import {NavLink} from "react-router-dom";
import '../styles/Navigation.css';

function Navigation() {

    return (
        <nav id="Nav">
            <ul>
                <li>
                    <NavLink to='/'>Présentation</NavLink>
                </li>
                <li>
                    <NavLink to='/routeur'>Routeur</NavLink>
                </li>
                <li>
                    <NavLink to="/instructions">Instructions</NavLink>
                </li>
                <li>
                    <NavLink to='/reactivity'>Reactivity</NavLink>
                </li>
                <li>
                    <NavLink to='/reactivity-bis'>Again</NavLink>
                </li>
                <li>
                    <NavLink to='/props'>Props</NavLink>
                </li>
                <li>
                    <NavLink to='/req'>Requêtes</NavLink>
                </li>
            </ul>
        </nav>
    )
}
export default Navigation;
