import React, {useState} from 'react'
import Header from '../Header';
import TasksList from '../TasksList';
import './styles.scss'

const TasksCard = () => {

    const [tasks, setTasks] = useState([{title: "My first task", description: "This is my info", completed: false}]);

  return (
    <div className='tasks-card'>
        <Header/>
        <TasksList tasks={tasks}/>
    </div>
  )
}

export default TasksCard