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
        if (this.state.newComment !== '') {
            this.props.sendComment(this.state.newComment);
            this.setState({
                newComment: ''
            })
        }
    }

    render() {
        return (
            <div>
                <InputGroup onChange={this.handleChange}>
                    <FormControl placeholder="Digite seu comentário..." as="textarea" value={this.state.newComment}/>
                    <Button onClick={this.sendComment} className='ml-1'>
                        <InputGroup.Prepend>Enviar</InputGroup.Prepend>
                    </Button>
                </InputGroup>
                {JSON.stringify(this.state.newComment)}
            </div>
        );
    }
}

export default NewComment