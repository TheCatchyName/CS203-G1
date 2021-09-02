
import React, { Component } from 'react'
import AuthenticationService from './AuthenticationService.js'
import { Image } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'



class SignupComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        }

        this.handleChange = this.handleChange.bind(this)
        this.signupClicked = this.signupClicked.bind(this)
    }

    handleChange(event) {

        this.setState(
            {
                [event.target.name]
                    : event.target.value
            }
        )
    }


    signupClicked() {

        //when clicked check if email alr taken, add new user and send verification email 
    
        // AuthenticationService
        //     .executeJwtAuthenticationService(this.state.username, this.state.password)
        //     .then((response) => {
        //         AuthenticationService.registerSuccessfulLoginForJwt(this.state.username, response.data.token)
        //         this.props.history.push(`/welcome/${this.state.username}`)
        //     }).catch(() => {
        //         this.setState({ showSuccessMessage: false })
        //         this.setState({ hasLoginFailed: true })
        //     })

    }

    render() {
        return (
            <Container>
                <Row  style={{ padding:'50px'}}>
                    <Col xs={6} md={4}></Col>
                    <Col xs={6} md={4}>
                    <Card border="info" style={{ padding:'20px',width: '18rem' }}>
                    <form>
                    <Card.Header>Sign Up</Card.Header>

                        <div className="form-group">
                            <label>First name</label>
                            <input type="text" className="form-control" placeholder="First name" value={this.state.username} onChange={this.handleChange} />
                        </div>

                        <div className="form-group">
                            <label>Last name</label>
                            <input type="text" className="form-control" placeholder="Last name" value={this.state.username} onChange={this.handleChange} />
                        </div>

                        <div className="form-group">
                            <label>Email address</label>
                            <input type="email" className="form-control" placeholder="Enter email"  value={this.state.username} onChange={this.handleChange}/>
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" placeholder="Enter password"  value={this.state.username} onChange={this.handleChange}/>
                        </div>

                        <button type="submit" className="btn btn-primary btn-block"  onClick={this.signupClicked}>Sign Up</button>
                        <p className="forgot-password text-center">Already registered <a href="#">sign in?</a></p>
                    </form>
                    </Card>
                </Col>
                <Col xs={6} md={4}></Col>
            </Row>
        </Container>
        );
        
    }
}

export default SignupComponent
