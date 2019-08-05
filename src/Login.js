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
        const errorMessages = {
            'auth/wrong-password': 'E-mail e/ou senha inválidos.',
            'auth/user-not-found': 'Usuário não encontrado.',
            'auth/invalid-email': 'E-mail inválido.'
        }

        return (
            <div>
                <h4>Login</h4>
                <input type='text' onChange={this.handleChande('email')} placeholder='email' />
                <input type='password' onChange={this.handleChande('passwd')} placeholder='senha' />
                <button type='button' onClick={this.login}>Entrar</button>
                <button onClick={() => this.props.changeScreen('signUp')}>
                    Criar conta
                </button>
                {
                    this.props.isAuthError &&
                    <p>
                        <b>Erro: </b>{this.props.isAuthError && errorMessages[this.props.authError]}
                    </p>
                }
            </div>
        )
    }
}

export default Login