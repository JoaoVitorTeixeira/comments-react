import React, { Component } from 'react'

class Login extends Component {
    state = {
        email: '',
        passwd: ''
    }

    handleChande = field => event => {
        this.setState({
            [field]: event.target.value
        })
    }

    login = () => {
        this.props.login(this.state.email, this.state.passwd)
    }

    render() {
        return (
            <div>
                <h4>Login</h4>
                <input type='text' onChange={this.handleChande('email')} placeholder='email' />
                <input type='password' onChange={this.handleChande('passwd')} placeholder='senha' />
                <button type='button' onClick={this.login}>Entrar</button>
            </div>
        )
    }
}

export default Login