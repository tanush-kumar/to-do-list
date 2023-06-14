import React from 'react';
import './styles.scss';

const Task = ({ task, index, deleteTask }) => {
	const { title, description, completed } = task;
	return (
		<div className='task'>
			<div className='task-top'>
				<div className='task-top-left'>
					<div>{title}</div>
					<div>{description}</div>
				</div>
				<div className='task-top-right'>{completed ? 1 : 0}</div>
			</div>
			<div className='line'></div>
			<div>
				<button>Mark as done</button>
				<button
					onClick={() => {
						deleteTask(index);
					}}
				>
					Del
				</button>
			</div>
		</div>
	);
};

export default Task;
