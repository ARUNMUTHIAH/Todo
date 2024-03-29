import { React, useState } from 'react';
import './App.scss';
import TaskManager from './services/TaskManager';
import TodoManager from './services/TodoManager';
import Tasks from './components/Tasks/Index';
import { Box } from '@mui/material';
import Todos from './components/Todos/Index';

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
		<Tasks { ...extendedContext }/>
	</Box>;
};

export default App;
