import { Box, Checkbox } from '@mui/material';
import React from 'react';
import TodoManager from '../../services/TodoManager';

const SelectAll = (context) => {
	const { state, setState } = context;

	return (
		<Box>
			<Checkbox
				checked={ TodoManager.isChecked(context) }
				onClick={ ({ target: { checked }}) => setState({
					...state,
					todos: TodoManager.selectAll({ ...context, checked }),
				}) }
			/>SELECT ALL
		</Box>);
};

export default SelectAll;
