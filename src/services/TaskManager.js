import { rndString, rndValues } from '@laufire/utils/random';

const addTask = (context) => {
	const { data: taskList, config: { idLength }} = context;

	return {
		value: taskList,
		id: rndString(idLength),
	};
};

const removeTask = (context) => {
	const { state: { tasks }, data: task } = context;

	return tasks.filter((value) => value.id !== task.id);
};

const taskGenerator = (context) => {
	const { setState, config: { taskList, timeInterval, maxLength }} = context;

	return setInterval(() => setState((newState) => ({
		...newState,
		tasks: newState.tasks.length < maxLength
			? [...newState.tasks,
				addTask({ ...context, data: rndValues(taskList) })]
			: newState.tasks,
	})), timeInterval);
};

const TaskManager = {
	addTask,
	removeTask,
	taskGenerator,
};

export default TaskManager;
