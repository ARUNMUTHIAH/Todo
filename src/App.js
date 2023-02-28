import { React, useState } from 'react';
import './App.scss';
import TaskManager from './services/TaskManager';
import TodoManager from './services/TodoManager';
import Todos from './components/Todo/Todos';
import Tasks from './components/Task/Tasks';
import { Box } from '@mui/material';

const getInitialState = {
	todos: TodoManager.getInitialTodo,
	inputValue: '',
	editTodo: null,
	filter: 'all',
	tasks: [],
};

const App = (context) => {
	const [state, setState] = useState(getInitialState);
	const { once } = context;
	const extendedContext = { ...context, state, setState };

	once(() => TaskManager.taskGenerator(extendedContext));

	return <Box className="App">
		<Todos { ...extendedContext }/>
		<label className="task">TASK LIST</label>
		<Tasks { ...extendedContext }/>
	</Box>;
};

export default App;
