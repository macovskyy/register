import user from "../img/user.png"

const SignUP = () => {
    return (
        <>
            <div className="sign">
                <h1>Sign UP</h1>
                <img src={user} alt="user" />
                <p>Enter login and password to register:</p>
                <div className="loginForm">
                    <input type="text" className="login" id="email" placeholder="Email" />
                </div>

                <div className="loginForm">
                    <input type="text" className="login" id="login" placeholder="Login" />
                </div>

                <div className="passwordForm">
                    <input type="text" className="password" id="password" placeholder="Password" type='password' />
                </div>

                <button>Send</button>

                <p className="SignUP">If you have account already, you can Sign In</p>

                <script src="/script.js"></script>
            </div>
        </>
    )
}

export default SignUP;