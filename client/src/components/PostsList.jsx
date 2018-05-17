import React, { Component } from 'react';
import _filter from 'lodash/filter';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import Post from './Post';
class PostsList extends Component {

  constructor(params) {
    super(params);
    this.state = {
      filter: ''
    }
    this.onFilterChange = this.onFilterChange.bind(this);
  }

  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    let posts = this.props.posts.reverse();
    const filter = this.state.filter;
    if (filter !== undefined && filter !== '') {
      posts = _filter(posts, post => this.searchWordIndexInValue(post.email, filter) !== -1);

    }
    return posts.map(post => {
      return (
        <Post post={post} />
      );
    });
  }

  onFilterChange(event) {
    this.setState({
      filter: event.target.value
    })
  }

  render() {
    return (
      <div>
        <input placeholder='Filter by email' onChange={this.onFilterChange} />
        {this.renderPosts()}
      </div>
    );
  }

  searchWordIndexInValue(value, searchWord) {
    if (value !== null && value !== undefined && searchWord !== null && searchWord !== undefined) {
      return value.toLowerCase().indexOf(searchWord.toLowerCase());
    }
    return -1;
  }
}

function mapStateToProps(state) {
  return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchPosts })(PostsList);
