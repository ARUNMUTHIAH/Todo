import { Box } from '@mui/material';
import React from 'react';
import Add from '../Button/Add';
import Display from '../Display/Display';
import InputBox from '../TextBox/InputBox';

const Todo = (context) =>
	<Box>
		<InputBox { ...context }/>
		<Add { ...context }/>
		<Display { ...context }/>
	</Box>;

export default Todo;
