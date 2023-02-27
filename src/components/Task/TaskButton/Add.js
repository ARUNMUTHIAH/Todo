import React from 'react';
import { Button } from '@mui/material';
import { peek } from '@laufire/utils/debug';

const Add = (context) => {
	const { state: { todos }, state, setState } = context;
	const { data: task } = context;

	peek(task);
	return (
		<Button
			{ ...{
				variant: 'contained',
				color: 'error',
				size: 'small',
			} }
			onClick={ () => setState({
				...state,
				todos: [...todos, task],
			}) }
		>+</Button>);
};

export default Add;
