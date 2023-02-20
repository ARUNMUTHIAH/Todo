/* eslint-disable no-magic-numbers */
import { React, useState } from 'react';
import './App.scss';
import Todo from './components/Todo/Todo';
import TodoManager from './services/TodoManager';

const getInitialState = {
	todo: TodoManager.getInitialTodo,
	inputValue: '',
	editTodo: null,
};

const App = (context) => {
	const [state, setState] = useState(getInitialState);
	const extendedContext = { ...context, state, setState };

	return <div className="App">
		<Todo { ...extendedContext }/>
	</div>;
};

export default App;
