import React, { useState } from 'react';
import Modal from './Layout/MoadalLayout';

const AddModal = (props) => {
	const [inputData, setInputData] = useState({
		title: '',
		description: '',
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
			<div className='add-modal'>
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
				<button
					onClick={() => {
						props.addTask(inputData.title, inputData.description)
                        props.onClose(false);
					}}
				>
					Add Task
				</button>
			</div>
		</Modal>
	);
};

export default AddModal;
