import { computed, ref } from 'vue';
import { defineStore } from 'pinia';
import { nanoid } from 'nanoid';

export const useTasksStore = defineStore('tasks', () => {
	const tasks = ref([
		{ id: nanoid(), title: 'Do homework', completed: false, isFavorite: false },
		{ id: nanoid(), title: 'Watch TV', completed: false, isFavorite: false },
		{ id: nanoid(), title: 'Play guitar', completed: false, isFavorite: true },
	]);

	const name = ref('Pinia Tasks');

	const getAllTasks = computed(() => tasks.value);
	const getFavoriteTasks = computed(() =>
		tasks.value.filter((task) => task.isFavorite)
	);

	const addTask = (title) => {
		const newTask = {
			id: nanoid(),
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
