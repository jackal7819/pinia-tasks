import axios from 'axios';
import { computed, ref } from 'vue';
import { defineStore } from 'pinia';
import { nanoid } from 'nanoid';

const URL =
	'https://pinia-tasks-c89c1-default-rtdb.europe-west1.firebasedatabase.app/.json';

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
			const response = await axios.get(URL);
			tasks.value = response.data;
			isLoading.value = false;
		} catch (error) {
			console.log(error);
			isLoading.value = false;
		}
	};

	const addTask = async (title) => {
		try {
			const newTask = {
				id: nanoid(),
				title,
				completed: false,
			};
			tasks.value.push(newTask);
			await axios.put(URL, tasks.value);
		} catch (error) {
			console.log(error);
		}
	};

	const toggleTask = async (taskID) => {
		try {
			const task = tasks.value.find((task) => task.id === taskID);
			if (task) {
				task.completed = !task.completed;
			}
			await axios.put(URL, tasks.value);
		} catch (error) {
			console.log(error);
		}
	};

	const toggleFavorite = async (taskID) => {
		try {
			const task = tasks.value.find((task) => task.id === taskID);
			if (task) {
				task.isFavorite = !task.isFavorite;
			}
			await axios.put(URL, tasks.value);
		} catch (error) {
			console.log(error);
		}
	};

	const removeTask = async (taskID) => {
		try {
			tasks.value = tasks.value.filter((task) => task.id !== taskID);
			await axios.put(URL, tasks.value);
		} catch (error) {
			console.log(error);
		}
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
