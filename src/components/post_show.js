import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPost, deletePost } from '../actions';
 
class PostShow extends Component {

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchPost(id)
  }

  removePost = (id) => {
    this.props.deletePost(id, () => {
      this.props.history.push('/')
    });
  }

  render() { 
    
    if (Object.keys(this.props.post).length !== 0) {
      const post = this.props.post[this.props.match.params.id]; 
      
      return (
        <div>
          <Link to="/">Back to index</Link>
          <button
            className="btn btn-danger"
            onClick={() => this.removePost(post.id)}>Delete post</button>
          <h2>{post.title}</h2>
          <h3>{post.categories}</h3>
          <p>{post.content}</p>
        </div>
      )
    }
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );
  }
}

function mapStateToProps({ posts }) { return { post: posts }}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostShow);