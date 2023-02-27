import { Box } from '@mui/material';
import React from 'react';
import Add from '../Button/Add';
import ClearAll from '../Button/ClearAll';
import SelectAll from '../Button/SelectAll';
import Update from '../Button/Update';
import Input from '../TextBox/Input';
import Tabs from '../Tabs/Tabs';

const ActionButton = (context) => {
	const { state: { editTodo }} = context;

	return editTodo ? <Update { ...context }/> : 	<Add { ...context }/>;
};

const Todo = (context) =>
	<Box>
		<ActionButton { ...context }/>
		<Input { ...context }/>
		<Tabs { ...context }/>
		<SelectAll { ...context }/>
		<ClearAll { ...context }/>

	</Box>;

export default Todo;
