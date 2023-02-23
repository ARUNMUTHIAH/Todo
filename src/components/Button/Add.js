/* eslint-disable no-magic-numbers */
import { Button } from '@mui/material';
import React from 'react';
import TodoManager from '../../services/TodoManager';

const Add = (context) => {
	const { setState, state: { todo }} = context;

	return (
		<Button
			variant="outlined"
			size="large"
			color="secondary"
			disabled={ TodoManager.addButtonAction(context) }
			onClick={ () => setState((state) => ({
				...state,
				todo: [...todo, TodoManager.addId(context)],
				inputValue: '',
			})) }
		>ADD</Button>);
};

export default Add;
