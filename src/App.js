import { React, useState } from 'react';
import './App.scss';
import Todo from './components/Todo/Todo';
import TodoManager from './services/TodoManager';

const getInitialState = {
	todos: TodoManager.getInitialTodo,
	inputValue: '',
	editTodo: null,
	filter: 'all',
};

const App = (context) => {
	const [state, setState] = useState(getInitialState);
	const extendedContext = { ...context, state, setState };

	return <div className="App">
		<Todo { ...extendedContext }/>
	</div>;
};

export default App;
