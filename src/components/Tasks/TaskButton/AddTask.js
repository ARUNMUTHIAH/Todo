import React from 'react';
import { Button } from '@mui/material';
import TaskManager from '../../../services/TaskManager';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const AddTask = (context) => {
	const { state: { todos }, state, setState } = context;
	const { data: task } = context;

	return (
		<Button
			{ ...{ variant: 'contained',
				color: 'error',
				size: 'large',
				startIcon: <AddShoppingCartIcon/>,
				onClick: () => setState({
					...state,
					todos: [...todos, task],
					tasks: TaskManager.removeTask(context),
				}) } }
		>ADD</Button>);
};

export default AddTask;
