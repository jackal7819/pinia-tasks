import { computed, ref } from 'vue';
import { defineStore } from 'pinia';

export const useTasksStore = defineStore('tasks', () => {
	const tasks = ref([
		{ id: 1, title: 'Do homework', completed: false, isFavorite: false },
		{ id: 2, title: 'Watch TV', completed: false, isFavorite: false },
		{ id: 3, title: 'Play guitar', completed: false, isFavorite: true },
	]);

	const name = ref('Pinia Tasks');

	const getAllTasks = computed(() => tasks.value);
	const getFavoriteTasks = computed(() =>
		tasks.value.filter((task) => task.isFavorite)
	);

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

	return {
		tasks,
		name,
		getAllTasks,
		getFavoriteTasks,
		addTask,
		toggleTask,
		removeTask,
	};
});
