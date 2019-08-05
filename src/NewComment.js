import React, { Component } from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';

class NewComment extends Component {
    state = {
        newComment: ''
    }

    handleChange = event => {
        this.setState({
            newComment: event.target.value
        })
    }

    sendComment = () => {
        this.props.sendComment(this.state.newComment);
        this.setState({
            newComment: ''
        })
    }

    render() {
        return (
            <div>
                <InputGroup value={this.state.newComment} onChange={this.handleChange}>
                    <FormControl placeholder="Digite seu comentário..." as="textarea" aria-label="With textarea" />
                    <Button onClick={this.sendComment} className='ml-1'>
                        <InputGroup.Prepend>Enviar</InputGroup.Prepend>
                    </Button>
                </InputGroup>
            </div>
        );
    }
}

export default NewComment