import React from 'react';

export default function Stage (props) {
    return (
        <section className="On-Stage">
            <h1>{props.name}</h1>
            <img src={props.avatar} />
        </section>
    )
}