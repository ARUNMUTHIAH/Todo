import { Box, Button } from '@mui/material';
import React from 'react';
import TodoManager from '../../services/TodoManager';

const ClearAll = (context) => {
	const { setState, state, state: { todos }} = context;

	return (
		todos.length
			&& <Box>
				<Button
					{ ...{
						variant: 'contained',
						color: 'primary',
						size: 'large',
					} }
					onClick={ () => setState({
						...state,
						todos: TodoManager.clearAllFilter(context),
					}) }
				>Clear All</Button>
			</Box>);
};

export default ClearAll;
