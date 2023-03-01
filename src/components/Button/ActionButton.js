import React from 'react';
import AddTodo from './Add';
import UpdateTodo from './Update';

const ActionButton = (context) => {
	const { state: { editTodo }} = context;

	return (
		editTodo
			? <UpdateTodo { ...context }/>
			: <AddTodo { ...context }/>
	);
};

export default ActionButton;
