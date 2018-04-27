import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import { Link } from 'react-router-dom';


class PostIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPosts = () => {
    
    return _.map(this.props.posts, post => {
      return (
        <li key={post.id} className="list-group-item">
          <a href={"/post/" + post.id}>{post.title}</a>
        </li>
      )
    })
  }

  render() { 
    return (
      <div>
        <div>
          <Link className="btn btn-primary" to="/post/new">Add a post</Link>
        </div>
        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts }
}

export default connect(mapStateToProps, { fetchPosts })(PostIndex);