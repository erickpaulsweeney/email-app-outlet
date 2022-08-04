import { useNavigate } from "react-router-dom";

function Login(props) {
    const navigate = useNavigate();

    return (
        <div className="container-login">
            <button className="login-button" onClick={() => {
                props.setLoggedIn(true);
                navigate("/");
            }}>Login</button>
        </div>
    )
}

export default Login;