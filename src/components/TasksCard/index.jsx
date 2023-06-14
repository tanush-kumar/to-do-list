import React, {useState} from 'react'
import Header from '../Header';
import TasksList from '../TasksList';
import './styles.scss'
import demoData from '../../demo-data'
import AddModal from '../Modals/AddModal';

const TasksCard = () => {
    const [adddModal, setAddModal] = useState(true);
    const [tasks, setTasks] = useState(demoData);
    const addTask = () => {
        
    }

  return (
		<div className='tasks-card'>
			<Header />
			<TasksList tasks={tasks} />
			{adddModal && <AddModal />}
		</div>
  );
}

export default TasksCard