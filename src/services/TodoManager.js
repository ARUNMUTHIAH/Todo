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
	const { data: { id }, state: { todo }} = context;

	return todo.filter((data) => data.id !== id);
};

const addButtonAction = ({ state: { inputValue }}) => inputValue === '';

const update = (context) => {
	const { state: { todo, editTodo, inputValue }} = context;

	return todo.map((data) => (data.id === editTodo.id
		? { ...data, value: inputValue }
		: data));
};

const toggleIsActive = (context) => {
	const { state: { todo }, data: object } = context;

	return todo.map((data) => {
		const { isActive } = data;

		return data.id === object.id
			? { ...data, isActive: !isActive }
			: data;
	});
};

const selectAll = (context) => {
	const { state: { todo }, checked } = context;

	return todo.map((data) =>
		({ ...data, isActive: checked }));
};

const TodoManager = {
	getInitialTodo,
	addId,
	removeTodo,
	addButtonAction,
	update,
	toggleIsActive,
	selectAll,
};

export default TodoManager;
