import React from 'react';
import './styles.scss';
import { BsCheckCircleFill } from 'react-icons/bs';
import { MdDelete } from 'react-icons/md';
import { MdEditSquare } from 'react-icons/md';

const Task = ({
	task,
	index,
	deleteTask,
	markAsDone,
	setDeleteModal,
	setActiveTask,
	setEditModal,
}) => {
	const { title, description, completed } = task;
	return (
		<div className='task'>
			<div className='task-top'>
				<div className='task-top-left'>
					<div>{title}</div>
					<div className='description'>{description}</div>
				</div>
				<div
					onClick={() => {
						markAsDone(index);
					}}
					className={`task-top-right${completed ? ' blue' : ''}`}
				>
					<BsCheckCircleFill />
				</div>
			</div>
			<div className='line'></div>
			<div className='task-bottom'>
				<button
					className='mark-button add-button'
					onClick={() => {
						markAsDone(index);
					}}
				>
					{!completed ? (
						<>
							<span>Mark as done</span> <BsCheckCircleFill />
						</>
					) : (
						<>Unmark</>
					)}
				</button>
				<div className='delete-edit-con'>
					<div
						onClick={() => {
							setEditModal(true);
							setActiveTask(index);
						}}
					>
						<MdEditSquare />
					</div>
					<div
						className='delete'
						onClick={() => {
							setDeleteModal(true);
							setActiveTask(index);
						}}
					>
						<MdDelete />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Task;
