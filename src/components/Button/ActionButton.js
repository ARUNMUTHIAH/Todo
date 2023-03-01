import React from 'react';
import AddTodo from './AddTodo';
import UpdateTodo from './UpdateTodo';

const ActionButton = (context) => {
	const { state: { editTodo }} = context;

	return (
		editTodo
			? <UpdateTodo { ...context }/>
			: <AddTodo { ...context }/>
	);
};

export default ActionButton;
