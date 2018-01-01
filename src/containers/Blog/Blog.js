import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom'
import Posts from './Posts/Posts'
import NewPost from './NewPost/NewPost'
import './Blog.css';

class Blog extends Component {
  
  render() {
    
    
    return (
      <div className='Blog'>
        <header>
          <nav>
            <ul>
              <li><NavLink to='/' exact activeClassName='orange'>Home</NavLink></li>
              <li><NavLink
                to={{
                pathname: '/new-post',
                hash: '#submit',
                search: '?quick-submit=true'
              }}
                activeClassName='customStyle'
                activeStyle={{
                  color: '#fa92ff',
                  textDecoration: 'underline'
                }}
              >New Post</NavLink></li>
            </ul>
          </nav>
        </header>
        {/*<Route path='/' exact render={() => <h1>Main</h1>}/>*/}
        {/*<Route path='/' exact render={() => <h1>Main 77</h1>}/>*/}
        
        <Route path='/' exact component={Posts}/>
        <Route path='/new-post'component={NewPost}/>

      </div>
    );
  }
}

export default Blog;