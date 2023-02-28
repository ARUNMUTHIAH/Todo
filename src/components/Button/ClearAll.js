import React from 'react';
import { Box, Button } from '@mui/material';
import TodoManager from '../../services/TodoManager';

const ClearAll = (context) => {
	const { setState, state } = context;

	return (
		<Box>
			<Button
				{ ...{
					variant: 'outlined',
					color: 'primary',
					size: 'large',
					onClick: () => setState({
						...state,
						todos: TodoManager.clearCompletedTodos(context),
					}),
				} }
			>Clear All</Button>
		</Box>);
};

export default ClearAll;
