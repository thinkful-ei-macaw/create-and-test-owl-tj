import React from 'react';

export default function Participant (props) {
    
    const session = props.inSession ? <p className="in">in session</p> : <p className="left">left</p>;
    
    return (

        <section className="Person">
            <h1>{props.name}</h1>
            <img src={props.avatar} alt={props.name} />
            {session}
        </section>
    )
}