import { Box } from '@mui/material';
import React from 'react';
import Add from './TaskButton/Add';
import Delete from './TaskButton/Delete';
import TaskName from './TaskName';

const Task = (context) => {
	const { data: task } = context;

	return <Box class="task">
		<TaskName { ...{ ...context, data: task } }/>
		<Add { ...{ ...context, data: task } }/>
		<Delete { ...{ ...context, data: task } }/>
	</Box>;
};

export default Task;
