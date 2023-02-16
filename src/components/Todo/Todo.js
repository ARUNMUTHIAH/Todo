import { Box } from '@mui/material';
import React from 'react';
import Add from '../Button/Add';
import Display from '../Display/Display';
import Input from '../TextBox/Input';

const Todo = (context) =>
	<Box>
		<Input { ...context }/>
		<Add { ...context }/>
		<Display { ...context }/>
	</Box>;

export default Todo;
