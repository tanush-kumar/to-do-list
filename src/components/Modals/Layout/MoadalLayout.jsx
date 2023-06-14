import React from 'react';
import '../styles.scss';

const Modal = (props) => {
	return (
		<div className='modal'>
			<div
				className='modal-overlay'
				onClick={() => {
					props.onClose(false);
				}}
			></div>
			<div className='modal-card'>{props.children}</div>
		</div>
	);
};

export default Modal;
