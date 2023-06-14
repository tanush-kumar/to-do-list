import React from 'react';
import './styles.scss';

const Header = (props) => {
	return (
		<div className='header'>
			<button
				onClick={() => {
					props.setAddModal(true);
				}}
			>
				Add a task
			</button>
		</div>
	);
};

export default Header;
