import React from 'react';

export default function Chat (props) {
    return (
        <section>
            <h1>{props.type}</h1>
            <h2>{props.message}</h2>
            <p>{props.time}</p>
            <p>{props.timestamp}</p>
        </section>
    )
}