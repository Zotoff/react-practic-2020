import React from 'react'

export default function Card(props) {
    const style = {
        background: '#f8f8f8'
    }
    return (
        <div style={style} className="card">
            Card
            {props.children}
        </div>
    )
}
