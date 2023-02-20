import React from 'react';
import { Button } from '@mui/material';
import TodoManager from '../../services/TodoManager';

const Update = (context) => {
	const { setState } = context;

	return (
		<Button
			variant="outlined"
			size="large"
			color="secondary"
			onClick={ () => setState((state) => ({
				...state,
				todo: TodoManager.update(context),
				editTodo: false,
				inputValue: '',
			})) }
		>Update</Button>);
};

export default Update;
