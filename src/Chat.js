import React from 'react';
import store from './Store';

export default function Chat (props) {

    let message;
    let input = props.type;

    switch(input) {
        case 'message':
            message = <p>{props.message}</p>;
            break;
        case 'thumbs-up':
            message = <p>gave a thumbs up<span></span></p>;
            break;
        case 'thumbs-down':
            message = <p>gave a thumbs down</p>;
            break;
        case 'raise-hand':
            message = <p>raised their hand </p>;
            break;
        case 'clap':
            message = <p>clapped </p>;
            break;
        case 'join':
            message = <p>joined</p>;
            break;
        case 'leave':
            message = <p>left </p>;
            break;
        case 'join-stage':
            message = <p>joined the stage</p>;
            break;
        case 'leave-stage':
            message = <p>left the stage</p>;
            break;
        default:
            break;
    }

    const id = store.participants.filter(list => list[props.id]);

    console.log(id);

    return (
        <section>
            <h1>{id}</h1>
            <h2>{message}</h2>
            <p>{props.time}</p>
            <p>{props.timestamp}</p>
        </section>
    )
}