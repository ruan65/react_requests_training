import React from 'react';

import './Post.css';

const post = (props) => (
    <article className="Post">
        <p>{props.post.title}</p>
        <div className="Info">
            <div className="Author">Author</div>
        </div>
    </article>
);

export default post;