import React from 'react';
import { Button } from '@mui/material';
import TodoManager from '../../services/TodoManager';

const Update = (context) => {
	const { setState } = context;

	return (
		<Button
			variant="outlined"
			size="large"
			color="primary"
			onClick={ () => setState((state) => ({
				...state,
				todos: TodoManager.update(context),
				editTodo: false,
				inputValue: '',
			})) }
		>Update</Button>);
};

export default Update;
