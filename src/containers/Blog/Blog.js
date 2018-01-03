import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom'
import Posts from './Posts/Posts'
import NewPost from './NewPost/NewPost'
import Script from '../Scripts/Script'
import './Blog.css';

class Blog extends Component {
  
  render() {
    
    return (
      <div className='Blog'>
        <header>
          <nav>
            <ul>
              <li><NavLink to='/posts' exact activeClassName='orange'>Posts</NavLink></li>
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
              <li><NavLink to='/scripts' activeClassName='orange'>Scripts</NavLink></li>
            </ul>
          </nav>
        </header>
        {/*<Route path='/' exact render={() => <h1>Main</h1>}/>*/}
        {/*<Route path='/' exact render={() => <h1>Main 77</h1>}/>*/}
        
        <Switch>
          <Route path='/new-post' exact component={NewPost}/>
          <Route path='/scripts' exact component={Script}/>
          <Route path='/posts' component={Posts}/>
        </Switch>
      </div>
    );
  }
}

export default Blog;