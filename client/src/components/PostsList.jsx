import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import Post from './Post';

class PostsList extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    return this.props.posts.reverse().map(post => {
      return (
         <Post post={post}/>
      );
    });
  }

  render() {
    return (
      <div>
        {this.renderPosts()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchPosts })(PostsList);
