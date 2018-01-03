import React, { Component } from 'react';
import Axios from 'axios'
import './FullPost.css';

class FullPost extends Component {
  
  state = {
    fullPost: null
  }
  
  deletePostHandler = () => {
    
    Axios.delete('/posts/' + this.props.match.params.postId)
      .then(response => {
        
        console.log(response)
      })
  }
  
  componentDidMount() {
    
    console.log(this.props)
    this.loadData()
  }
  
  componentDidUpdate() {
    
    this.loadData()
  }
  
  loadData() {
    if (this.props.match.params.postId) {
    
      if (!this.state.fullPost || (this.state.fullPost && this.state.fullPost.id != this.props.match.params.postId)) {
      
        Axios.get('/posts/' + this.props.match.params.postId)
          .then(response => {
          
            console.log(response)
          
            if (response.status === 200) {
            
              this.setState({fullPost: response.data})
            }
          })
      }
    }
  }
  
  render() {
    
    let post = <p style={{ textAlign: 'center' }}>Please select a Post!</p>;
  
  
    if (this.props.match.params.postId) {
      post = <p>Loading...</p>
    }
    
    if (this.state.fullPost) {
      
      post = (
        <div className="FullPost">
          <h1>Title: {this.state.fullPost.title}</h1>
          <p>Message: {this.state.fullPost.body}</p>
          <div className="Edit">
            <button className="Delete" onClick={this.deletePostHandler}>Delete</button>
          </div>
        </div>
      
      );
    }
    return post;
  }
}

export default FullPost;