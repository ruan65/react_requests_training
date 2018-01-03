import React, { Component } from 'react'
import axiosInstance from "../../../Axios";
import Post from '../../../components/Post/Post'
import './Posts.css'
import FullPost from "../FullPost/FullPost";
import { Route } from 'react-router-dom'

class Posts extends Component {
  
  state = {
    posts: []
  }
  
  componentDidMount() {
    
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
    
    // console.log('selected: ' + id)
    //
    // this.setState({ selectedPostId: id })
    
    this.props.history.push({pathname: '/posts/' + id})
    
  }
  
  render() {
    
    const posts = this.state.error ? this.state.error : this.state.posts.map(post => (
        <Post
          key={post.id}
          post={post}
          clicked={() => this.selectPostHandler(post.id)}
        />
      )
    )
    
    return (
      <div>
        <section className="Posts">
          {posts}
        </section>
        <Route path={this.props.match.url + '/:postId'} exact component={FullPost}/>
      </div>
      
    )
  }
}

export default Posts