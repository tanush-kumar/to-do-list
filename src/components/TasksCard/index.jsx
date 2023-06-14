import React, { useState } from 'react';
import Header from '../Header';
import TasksList from '../TasksList';
import './styles.scss';
import demoData from '../../demo-data';
import AddModal from '../Modals/AddModal';

const TasksCard = () => {
	const [adddModal, setAddModal] = useState(false);
	const [tasks, setTasks] = useState(demoData);

	const addTask = (title, description) => {
		setTasks((currentTasks) => {
			return [...currentTasks, { title, description, completed: false }];
		});
	};

	const deleteTask = (index) => {
		setTasks((currentTasks) => {
			return currentTasks.filter((task, i) => {
				return i !== index;
			});
		});
	};

	return (
		<div className='tasks-card'>
			<Header setAddModal={setAddModal} />
			<TasksList tasks={tasks} deleteTask={deleteTask} />
			{adddModal && <AddModal addTask={addTask} onClose={setAddModal} />}
		</div>
	);
};

export default TasksCard;
