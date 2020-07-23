import React from "react";
import './Loader.module.css';

const Loader = props => {
    return (
        <div className="lds-ripple">
        <div></div><div></div>
        </div>
    )
}

export default Loader;