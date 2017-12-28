import React from 'react';

import './Post.css';

const post = (props) => (
    <article className="Post" onClick={props.clicked}>
        <p>{props.post.title}</p>
        <div className="Info">
            <div className="Author">Author: {props.post.author}</div>
        </div>
    </article>
);

export default post;