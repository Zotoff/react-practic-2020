import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {URL_BLOCKS} from '../utils/paths';
import {Link} from 'react-router-dom';

export default function HomeArticles() {

    let [articles, setArticles] = useState([]);

    useEffect(() => {
        const fetchArticles = async ()=>{
        const response = await axios.get(`${URL_BLOCKS}?_limit=6&_order=asc&_sort=id`);
        setArticles(response.data);
        }
        fetchArticles();
    }, [])

    const showArticleBlocks = () => {
        const rows = [...Array(Math.ceil(articles.length / 3))]
        const articlesRows = rows.map(
            (row, i) => articles.slice(i*3, i*3+3)
        );
        const generatedArticles = articlesRows.map((row, i)=>(
            <div className="row" key={i}>
                {
                    row.map(article=>(
                        <div className="four columns block_item" key={article.id}>
                            <Link to={`/article/${article.id}`}>
                                <div className="top">
                                    <div className="veil"></div>
                                    <div
                                        className="block_image"
                                        style={{
                                            background:`url(/images/blocks/${article.image}) no-repeat center`
                                        }}
                                    ></div>
                                    <div className="content">
                                        <h3>{article.title}</h3>
                                        <div>
                                            {article.desc}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))
                }
            </div>
        ))

        return generatedArticles;
    }
    return (
        <div>
            {showArticleBlocks()}
        </div>
    )
}
