import React from 'react';
import { Button } from '@mui/material';
import TodoManager from '../../services/TodoManager';

const AddTodo = (context) => {
	const { setState, state: { todos }} = context;

	return (
		<Button { ...{ variant: 'outlined',
			size: 'large',
			color: 'primary',
			disabled: TodoManager.isEmpty(context),
			onClick: () => setState((state) => ({
				...state,
				todos: [...todos, TodoManager.addTodo(context)],
				inputValue: '',
			})) } }
		>ADD</Button>);
};

export default AddTodo;
