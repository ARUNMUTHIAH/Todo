import { Button } from '@mui/material';
import React from 'react';

const Edit = (context) => {
	const { setState, data: value } = context;

	return (
		<Button
			onClick={ () => setState((state) => ({
				...state,
				inputValue: value,
			})) }
		/>);
};

export default Edit;
