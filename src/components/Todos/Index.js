import { Box } from '@mui/material';
import React from 'react';
import TodoInput from './TextBox/TodoInput';
import ActionButton from './Buttons/ActionButton';
import ClearCompletedTodos from './Buttons/ClearCompletedTodos';
import SelectAllTodos from './Buttons/SelectAllTodos';
import TodoList from './Tabs/TodoList';

const Todos = (context) =>
	<Box>
		<ActionButton { ...context }/>
		<TodoInput { ...context }/>
		<TodoList { ...context }/>
		<SelectAllTodos { ...context }/>
		<ClearCompletedTodos { ...context }/>
	</Box>;

export default Todos;
