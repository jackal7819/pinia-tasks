import axios from 'axios';
import { computed, ref } from 'vue';
import { defineStore } from 'pinia';
import { nanoid } from 'nanoid';

export const useTasksStore = defineStore('tasks', () => {
	const tasks = ref([]);
	const isLoading = ref(false);
	const name = ref('Pinia Tasks');

	const allTasks = computed(() => tasks.value);
	const favoriteTasks = computed(() =>
		tasks.value.filter((task) => task.isFavorite)
	);

	const fetchTasks = async () => {
		try {
			isLoading.value = true;
			const response = await axios.get(
				'https://pinia-tasks-c89c1-default-rtdb.europe-west1.firebasedatabase.app/.json'
			);
			tasks.value = response.data.tasks;
			isLoading.value = false;
		} catch (error) {
			console.log(error);
			isLoading.value = false;
		}
	};
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

	const toggleFavorite = (taskID) => {
		const task = tasks.value.find((task) => task.id === taskID);
		if (task) {
			task.isFavorite = !task.isFavorite;
		}
	};

	const removeTask = (taskID) => {
		tasks.value = tasks.value.filter((task) => task.id !== taskID);
	};

	return {
		tasks,
		name,
		isLoading,
		allTasks,
		favoriteTasks,
		fetchTasks,
		addTask,
		toggleTask,
		toggleFavorite,
		removeTask,
	};
});
