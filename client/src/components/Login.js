import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

class Login extends React.Component {
    state = {
        creditials: {
            username: "",
            password: ""
        }
    };

    handleChange = e => {

        e.preventDefault();

        this.setState({
            creditials: {
                ...this.state.creditials,
                [e.target.name]: e.target.value
            }
        });
    };

    login = e => {
        e.preventDefault();

        axiosWithAuth()
            .post("/login", this.state.creditials)
            .then(res => {
                console.log(res)
                localStorage.setItem("token", res.data.payload);
                this.props.history.push("/protected");
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })

    }

    render() {
        return (
            <div>
                <form onSubmit={this.login}>
                    <input

                        type="text"
                        name="username"
                        value={this.state.creditials.username}
                        onChange={this.handleChange}
                    />

                    <input

                        type="password"
                        name="password"
                        value={this.state.creditials.password}
                        onChange={this.handleChange}

                    />

                    <button>Log in</button>
                </form>
            </div>
        );
    }
}

export default Login;