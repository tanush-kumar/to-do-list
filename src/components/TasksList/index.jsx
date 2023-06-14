import React from 'react';
import Task from '../Task';
import './styles.scss';

const TasksList = (props) => {
	const allTasks = props.tasks.map((task, index) => {
		return (
			<Task
				task={task}
				index={index}
				deleteTask={props.deleteTask}
				markAsDone={props.markAsDone}
				setDeleteModal={props.setDeleteModal}
				setActiveTask={props.setActiveTask}
				setEditModal={props.setEditModal}
			/>
		);
	});

	return <div className='tasks-list'>{allTasks}</div>;
};

export default TasksList;
