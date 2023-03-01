import React from 'react';
import { Box, Checkbox } from '@mui/material';
import TodoManager from '../../services/TodoManager';

const SelectAllTodos = (context) => {
	const { state, setState } = context;

	return (
		<Box>
			<Checkbox { ...{ checked: TodoManager.isAllChecked(context),
				onClick: ({ target: { checked }}) => setState({
					...state,
					todos: TodoManager.selectAll({ ...context, checked }),
				}) } }
			/>SELECT ALL
		</Box>);
};

export default SelectAllTodos;
