import { rndString } from '@laufire/utils/random';

const getInitialTodo = [
	{
		value: 'test1',
		id: 'aaaaa',
		isActive: false,
	},
	{
		value: 'test2',
		id: 'bbbbb',
		isActive: false,
	},
];

const addId = (context) => {
	const { state: { inputValue }} = context;
	const { config: { idLength }} = context;

	return {
		value: inputValue,
		id: rndString(idLength),
		isActive: false,
	};
};

const removeTodo = (context) => {
	const { data: { id }, state: { todos }} = context;

	return todos.filter((todo) => todo.id !== id);
};

const addButtonAction = ({ state: { inputValue }}) => inputValue === '';

const update = (context) => {
	const { state: { todos, editTodo, inputValue }} = context;

	return todos.map((todo) => (todo.id === editTodo.id
		? { ...todo, value: inputValue }
		: todo));
};

const toggleIsActive = (context) => {
	const { state: { todos }, data: todo } = context;

	return todos.map((data) => {
		const { isActive } = data;

		return data.id === todo.id
			? { ...data, isActive: !isActive }
			: data;
	});
};

const selectAll = (context) => {
	const { state: { todos }, checked } = context;

	return todos.map((data) =>
		({ ...data, isActive: checked }));
};

const isChecked = (context) => {
	const { state } = context;
	const { todos } = state;

	return todos.length && todos.every((data) => data.isActive);
};

const clearAllFilter = (context) => {
	const { state } = context;
	const { todos } = state;

	return todos.filter((data) =>
		data.isActive !== true);
};

const tabsFilter = {
	all: ({ state: { todos }}) => todos,
	active: ({ state: { todos }}) => todos.filter((todo) => !todo.isActive),
	completed: ({ state: { todos }}) => todos.filter((todo) => todo.isActive),
};

const TodoManager = {
	getInitialTodo,
	addId,
	removeTodo,
	addButtonAction,
	update,
	toggleIsActive,
	selectAll,
	isChecked,
	clearAllFilter,
	tabsFilter,
};

export default TodoManager;
