import { Box } from '@mui/material';
import React from 'react';

const Text = (context) => {
	const { setState, data: object } = context;

	return (
		<Box
			class="display"
			onClick={ () => setState((state) => ({
				...state,
				inputValue: object.value,
				editTodo: object,
			})) }
		>{object.value}
		</Box>);
};

export default Text;
