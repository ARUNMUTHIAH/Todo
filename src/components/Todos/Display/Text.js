import React from 'react';
import { Box } from '@mui/material';

const Text = (context) => {
	const { setState, data: todo } = context;

	return (
		<Box { ...{ class: 'display',
			onClick: () => setState((state) => ({
				...state,
				inputValue: todo.value,
				editTodo: todo,
			})) } }
		>{todo.value}
		</Box>);
};

export default Text;
