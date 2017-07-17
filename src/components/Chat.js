import React, {Component} from 'react';
import '../styles/Chat.css';
import ChatInput from './ChatInput';
import ChatMessages from './ChatMessages';
import {gql, graphql, compose} from 'react-apollo';

class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = {message: ''};
    }

    render() {
        return (
            <div className="Chat">
                <ChatMessages
                    messages={this.props.allMessagesQuery.allMessages || []}
                    endRef={this._endRef}
                />
                <ChatInput
                    message={this.state.message}
                    onTextInput={(message) => this.setState({message})}
                    onResetText={this._resetText}
                    onSend={this._onSend}
                />
            </div>
        );
    }

    _onSend() {
        const variables = {
            text: this.state.message,
            sentById: this.props.userId
        };
        this.props.createMessageMutation(variables);
    }

    _resetText() {
        this.setState({message: ''});
    }

    /*
     * AUTO SCROLLING
     */

    _endRef(element) {
        this.endRef = element;
    }

    componentDidUpdate() {
        // scroll down with every new message
        if (this.endRef) {
            this.endRef.scrollIntoView();
        }
    }
}

const ALL_MESSAGES_QUERY = gql`
    query AllMessagesQuery {
        allMessages {
            id
            text
            createdAt
            sentBy {
                id
                name
            }
        }
    }
`;

const CREATE_MESSAGE_MUTATION = gql`
    mutation CreateMessageMutation($text: String!, $sentById: ID!) {
        createMessage(text: $text, sentById: $sentById) {
            id
            text
            createdAt
            sentBy {
                id
                name
            }
        }
    }
`;

const connect = compose(
    graphql(ALL_MESSAGES_QUERY, {name: 'allMessagesQuery'}),
    graphql(CREATE_MESSAGE_MUTATION, {name: 'createMessageMutation'})
);
export default connect(Chat);
