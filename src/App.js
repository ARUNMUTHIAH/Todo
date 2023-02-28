import { React, useState } from 'react';
import './App.scss';
import Todo from './components/Todo/Todo';
import TaskManager from './services/TaskManager';
import TodoManager from './services/TodoManager';
import Task from './components/Task/Task';

const getInitialState = (context) => ({
	todos: TodoManager.getInitialTodo,
	inputValue: '',
	editTodo: null,
	filter: 'all',
	tasks: TaskManager.taskId(context),
});

const App = (context) => {
	const [state, setState] = useState(getInitialState(context));
	const extendedContext = { ...context, state, setState };

	return <div className="App">
		<Todo { ...extendedContext }/>
		<label className="task">TASK LIST</label>
		<Task { ...extendedContext }/>
	</div>;
};

export default App;
