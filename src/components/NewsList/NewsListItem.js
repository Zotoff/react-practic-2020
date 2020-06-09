import React from 'react';

const NewsListItem = ({item}) => {
    return(
        <div>
            <h3>{item.title}</h3>
            <p>{item.feed}</p>
        </div>
    )
}

export default NewsListItem;