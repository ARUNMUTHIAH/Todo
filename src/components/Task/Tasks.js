import React from 'react';
import { Box } from '@mui/material';
import TaskName from './TaskName';
import Add from './TaskButton/Add';
import Delete from './TaskButton/Delete';

const Tasks = (context) => {
	const { state: { tasks }} = context;

	return (
		tasks.map((task, key) =>
			<Box key={ key } class="task">
				<TaskName { ...{ ...context, data: task } }/>
				<Add { ...{ ...context, data: task } }/>
				<Delete { ...{ ...context, data: task } }/>
			</Box>));
};

export default Tasks;
