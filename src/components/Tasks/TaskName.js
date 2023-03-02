import React from 'react';
import { Box } from '@mui/material';

const TaskName = (context) => {
	const { data: task } = context;

	return 	<Box class="taskName">{task.value}</Box>;
};

export default TaskName;
