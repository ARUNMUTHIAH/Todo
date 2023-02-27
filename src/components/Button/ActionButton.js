import React from 'react';
import Add from './Add';
import Update from './Update';

const ActionButton = (context) => {
	const { state: { editTodo }} = context;

	return editTodo ? <Update { ...context }/> : 	<Add { ...context }/>;
};

export default ActionButton;
