import React from 'react'
import { Alert, Button } from 'react-bootstrap';

const User = props => {
    return (
        <div>
            <Alert variant='primary'>
                Logado como {props.email}
                <Button variant='danger' size='lg' onClick={props.logout} className='ml-2'>Sair</Button>    
            </Alert>
        </div>
    )
}
export default User