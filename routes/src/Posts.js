import React from 'react';
import {Link} from 'react-router-dom';

const Posts = (props) => {
    return(
        <div>
            Posts
            <Link to={{
                pathname: `${props.match.url}/posts`
            }}>To profile</Link>
        </div>
    )
}

export default Posts;