import { Box } from '@mui/material';
import React from 'react';
import ActionButton from './Buttons/ActionButton';
import SelectAllTodos from './Buttons/SelectAllTodos';
import TodoInput from './TextBox/TodoInput';

const TodoHeader = (context) =>
	<Box class="todoHeader">
		<ActionButton { ...context }/>
		<TodoInput { ...context }/>
		<SelectAllTodos { ...context }/>
	</Box>;

export default TodoHeader;
