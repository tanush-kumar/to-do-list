import React, { useState } from 'react';
import Header from '../Header';
import TasksList from '../TasksList';
import './styles.scss';
import demoData from '../../demo-data';
import AddModal from '../Modals/AddModal';
import DeleteModal from '../Modals/DeleteModal';
import EditModal from '../Modals/EditModal';

const TasksCard = () => {
	const [adddModal, setAddModal] = useState(false);
	const [deleteModal, setDeleteModal] = useState(false);
	const [editModal, setEditModal] = useState(false);
	const [activeTask, setActiveTask] = useState(-1);
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

	const markAsDone = (index) => {
		setTasks((currentTasks) => {
			return currentTasks.map((task, i) => {
				return i !== index
					? task
					: { ...task, completed: !task.completed };
			});
		});
	};

	const deleteCard = () => {
		setTasks((currentTasks) => {
			return currentTasks.filter((task, i) => {
				return i !== activeTask;
			});
		});
	};

	const EditCard = (title, description) => {
		setTasks((currentTasks) => {
			return currentTasks.map((task, i) => {
				return i !== activeTask ? task : {...task, title, description};
			});
		});
	};

	return (
		<div className='tasks-card'>
			<Header setAddModal={setAddModal} />
			<TasksList
				tasks={tasks}
				deleteTask={deleteTask}
				markAsDone={markAsDone}
				setDeleteModal={setDeleteModal}
				setActiveTask={setActiveTask}
				setEditModal={setEditModal}
			/>
			{adddModal && <AddModal addTask={addTask} onClose={setAddModal} />}
			{deleteModal && (
				<DeleteModal deleteCard={deleteCard} onClose={setDeleteModal} />
			)}
			{editModal && (
				<EditModal
					onClose={setEditModal}
					task={tasks[activeTask]}
					EditCard={EditCard}
				/>
			)}
		</div>
	);
};

export default TasksCard;
