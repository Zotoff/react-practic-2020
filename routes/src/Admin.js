import React from 'react';
import {Redirect} from 'react-router-dom';

const Admin = (props) => {
    if(props.admin) {
        props.history.push('/');
    }
    console.log(props);
    return(
        <div className="container">
            <div className="col">
                <h3>Admin page</h3>
            </div>
        </div>
    )
}

export default Admin;