import { Box, Checkbox } from '@mui/material';
import React from 'react';
import TodoManager from '../../services/TodoManager';

const SelectAll = (context) => {
	const { state, setState } = context;
	const { todo } = state;

	return (
		<Box>
			<Checkbox
				checked={ todo.length && todo.every((data) => data.isActive) }
				onClick={ ({ target: { checked }}) => setState({
					...state,
					todo: TodoManager.selectAll({ ...context, checked }),
				}) }
			/>SELECT ALL
		</Box>);
};

export default SelectAll;
