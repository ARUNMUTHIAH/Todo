/* eslint-disable max-lines-per-function */
import { Box } from '@mui/material';
import React from 'react';
import Delete from '../Button/Delete';
import CheckBoxes from './CheckBox';
import Text from './Text';

const Display = (context) => {
	const { state: { todo }} = context;

	return (
		todo.map((object, key) =>
			<Box key={ key } class="container">
				<CheckBoxes { ...{ ...context, data: object } }/>
				<Text { ...{ ...context, data: object } }/>
				<Delete { ...{ ...context, data: object } }/>
			</Box>));
};

export default Display;
