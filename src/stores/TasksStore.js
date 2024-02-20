export const useTasksStore = defineStore('tasks', () => {
	const tasks = ref([
		{ id: 1, title: 'Task 1', completed: false },
		{ id: 2, title: 'Task 2', completed: false },
		{ id: 3, title: 'Task 3', completed: false },
	]);

	const getTasks = () => {
		return tasks.value;
	};

	const addTask = (title) => {
		const newTask = {
			id: tasks.value.length + 1,
			title,
			completed: false,
		};
		tasks.value.push(newTask);
	};

	const toggleTask = (taskID) => {
		const task = tasks.value.find((task) => task.id === taskID);
		if (task) {
			task.completed = !task.completed;
		}
	};

	const removeTask = (taskID) => {
		tasks.value = tasks.value.filter((task) => task.id !== taskID);
	};

	return { tasks, getTasks, addTask, toggleTask, removeTask };
});
