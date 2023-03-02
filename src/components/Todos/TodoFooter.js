import { Box } from '@mui/material';
import React from 'react';
import ClearCompletedTodos from './Buttons/ClearCompletedTodos';

const TodoFooter = (context) =>
	<Box>
		<ClearCompletedTodos { ...context }/>
	</Box>;

export default TodoFooter;
