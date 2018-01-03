import React, { Component } from 'react'
import Axios from 'axios'
import { Redirect } from 'react-router-dom'
import './NewPost.css';

class NewPost extends Component {
  state = {
    title: '',
    content: '',
    author: 'Andreyka',
    submitted: false
  }
  
  postDataHandler = () => {
    
    const post = {
      title: this.state.title,
      content: this.state.content,
      author: this.state.author
    }
    
    console.log('Post data handler: ' + JSON.stringify(post))
    
    Axios.post('/posts', post)
      .then(response => {
        console.log(response)
        // this.setState({submitted: true})
        // this.props.history.push('/posts')
        this.props.history.replace('/posts')
      })
  }
  
  componentDidMount() {
    console.log(this.props)
  }
  
  render() {
    if (this.state.submitted) {
      return <Redirect to='/posts'/>
    }
    return (
      <div className="NewPost">
        <h1>Add a Post</h1>
        <label>Title</label>
        <input type="text" value={this.state.title}
               onChange={( event ) => this.setState({ title: event.target.value })}/>
        <label>Content</label>
        <textarea rows="4" value={this.state.content}
                  onChange={( event ) => this.setState({ content: event.target.value })}/>
        <label>Author</label>
        <select value={this.state.author} onChange={( event ) => this.setState({ author: event.target.value })}>
          <option value="Andrew">Andrew</option>
          <option value="Marina">Marina</option>
        </select>
        <button onClick={this.postDataHandler}>Add Post Now</button>
      </div>
    );
  }
}

export default NewPost;