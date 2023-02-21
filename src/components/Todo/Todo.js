import { Box } from '@mui/material';
import React from 'react';
import Add from '../Button/Add';
import ClearAll from '../Button/ClearAll';
import SelectAll from '../Button/SelectAll';
import Update from '../Button/Update';
import Display from '../Display/Display';
import Input from '../TextBox/Input';

const Button = (context) => {
	const { state: { editTodo }} = context;

	return editTodo ? <Update { ...context }/> : 	<Add { ...context }/>;
};

const Todo = (context) =>
	<Box>
		<Button { ...context }/>
		<Input { ...context }/>
		<SelectAll { ...context }/>
		<Display { ...context }/>
		<ClearAll { ...context }/>
	</Box>;

export default Todo;
