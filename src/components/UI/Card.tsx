import { ReactChild, ReactFragment, ReactPortal } from 'react';
import classes from './Card.module.css';

function Card(props: { children: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; }) {
    return (
        <div className= {classes.card}>
            { props.children }
        </div>
    )
}

export default Card;