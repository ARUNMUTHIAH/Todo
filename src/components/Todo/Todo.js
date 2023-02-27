import { Box } from '@mui/material';
import React from 'react';
import ClearAll from '../Button/ClearAll';
import SelectAll from '../Button/SelectAll';
import Input from '../TextBox/Input';
import Tabs from '../Tabs/Tabs';
import ActionButton from '../Button/ActionButton';

const Todo = (context) =>
	<Box>
		<ActionButton { ...context }/>
		<Input { ...context }/>
		<Tabs { ...context }/>
		<SelectAll { ...context }/>
		<ClearAll { ...context }/>
	</Box>;

export default Todo;
