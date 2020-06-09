import React from 'react';
import NewsListItem from './NewsListItem';

const NewsList = (props) => {

    const news = props.news.map((item)=>(
        <NewsListItem item={item} key={item.id}/>
    ));

    return(
        <div>
            {
                news
            }
        </div>
    )
}

export default NewsList;