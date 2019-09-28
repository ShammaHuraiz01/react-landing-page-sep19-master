import React from 'react';

const Modal = (prop) => {
<<<<<<< HEAD

    return(
        <div className="modal-container">
            <div className="modal">
                <button 
                onClick={prop.modalCloseHandler}
                className="btn btn-danger">Close</button>

                {prop.children}
=======
    return(
        <div className="modal-container">
            <div className="modal">
                {prop.children}
                <button 
                onClick={prop.onClose}
                className="btn btn-danger">Close</button>
>>>>>>> Setup for app.
            </div>
        </div>
    )
}

export default Modal;