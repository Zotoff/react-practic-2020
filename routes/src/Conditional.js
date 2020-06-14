import React from 'react';

const Conditional = () => {

    const VALUE = true;

    const Switch = () => {
        return( VALUE ? <h3>True</h3> : <h3>False</h3>)
    }

    return(
        <div className="container">
            Conditional
            {Switch()}
        </div>
    )
}

export default Conditional;