import { Box } from '@mui/material';
import React from 'react';
import TodoInput from './TextBox/TodoInput';
import TodoList from './TodoList';
import ActionButton from './Button/ActionButton';
import ClearCompletedTodos from './Button/ClearCompletedTodos';
import SelectAllTodos from './Button/SelectAllTodos';

const Todos = (context) =>
	<Box>
		<ActionButton { ...context }/>
		<TodoInput { ...context }/>
		<TodoList { ...context }/>
		<SelectAllTodos { ...context }/>
		<ClearCompletedTodos { ...context }/>
	</Box>;

export default Todos;
