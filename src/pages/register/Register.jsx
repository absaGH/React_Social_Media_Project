import { Link } from "react-router-dom"
import "./register.scss"

const Register = () => {
    return (
        <div className="register">
            <div className="card">
                <div className="left">
                    <h1>Simplex Social.</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Aliquid illo qui ex quam aliquam, fuga similique quas maxime 
                        molestiae.
                    </p>
                    <span>Don't you have an account?</span>
                    <Link to="/login">
                        <button>Login</button>
                    </Link>
                </div>
                <div className="right">
                    <h1>Register</h1>
                    <form>
                        <input type="text" placeholder="Username"></input>
                        <input type="email" placeholder="Email"></input>
                        <input type="password" placeholder="Password"></input>
                        <input type="text" placeholder="Name"></input>
                        <button>Register</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register