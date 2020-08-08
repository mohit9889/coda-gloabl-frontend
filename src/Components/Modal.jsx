import React from 'react';
import "../Styles/Modal.css";

const Modal = (props) => {
    const { selectedRecipe, setSelectedRecipe } = props;

    const handleClick = (e) => {
        if (e.target.classList.contains('custom-modal')) {
            setSelectedRecipe(null);
        }
    }

    return (
        <div className="custom-modal" onClick={handleClick}>
            <div className="row">
                <div className="image col-md-auto">
                    <img src={selectedRecipe.image} alt=""/>
                </div>
                <div className="content col-md-auto">
                    <h1>{selectedRecipe.name}</h1>
                    <p>Price: {selectedRecipe.price}</p>
                    <p>{selectedRecipe.description}</p>
                </div>
            </div>
        </div>
    );
}

export default Modal;
