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
                <h4>Entre para comentar:</h4>
                <from className='form-inline'>
                    <input type='text' className='form-control mr-1' onChange={this.handleChande('email')} placeholder='email' />
                    <input type='password' className='form-control' onChange={this.handleChande('passwd')} placeholder='senha' />
                    <button type='button' className='btn btn-primary mr-1 ml-1' onClick={this.login}>Entrar</button>
                    <button className='btn' onClick={() => this.props.changeScreen('signUp')}> Criar conta </button>
                </from>
                {
                    this.props.isAuthError &&
                    <div className='card text-white bg-danger mt-3'>
                        <div className='card-header'>Erro ao entrar:</div>
                        <div className='card-body'>
                            {this.props.isAuthError && errorMessages[this.props.authError]}
                        </div>
                    </div>
                }
            </div>
        )
    }
}

export default Login