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
                <form className='form-inline'>
                    <input type='text' className='form-control mr-1' onChange={this.handleChande('email')} placeholder='email' />
                    <input type='password' className='form-control mr1' onChange={this.handleChande('passwd')} placeholder='senha' />
                    <button type='button' className='btn btn-primary mr-1 ml-1' onClick={this.creatAccount}>Criar Conta</button>
                    <button className='btn' onClick={() => this.props.changeScreen('login')}> Já tenho uma conta, entrar! </button>
                </form>
                {
                    this.props.isSignUpError &&
                    <div className='card text-white bg-danger mt-3'>
                        <div className='card-header'>Erro cadastrar:</div>
                        <div className='card-body'>
                            {this.props.isSignUpError && errorMessages[this.props.signUpError]}
                        </div>
                    </div>
                }
            </div>
        )
    }
}

export default SignUp