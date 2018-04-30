import React, { Component } from 'react';
import './App.css';
import fetchPostsWithRedux from './reducers/fetchReducers';
import mapStateToProps from './index';
import logo from './logi.png'

class App extends Component
{
  componentDidMount()
  {
    this.props.fetchPostsWithRedux();
    this.updateInterval()
  }
  updateInterval()
  {
    const { dispatch } = this.props
    setInterval( () =>
    { this.props.fetchPostsWithRedux() }, 60000 )
  }
  render()
  {
    return (
      <div>
        <figure className="swing">
          <img src={ logo } alt="logo" className="logo" />
        </figure>
        <br /><br /><br />
        { this.props.posts && this.props.posts.map( ( post, i ) => <div key={ i }
          className="draw" >

          <img src={ post.thumbnail } alt="Images" className="thumbnail" />
          <p className="pra">{ post.title }</p>
        </div>

        ) }
      </div>
    )
  }
}

export default App;
