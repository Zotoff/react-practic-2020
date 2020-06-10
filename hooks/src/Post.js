import React, {useEffect} from 'react';

const Post = ({item}) => {
    useEffect(()=>{
        console.log('Component Mount');
    },[]);
    return(
        <div className='alert alert-success'>
            <h3>{item.name}</h3>
            <p>{item.body}</p>
        </div>
    )
}

export default Post;