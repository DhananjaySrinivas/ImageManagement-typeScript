import { Fragment, MouseEventHandler, ReactChild, ReactFragment, ReactPortal } from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.css';

function Drop(props: { onClose: MouseEventHandler<HTMLButtonElement> | undefined; }) {
     return (
        <div className={classes.backdrop} >
             <button className={classes.btn} onClick={props.onClose}>X</button>
            </div>
    )
}

function ImageAdd(props: { children: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; onClose: MouseEventHandler<HTMLButtonElement> | undefined; }) {
    return (
        <div className= {classes.modal}>
            <div className= {classes.content}>
                {props.children}
            </div>
            <button className={classes.btn} onClick={props.onClose}>X</button>
        </div>
    )
}

const Element:any = document.getElementById('ImageAdd');

function Modal(props: { onClose: MouseEventHandler<HTMLButtonElement> | undefined; children: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; }) {
    return (
        <Fragment>
            {ReactDOM.createPortal(<Drop onClose= {props.onClose}/>, Element)}
            {ReactDOM.createPortal(<ImageAdd onClose={undefined}>{props.children}</ImageAdd>, Element)}
        </Fragment>
    );
}

export default Modal;