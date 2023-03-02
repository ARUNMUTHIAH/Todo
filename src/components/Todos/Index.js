import React from 'react';
import { Box } from '@mui/material';
import TodoHeader from './TodoHeader';
import TodoBody from './TodoBody';
import TodoFooter from './TodoFooter';

const Todos = (context) =>
	<Box className="todos">
		<TodoHeader { ...context }/>
		<TodoBody { ...context }/>
		<TodoFooter { ...context }/>
	</Box>;

export default Todos;
