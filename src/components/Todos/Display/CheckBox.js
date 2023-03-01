import { Checkbox } from '@mui/material';
import React from 'react';
import TodoManager from '../../../services/TodoManager';

const CheckBoxes = (context) => {
	const { setState, state, data: todo } = context;
	const { isActive } = todo;

	return (
		<Checkbox { ...{ checked: isActive,
			onClick: () => setState({
				...state,
				todos: TodoManager.isChecked({ ...{ ...context,
					data: todo }}),
			}) } }
		/>
	);
};

export default CheckBoxes;
