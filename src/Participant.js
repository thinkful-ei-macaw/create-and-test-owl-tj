import React from 'react';

export default function Participant (props) {
    return (
        <section className="Person">
            <h1>{props.name}</h1>
            <img src={props.avatar} />
        </section>
    )
}