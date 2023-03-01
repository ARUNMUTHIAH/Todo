import React from 'react';
import { Box } from '@mui/material';
import Task from './Task';

const Tasks = (context) => {
	const { state: { tasks }} = context;

	return <Box>
		<label className="task">TASK LIST</label>
		{tasks.map((task, key) =>
			<Task key={ key } { ...{ ...context, data: task } }/>)}
	</Box>;
};

export default Tasks;
