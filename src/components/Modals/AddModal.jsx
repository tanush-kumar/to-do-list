import React from 'react'
import Modal from './Layout/MoadalLayout'

const AddModal = () => {
  return (
		<Modal>
			<div className='add-modal'>
				<input type='text' placeholder='Title'/>
				<input type='text' placeholder='Description'/>
                <button>Add Task</button>
			</div>
		</Modal>
  );
}

export default AddModal