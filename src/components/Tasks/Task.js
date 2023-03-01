import { Box } from '@mui/material';
import React from 'react';
import AddTask from './TaskButton/AddTask';
import DeleteTask from './TaskButton/DeleteTask';
import TaskName from './TaskName';

const Task = (context) => {
	const { data: task } = context;

	return <Box class="task">
		<TaskName { ...{ ...context, data: task } }/>
		<AddTask { ...{ ...context, data: task } }/>
		<DeleteTask { ...{ ...context, data: task } }/>
	</Box>;
};

export default Task;
