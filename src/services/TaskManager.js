import { rndString } from '@laufire/utils/random';

const taskId = (context) => {
	const { config: { taskList, idLength }} = context;

	return taskList.map((task) =>
		({ value: task,
			id: rndString(idLength) }));
};

const removeData = (context) => {
	const { state: { tasks }, data: task } = context;

	return tasks.filter((value) => value.id !== task.id);
};

const TaskManager = {
	taskId,
	removeData,
};

export default TaskManager;
