import React from 'react';
import { TextField } from '@mui/material';

const TodoInput = (context) => {
	const { setState, state } = context;

	return (
		<TextField { ...{ placeholder: 'To do',
			value: state.inputValue,
			onChange: ({ target: { value }}) => setState({
				...state,
				inputValue: value,
			}) } }
		/>);
};

export default TodoInput;