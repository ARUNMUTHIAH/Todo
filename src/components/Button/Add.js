/* eslint-disable no-magic-numbers */
import { Box, Button } from '@mui/material';
import React from 'react';
import TodoManager from '../../services/TodoManager';

const Add = (context) => {
	const { setState, state: { todo }} = context;

	return (
		<Box>
			<Button
				variant="outlined"
				size="large"
				onClick={ () => setState((state) => ({
					...state,
					todo: [...todo, TodoManager.addId(context)],
				})) }
			>ADD</Button>

		</Box>);
};

export default Add;
