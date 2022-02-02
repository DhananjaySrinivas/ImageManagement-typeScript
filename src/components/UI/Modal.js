import { Fragment } from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.css';

function Drop(props) {
     return (
        <div className={classes.backdrop} >
             <button className={classes.btn} onClick={props.onClose}>X</button>
            </div>
    )
}

function ImageAdd(props) {
    return (
        <div className= {classes.modal}>
            <div className= {classes.content}>
                {props.children}
            </div>
            <button className={classes.btn} onClick={props.onClose}>X</button>
        </div>
    )
}

const Element = document.getElementById('ImageAdd');

function Modal(props) {
    return (
        <Fragment>
            {ReactDOM.createPortal(<Drop onClose= {props.onClose}/>, Element)}
            {ReactDOM.createPortal(<ImageAdd>{props.children}</ImageAdd>, Element)}
        </Fragment>
    );
}

export default Modal;