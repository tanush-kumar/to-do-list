import React, { useState } from 'react';
import Modal from './Layout/MoadalLayout';
import { BsPlusCircleFill } from 'react-icons/bs';
import './styles.scss'

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
                <p>Enter task details...</p>
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
						props.addTask(inputData.title, inputData.description);
						props.onClose(false);
					}}
				>
					<span>Add a task</span> <BsPlusCircleFill />
				</div>
			</div>
		</Modal>
	);
};

export default AddModal;
