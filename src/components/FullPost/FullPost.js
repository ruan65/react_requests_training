import React, { Component } from 'react';
import Axios from 'axios'
import './FullPost.css';

class FullPost extends Component {
  
  state = {
    fullPost: null
  }
  
  componentDidUpdate() {
    
    if (this.props.id) {

      if (!this.state.fullPost || (this.state.fullPost && this.state.fullPost.id !== this.props.id)) {
  
        Axios.get('https://jsonplaceholder.typicode.com/posts/' + this.props.id)
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
  
  
    if (this.props.id) {
      post = <p>Loading...</p>
    }
    
    if (this.state.fullPost) {
      
      post = (
        <div className="FullPost">
          <h1>Title: {this.state.fullPost.title}</h1>
          <p>Message: {this.state.fullPost.body}</p>
          <div className="Edit">
            <button className="Delete">Delete</button>
          </div>
        </div>
      
      );
    }
    return post;
  }
}

export default FullPost;