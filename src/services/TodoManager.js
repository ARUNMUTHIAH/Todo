import { rndString } from '@laufire/utils/random';

const addId = (context) => {
	const { state: { inputValue }} = context;
	const { config: { idLength }} = context;

	return {
		value: inputValue,
		id: rndString(idLength),
	};
};

const removeTodo = (context) => {
	const { data: id, state: { todo }} = context;

	return todo.filter((data) => data.id !== id);
};

const addButtonAction = ({ state: { inputValue }}) => inputValue === '';

const TodoManager = {
	addId,
	removeTodo,
	addButtonAction,
};

export default TodoManager;
