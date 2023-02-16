import { TextField } from '@mui/material';
import React from 'react';

const InputBox = (context) => {
	const { setState } = context;

	return (
		<TextField
			placeholder="To do"
			onChange={ ({ target: { value }}) => setState((state) => ({
				...state,
				inputValue: value,
			})) }
		/>);
};

export default InputBox;
