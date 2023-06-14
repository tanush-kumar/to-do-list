import React from 'react'
import './styles.scss'

const Task = ({task}) => {
 const {title, description, completed} = task;
  return (
		<div className='task'>
			<div>
				<div>
					<div>{title}</div>
					<div>{description}</div>
				</div>
				<div>{completed ? 1 : 0}</div>
			</div>
            <div className='line'></div>
            <div>
                <button>Mark as done</button>
                <button>Del</button>
            </div>
		</div>
  );
}

export default Task