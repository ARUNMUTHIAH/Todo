import React from 'react';
import { Button } from '@mui/material';
import TaskManager from '../../../services/TaskManager';

const Delete = (context) => {
	const { setState } = context;

	return (
		<Button
			{ ...{
				variant: 'contained',
				color: 'error',
				size: 'small',
			} }
			onClick={ () => setState((state) => ({
				...state,
				tasks: TaskManager.removeData(context),
			})) }
		> - </Button>);
};

export default Delete;
