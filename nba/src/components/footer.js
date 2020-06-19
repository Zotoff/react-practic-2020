import React from 'react';
import {Link} from 'react-router-dom';

export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="three columns">
                        <Link to="/" className="logo"><span></span></Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
