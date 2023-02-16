/* eslint-disable no-magic-numbers */
import { React, useState } from 'react';
import './App.scss';
import Todo from './components/Todo/Todo';

const getInitialState = {
	todo: [],
	inputValue: null,
};

const App = (context) => {
	const [state, setState] = useState(getInitialState);
	const extendedContext = { ...context, state, setState };

	return <div className="App">
		<Todo { ...extendedContext }/>
	</div>;
};

export default App;
