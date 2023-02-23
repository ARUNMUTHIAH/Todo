import { Box, Button } from '@mui/material';
import React from 'react';

const ClearAll = (context) => {
	const { setState, state, state: { todo }} = context;

	return (
		todo.length
			&& <Box>
				<Button
					{ ...{
						variant: 'contained',
						color: 'primary',
						size: 'large',
					} }
					onClick={ () => setState({
						...state,
						todo: todo.filter((data) =>
							data.isActive !== true),
					}) }
				>Clear All</Button>
			</Box>);
};

export default ClearAll;
