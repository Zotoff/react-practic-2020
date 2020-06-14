import React from 'react';
import {Link} from 'react-router-dom';

const Posts = (props) => {

    const ids = [
        {id:1, name:"Post1"},
        {id:1, name:"Post2"},
        {id:1, name:"Post3"}
    ]

    /*React 15*/

    // const list = ids.map((item,i)=>(
    //     <span key={item.id}>
    //         <Link to={`/posts/${item.id}`}>{item.name}</Link>
    //     </span>
    // ))

    // return(
    //     <div>
    //         Posts
    //         {list}
    //         <Link to={{
    //             pathname: `${props.match.url}/posts`
    //         }}>To profile</Link>
    //     </div>
    // )

    /*React 16*/

    return ids.map((item, i)=>(
        <div key={item.id}>
            <Link to={`/posts/${item.id}`}>{item.name}</Link>
        </div>
    ))
}

export default Posts;