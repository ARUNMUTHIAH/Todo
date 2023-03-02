import React from 'react';
import { Box } from '@mui/material';
import Task from './Task';

const Tasks = (context) => <Box className="task">
	<label className="taskList">TASK LIST</label>
	<Task { ...context }/>
</Box>;

export default Tasks;
