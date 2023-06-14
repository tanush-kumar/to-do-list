import React from 'react';
import './styles.scss';
import { BsPlusCircleFill } from 'react-icons/bs';

const Header = (props) => {
	return (
		<div className='header'>
			<button
				className='add-button'
				onClick={() => {
					props.setAddModal(true);
				}}
			>
				<span>Add a task</span> <BsPlusCircleFill />
			</button>
		</div>
	);
};

export default Header;
