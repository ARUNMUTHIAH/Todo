import { Box } from '@mui/material';
import React from 'react';

const TaskName = (context) => {
	const { data: task } = context;

	return 	<Box class="display">{task.value}</Box>;
};

export default TaskName;
