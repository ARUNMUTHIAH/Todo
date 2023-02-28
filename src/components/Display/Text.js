import { Box } from '@mui/material';
import React from 'react';

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
