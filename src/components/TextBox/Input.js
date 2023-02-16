import { TextField } from '@mui/material';
import React from 'react';

const Input = (context) => {
	const { setState, state } = context;

	return (
		<TextField
			placeholder="To do"
			value={ state.inputValue }
			onChange={ ({ target: { value }}) => setState({
				...state,
				inputValue: value,
			}) }
		/>);
};

export default Input;
