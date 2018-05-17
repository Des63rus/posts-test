import React from 'react';
import md5 from 'md5';

export default ({ post }) => {
    let imageUrl = `https://www.gravatar.com/avatar/${md5(post.email)}`;
    return (
        <div className="card darken-1 horizontal" key={post._id}>
            <div className="card-image">
                <img src={imageUrl} />
            </div>
            <div className="card-stacked">
                <div className="card-content">

                    <span className="card-title">{post.email}</span>
                    <p>
                        {post.text}
                    </p>
                </div>
            </div>
        </div>
    );
};


