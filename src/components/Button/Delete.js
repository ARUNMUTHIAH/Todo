import { Box, Button } from '@mui/material';
import React from 'react';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import TodoManager from '../../services/TodoManager';

const Delete = (context) => {
	const { setState } = context;

	return (
		<Box>
			<Button
				{ ...{
					variant: 'contained',
					color: 'error',
					size: 'small',
				} }
				onClick={ () => setState((state) => ({
					...state,
					todo: TodoManager.removeTodo(context),
				})) }
			>
				<DeleteForeverIcon/> </Button>
		</Box>);
};

export default Delete;
