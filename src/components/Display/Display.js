import { Box } from '@mui/material';
import React from 'react';

const Display = (context) => {
	const { state: { todo }} = context;

	return todo.map((data, key) => <Box key={ key }>{data.value}</Box>);
};

export default Display;
