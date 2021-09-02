
import React, { Component } from 'react'
import AuthenticationService from './AuthenticationService.js'
import { Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'


class LoginComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        }

        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
    }

    handleChange(event) {

        this.setState(
            {
                [event.target.name]
                    : event.target.value
            }
        )
    }


    loginClicked() {

        AuthenticationService
            .executeJwtAuthenticationService(this.state.username, this.state.password)
            .then((response) => {
                AuthenticationService.registerSuccessfulLoginForJwt(this.state.username, response.data.token)
                this.props.history.push(`/welcome/${this.state.username}`)
            }).catch(() => {
                this.setState({ showSuccessMessage: false })
                this.setState({ hasLoginFailed: true })
            })

    }

    render() {
        return (
            <div>
                <h1 className="pt-5">Welcome Back {this.state.username} !</h1>
                <div className="container">
                    <div className="row row align-items-center">
                        <div className="col-sm">
                            <Image src="https://getthematic.com/insights/content/images/wordpress/2019/01/shutterstock_1112175710-1.jpg" fluid />
                        </div>
                        <div className="col-md">
                            {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                            {this.state.showSuccessMessage && <div>Login Sucessful</div>}
                            <form>

                                <div className="form-group">
                                    <label>User Name</label>
                                    <input type="text" className="form-control" name="username" placeholder="Enter Username" value={this.state.username} onChange={this.handleChange} />
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" className="form-control" name="password" placeholder="Enter password" value={this.state.password} onChange={this.handleChange} />
                                </div>
                                <button type="submit" className="btn btn-primary btn-block" onClick={this.loginClicked} >Submit</button>
                                <p className="forgot-password text-center">Forgot <a href="#">password?</a> or new to the app? <Link className="new user text-right" to="/signup">signup</Link></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginComponent

