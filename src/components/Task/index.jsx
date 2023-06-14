import React from 'react';
import './styles.scss';
import { BsCheckCircleFill } from 'react-icons/bs';
import { MdDelete } from 'react-icons/md';

const Task = ({ task, index, deleteTask, markAsDone}) => {
	const { title, description, completed } = task;
	return (
		<div className='task'>
			<div className='task-top'>
				<div className='task-top-left'>
					<div>{title}</div>
					<div className='description'>{description}</div>
				</div>
				<div className={`task-top-right${completed ? ' blue' : ''}`}>
					<BsCheckCircleFill />
				</div>
			</div>
			<div className='line'></div>
			<div className='task-bottom'>
				<button
					onClick={() => {
						markAsDone(index);
					}}
				>
					{!completed ? (
						<>
							Mark as done <BsCheckCircleFill />
						</>
					) : (
						<>Unmark</>
					)}
				</button>
				<div
					className='delete'
					onClick={() => {
						deleteTask(index);
					}}
				>
					<MdDelete />
				</div>
			</div>
		</div>
	);
};

export default Task;
