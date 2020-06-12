import React from 'react';

const PostItem = (props) => {
    return(
        <div className="container">
            <p><strong>PostItem:</strong> {props.match.params.id}</p>
        </div>
    )
}

export default PostItem;