import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
import axios from 'axios'

class Blog extends Component {
  
  state = {
    posts: [],
    selectedPostId: null,
    error: null
  }
  
  componentDidMount() {
    console.log('component did mount........')
    
    axios.get('/posts')
      .then(response => {
        
        const posts = response.data.slice(0, 5)
        
        const updatedPosts = posts.map(post => ({ ...post, author: 'Andreyka' })
        )
        this.setState({ posts: updatedPosts })
        
        console.log('State: ' + this.state)
      })
      .catch(err => {
        // console.log(err)
        
        this.setState({error: err.toString()})
      })
  }
  
  selectPostHandler( id ) {
    
    console.log('selected: ' + id)
    
    this.setState({ selectedPostId: id })
    
  }
  
  render() {
    
    console.log(this.state.selectedPost)
    
    
    const posts = this.state.error ? this.state.error : this.state.posts.map(post =>
      <Post
        post={post}
        key={post.id}
        clicked={() => this.selectPostHandler(post.id)}
      />)
    
    return (
      <div>
        <section className="Posts">
          {posts}
        </section>
        <section>
          <FullPost id={this.state.selectedPostId}/>
        </section>
        <section>
          <NewPost/>
        </section>
      </div>
    );
  }
}

export default Blog;