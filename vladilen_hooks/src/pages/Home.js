import React from 'react';
import Search from '../components/Search/Search';
import Card from '../components/Card/Card';


export default function Home() {
    return (
        <div className="container">
            <Search />
            <div className="row">
                <div className="col-sm-4 mb-4">
                    <Card />
                </div>
            </div>
        </div>
    )
}
