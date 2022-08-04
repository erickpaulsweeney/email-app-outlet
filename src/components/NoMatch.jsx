import { Link } from "react-router-dom";

function NoMatch() {
    return (
        <div className="container-no-match">
            <h2>Looks like you are lost!</h2>
            <Link to={''}>Go back to Home</Link>
        </div>
    )
}

export default NoMatch;