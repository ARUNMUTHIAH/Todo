import { rndString } from '@laufire/utils/random';

const addId = (context) => {
	const { state: { inputValue }} = context;
	const { config: { idLength }} = context;

	return {
		value: inputValue,
		id: rndString(idLength),
	};
};

const TodoManager = {
	addId,
};

export default TodoManager;
