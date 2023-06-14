import React from 'react';
import Modal from './Layout/MoadalLayout';

const DeleteModal = (props) => {
	return (
		<Modal onClose={props.onClose}>
			<div className='delete-modal'>
				<p>Are you sure?</p>
				<div className='add-button' onClick={()=>{
                    props.deleteCard();
                    props.onClose(false)
                }}>
					Yes delete
				</div>
			</div>
		</Modal>
	);
};

export default DeleteModal;
