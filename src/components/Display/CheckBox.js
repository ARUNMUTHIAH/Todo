import { Checkbox } from '@mui/material';
import React from 'react';
import TodoManager from '../../services/TodoManager';

const CheckBoxes = (context) => {
	const { setState, state, data: object } = context;
	const { isActive } = object;

	return (
		<Checkbox
			checked={ isActive }
			onClick={ () => setState({
				...state,
				todo: TodoManager.toggleIsActive({ ...{ ...context,
					data: object }}),
			}) }
		/>
	);
};

export default CheckBoxes;
