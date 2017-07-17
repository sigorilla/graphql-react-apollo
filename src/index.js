import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './styles/index.css';
import {ApolloClient, ApolloProvider, createNetworkInterface} from 'react-apollo';

const networkInterface = createNetworkInterface({
    uri: 'https://api.graph.cool/simple/v1/cj53xjphwani0017517s2ubl3'
});

const client = new ApolloClient({
    networkInterface
});

ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>,
    document.getElementById('root')
);
