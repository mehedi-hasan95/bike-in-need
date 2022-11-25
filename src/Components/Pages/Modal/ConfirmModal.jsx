import React from 'react';

const ConfirmModal = ({hedding, sucessBtn, denyBtn, email}) => {



    return (
        <div>
            <input type="checkbox" id="confirm-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{hedding}</h3>
                    <p className="py-4">{email}</p>
                    <div className="modal-action">
                        <button className='btn btn-primary'>{sucessBtn}</button>
                        <label htmlFor="confirm-modal" className="btn">{denyBtn}</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmModal;