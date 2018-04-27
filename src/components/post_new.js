import React, { Component } from 'react';
import { format } from 'url';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions'

class PostNew extends Component {

  state = {
    title: '',
    categories: '',
    content: ''
  }

  onInputChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  addPost = (e) => {
    e.preventDefault();

    const { title, categories, content } = this.state;
    const post = { title, categories, content }
    this.props.createPost(post, () => {
      this.props.history.push('/')
    });
    
  }

  render() { 
    
    return (
      <form onSubmit={this.addPost}>
        <input type="text" 
               name="title"
               placeholder="title"
               value={this.state.title}
               onChange={this.onInputChange}/><br/>

        <input type="text" 
               name="categories"
               placeholder="categories"
               value={this.state.categories}
               onChange={this.onInputChange}/><br/>

        <input type="text" 
               name="content"
               placeholder="content"
               value={this.state.content}
               onChange={this.onInputChange}/><br/>

        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    );
  }
}

export default connect(null, { createPost })(PostNew);