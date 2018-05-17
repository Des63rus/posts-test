import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PostsList from './components/PostsList';
import NewPost from './components/NewPost';


class App extends Component {
  render() {
    return (
      <div className="container">
        <NewPost/>
        <PostsList/>
      </div>
    );
  }
}

export default App;
