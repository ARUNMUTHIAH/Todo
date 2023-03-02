import { Box } from '@mui/material';
import React from 'react';
import AddTask from './TaskButton/AddTask';
import DeleteTask from './TaskButton/DeleteTask';
import TaskName from './TaskName';

const Task = (context) => {
	const { state: { tasks }} = context;

	return (
		<Box class="tasks">
			{tasks.map((task, key) =>
				<Box key={ key }>
					<TaskName { ...{ ...context, data: task } }/>
					<AddTask { ...{ ...context, data: task } }/>
					<DeleteTask { ...{ ...context, data: task } }/>
				</Box>)}
		</Box>);
};

export default Task;
