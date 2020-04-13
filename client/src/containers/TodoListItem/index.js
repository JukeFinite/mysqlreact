import React, { Component } from 'react';

const axios = require('axios');

class TodoListItem extends Component {
    state = {
        todo: {}
    }

    async componentDidMount() {
        try {
            const { data } = await axios.get(`/api/todos/${this.props.match.params.id}`);
            this.setState({todo: data});
        } catch(e) {
            console.log(e);
        }
    }
    render() {
        console.log(this.state.todo);
        return (
            <h1>Todo</h1>
        );
    }
}

export default TodoListItem;