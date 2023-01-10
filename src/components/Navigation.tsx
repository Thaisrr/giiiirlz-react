import {NavLink} from "react-router-dom";

function Navigation() {

    return (
        <nav>
            <ul>
                <li>
                    <NavLink to='/'>Présentation</NavLink>
                </li>
                <li>
                    <NavLink to='/routeur'>Routeur</NavLink>
                </li>
            </ul>
        </nav>
    )
}
export default Navigation;
