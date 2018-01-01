import React, { Component } from 'react'
import axiosInstance from "../../../Axios";
import Post from '../../../components/Post/Post'
import './Posts.css'

class Posts extends Component {
  
  state = {
    posts: []
  }
  
  componentDidMount() {
    console.log('component did mount........')
    
    axiosInstance.get('/posts')
      .then(response => {
        
        const posts = response.data.slice(0, 8)
        
        const updatedPosts = posts.map(post => ({ ...post, author: 'Andreyka' })
        )
        this.setState({ posts: updatedPosts })
        
        console.log('State: ' + this.state)
      })
      .catch(err => {
        console.log(err)
        
        // this.setState({error: err.toString()})
      })
  }
  
  selectPostHandler( id ) {
    
    console.log('selected: ' + id)
    
    this.setState({ selectedPostId: id })
    
  }
  
  render() {
    
    const posts = this.state.error ? this.state.error : this.state.posts.map(post =>
      <Post
        post={post}
        key={post.id}
        clicked={() => this.selectPostHandler(post.id)}
      />)
    
    return (
      <section className="Posts">
        {posts}
      </section>
    )
  }
}

export default Posts