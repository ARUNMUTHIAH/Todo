import React from 'react';
import { Box } from '@mui/material';
import TaskName from './TaskName';
import Add from './TaskButton/Add';

const Task = (context) => {
	const { state: { tasks }} = context;

	return (
		tasks.map((task, key) =>
			<Box key={ key }>
				<TaskName { ...{ ...context, data: task } }/>
				<Add { ...{ ...context, data: task } }/>
			</Box>));
};

export default Task;
