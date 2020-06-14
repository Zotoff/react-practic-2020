import React from 'react';
import Card from './Hoc/Card';
import Auth from './Hoc/Auth';
import {Link} from 'react-router-dom';

export default function Profile(props) {
    const AUTH = false;
    return (
        <div className="container">
            <Auth authorized={AUTH}>
                Profile
                <hr />
                <Card>
                    <Link to="/">Home</Link>
                </Card>
            </Auth>
        </div>
    )
}
