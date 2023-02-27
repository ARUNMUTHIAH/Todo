import { rndString } from '@laufire/utils/random';

const taskId = (context) => {
	const { config: { taskList, idLength }} = context;

	return taskList.map((task) =>
		({ value: task,
			id: rndString(idLength) }));
};

const TaskManager = {
	taskId,
};

export default TaskManager;
