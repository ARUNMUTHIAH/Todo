import { Box } from '@mui/material';
import React from 'react';
import TodoManager from '../../../services/TodoManager';
import Delete from '../Button/Delete';
import CheckBoxes from './CheckBox';
import Text from './Text';

const Display = (context) => {
	const { state: { filter }} = context;
	const filteredTodos = TodoManager.filteredTodos[filter](context);

	return (
		filteredTodos.map((todo, key) =>
			<Box key={ key } class="container">
				<CheckBoxes { ...{ ...context, data: todo } }/>
				<Text { ...{ ...context, data: todo } }/>
				<Delete { ...{ ...context, data: todo } }/>
			</Box>));
};

export default Display;
