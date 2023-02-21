import { Checkbox } from '@mui/material';
import React from 'react';
import TodoManager from '../../services/TodoManager';

const SelectAll = (context) => {
	const { state, setState } = context;

	return (
		<Checkbox
			onClick={ ({ target: { checked }}) => setState({
				...state,
				todo: TodoManager.selectAll({ ...context, checked }),
			}) }
		/>);
};

export default SelectAll;
