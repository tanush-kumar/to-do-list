import React, { useState } from 'react';
import './styles.scss'
import Modal from './Layout/MoadalLayout';

const EditModal = (props) => {

	const [inputData, setInputData] = useState({
		title: props.task.title,
		description: props.task.description,
	});

	const handleChange = (event) => {
		setInputData((current) => {
			return {
				...current,
				[event.target.name]: event.target.value,
			};
		});
	};

  return (
		<Modal onClose={props.onClose}>
			<div className='edit-modal add-modal'>
				<p>Enter updated info...</p>
				<input
					type='text'
					placeholder='Title'
					value={inputData.title}
					name='title'
					onChange={(e) => {
						handleChange(e);
					}}
				/>
				<input
					type='text'
					placeholder='Description'
					value={inputData.description}
					name='description'
					onChange={(e) => {
						handleChange(e);
					}}
				/>
				<div
					className='add-button'
					onClick={() => {
						props.EditCard(inputData.title, inputData.description);
						props.onClose(false);
					}}
				>
					<span>Save</span>
				</div>
			</div>
		</Modal>
  );
}

export default EditModal