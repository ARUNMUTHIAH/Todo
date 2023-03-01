import React from 'react';
import { Button } from '@mui/material';
import TaskManager from '../../../services/TaskManager';
import DeleteIcon from '@mui/icons-material/Delete';

const Delete = (context) => {
	const { setState } = context;

	return (
		<Button
			{ ...{
				className: 'taskDelete',
				variant: 'contained',
				color: 'error',
				size: 'large',
				startIcon: <DeleteIcon/>,
				onClick: () => setState((state) => ({
					...state,
					tasks: TaskManager.removeTodo(context),
				})),
			} }
		> DELETE </Button>);
};

export default Delete;
