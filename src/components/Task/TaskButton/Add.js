import React from 'react';
import { Button } from '@mui/material';
import TaskManager from '../../../services/TaskManager';

const Add = (context) => {
	const { state: { todos }, state, setState } = context;
	const { data: task } = context;

	return (
		<Button
			{ ...{ variant: 'contained',
				color: 'error',
				size: 'small',
				onClick: () => setState({
					...state,
					todos: [...todos, task],
					tasks: TaskManager.removeTask(context),
				}) } }
		>+</Button>);
};

export default Add;
