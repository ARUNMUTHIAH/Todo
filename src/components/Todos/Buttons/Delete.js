import React from 'react';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import TodoManager from '../../../services/TodoManager';

const Delete = (context) => {
	const { setState } = context;

	return (
		<Button
			{ ...{
				variant: 'outlined',
				startIcon: <DeleteIcon/>,
				size: 'large',
				onClick: () => setState((state) => ({
					...state,
					todos: TodoManager.removeTodo(context),
				})),
			} }
		>DELETE</Button>);
};

export default Delete;
