import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { fetchReducer, fetchPostsWithRedux } from './reducers/fetchReducers'

export function mapStateToProps( state )
{
    return {
        posts: state.posts
    }
}
let Container = connect( mapStateToProps, { fetchPostsWithRedux } )( App );

const store = createStore( fetchReducer, applyMiddleware( thunkMiddleware ) );

ReactDOM.render( <Provider store={ store }>
    <Container />
</Provider>, document.getElementById( 'root' ) );
registerServiceWorker();
