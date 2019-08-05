import React, { Component } from 'react'

class SignUp extends Component {
    state = {
        email: '',
        passwd: ''
    }

    handleChande = field => event => {
        this.setState({
            [field]: event.target.value
        })
    }

    creatAccount = () => {
        this.props.creatAccount(this.state.email, this.state.passwd)
    }

    render() {
        const errorMessages = {
            'auth/invalid-email': 'E-mail inválido.',
            'auth/weak-password': 'Senha muito fraca.',
            'auth/email-already-in-use': 'E-mail já foi utilizado.'
        }

        return (
            <div>
                <h4>Criar conta</h4>
                <input type='text' onChange={this.handleChande('email')} placeholder='email' />
                <input type='password' onChange={this.handleChande('passwd')} placeholder='senha' />
                <button type='button' onClick={this.creatAccount}>Criar Conta</button>
                <button onClick={() => this.props.changeScreen('login')}>
                    Já tenho uma conta, entrar!
                </button>
                {
                    this.props.isSignUpError &&
                    <p>
                        <b>Erro: </b>{this.props.isSignUpError && errorMessages[this.props.signUpError]}
                    </p>
                }
            </div>
        )
    }
}

export default SignUp