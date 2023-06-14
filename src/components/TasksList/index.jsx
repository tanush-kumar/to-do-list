import React from 'react';
import Task from '../Task';
import './styles.scss';

const TasksList = (props) => {
	const allTasks = props.tasks.map((task) => {
		return <Task task={task} />;
	});

	return <div className='tasks-list'>{allTasks}</div>;
};

export default TasksList;
