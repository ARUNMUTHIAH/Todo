import React from 'react';
import { Box } from '@mui/material';
import TodoList from './Tabs/TodoList';

const TodoBody = (context) =>
	<Box class="todoBody">
		<TodoList { ...context }/>
	</Box>;

export default TodoBody;
