import user from "../img/user.png"

const SignIN = () => {
    return (
        <>
            <div className="sign">
                <h1>Sign IN</h1>
                <img src={user} alt="user" />
                <p>Enter login and password:</p>
                <div className="loginForm">
                    <input type="text" className="login" id="login" placeholder="Login" />
                </div>

                <div className="passwordForm">
                    <input type="text" className="password" id="password" placeholder="Password" type='password' />
                </div>

                <button>Enter</button>

                <p className="SignUP">If you have no account, you can Sign Up</p>

                <script src="/script.js"></script>
            </div>
        </>
    )
}

export default SignIN;