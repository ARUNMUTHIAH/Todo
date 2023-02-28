import React from 'react';
import { Button } from '@mui/material';
import TaskManager from '../../../services/TaskManager';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const Add = (context) => {
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

export default Add;

// <IconButton color:"primary" aria-label:"add to shopping cart">
//   <AddShoppingCartIcon />
// </IconButton>
