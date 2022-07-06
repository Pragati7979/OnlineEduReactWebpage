import React from "react";
import ReactDOM from "react-dom";
import './Modal.css'
const Modal = (props) => {
    const closeModal = props.showModalHandler
    const url = "https://www.youtube.com/c/ThapaTechnical"
    
        

    return ReactDOM.createPortal(
        <div className="modal-overlay" onClick={closeModal}>
            <div
                onClick={(e) => { e.stopPropagation() }}
                className="modal-container">
                <div className="upper-section">
                    <h1>Welcome to Technical Thappa 💖</h1>
                    <p className="close" onClick={closeModal}>&#10060;</p>
                </div>
                <div className="middle-section">
                    <p>Watch out his great courses available for free on Youtube.</p>
                    <h3>Click on subscribe button to join his youtube channel !!</h3>
                </div>
                <div className="lower-section">
                <button className="modal-btn btn-red" onClick={closeModal}>close</button>
                    <a href={url} target="_blank" rel="noreferrer" className="modal-btn btn-green">Subscribe to Technical Thapa</a>  
                </div>
            </div>
        </div>,
        document.getElementById('modal')
    )
}

export default Modal