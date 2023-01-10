import {Link} from "react-router-dom";

function NotFound() {
    return (
        <main>
            <h1>Oh oh ! Are you Lost ? </h1>
            <p><Link to='/'>Go back to home</Link></p>
        </main>
    )
}
export default NotFound;
