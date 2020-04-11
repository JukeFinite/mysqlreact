import React, { Component } from 'react';

import CommentsListItem from './../../components/CommentsListItems';
import axios from 'axios';
class Comments extends Component {
    state = {
        comments: []
    }
    async componentDidMount() {
        try {
            // Destructure data from response, rename it into comments
            const { data: comments } = await axios.get('https://jsonplaceholder.typicode.com/comments');
            this.setState({ comments });
        } catch(e) {
            console.log(e);
        }
    }
    render() {
        return (
            <div>
                <h1>I am comments page</h1>
                <CommentsListItem items={this.state.comments}/>
            </div>
        )
    }
}
export default Comments;