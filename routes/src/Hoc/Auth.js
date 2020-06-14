import React from 'react'

export default function Auth(props) {
    return (
        <div>
            {props.authorized ? props.children : <p>Authorization failed</p>}
        </div>
    )
}
