import user from "../img/user.png"
import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class SignUP extends Component {
    ///Конструктор для E-mail
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            login: '',
            password: ''
        }
        ///Забіндив метод для того, щоб this посилався саме на цей клас
        this.changeEmail = this.changeEmail.bind(this)
        this.changeLogin = this.changeLogin.bind(this)
        this.changePassword = this.changePassword.bind(this)
        this.checkSubmit = this.checkSubmit.bind(this)
    }

    checkSubmit(event) {
        event.preventDefault();
        if (this.state.email.indexOf("@gmail.com") == -1) {
            alert('Пошта має містити "@gmail.com"')
        }
        else {
            if (this.state.login != '') {
                if (this.state.password != '') {
                    console.log("Форма змінена", this.state);
                    let json = JSON.stringify(this.state);
                    alert(json);
                }
            }
        }
    }

    changeEmail(event) {
        console.log("Пошту змінено", event.target.value)
        this.setState({
            email: event.target.value
        })
    }

    changeLogin(event) {
        console.log("Логін змінено", event.target.value)
        this.setState({
            login: event.target.value
        })
    }
    
    changePassword(event) {
        console.log("Пароль змінено", event.target.value)
        this.setState({
            password: event.target.value
        })
    }

    render() {
        return (
            <>
                <div className="sign">
                    <h1>Sign UP</h1>
                    <img src={user} alt="user" />
                    <form className="loginForm" onSubmit={this.checkSubmit}>
                        <input
                            type="text"
                            className="login"
                            id="email"
                            placeholder="E-mail"
                            value={this.state.email}
                            onChange={this.changeEmail}
                        />

                        <input
                            type="text"
                            className="login"
                            id="login"
                            placeholder="Login"
                            value={this.state.login}
                            onChange={this.changeLogin}
                        />
                        
                        <input
                            type="text"
                            className="password"
                            id="password"
                            placeholder="Password"
                            type='password'
                            value={this.state.password}
                            onChange={this.changePassword}
                        />
                        <br></br>

                        <button>Send</button>
                    </form>


                   

                    <p className="SignUP">If you have account already, you can <NavLink to="../">Sign IN </NavLink></p>

                    <script src="/script.js"></script>
                </div>
            </>
        )
    }

        
    
}


export default SignUP;