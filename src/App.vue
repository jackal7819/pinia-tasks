<script setup>
	import { ref } from 'vue';
	import { storeToRefs } from 'pinia';
	import { useTasksStore } from './stores/TasksStore';
	import TaskDetails from './components/TaskDetails.vue';
	import TaskForm from './components/TaskForm.vue';
	import Loader from './components/Loader.vue';

	const tasksStore = useTasksStore();
	const { name, isLoading, allTasks, favoriteTasks } =
		storeToRefs(tasksStore);
	const { fetchTasks } = tasksStore;
	fetchTasks();
	const filter = ref('all');
</script>

<template>
	<main
		class="flex flex-col items-center justify-center min-h-screen gap-10 p-10 bg-slate-900 text-slate-300"
	>
		<header class="flex flex-col items-end gap-10 p-10 border-b">
			<div class="flex items-end gap-10">
				<img src="./assets/pinia.svg" alt="pinia" class="w-20" />
				<h1 class="text-3xl font-bold">{{ name }}</h1>
			</div>
			<TaskForm />
		</header>

		<nav class="flex gap-5">
			<button
				@click="filter = 'all'"
				class="px-5 py-2 duration-300 border rounded bg-sky-800 hover:bg-sky-900 active:bg-sky-950"
			>
				All
			</button>
			<button
				@click="filter = 'favorites'"
				class="px-5 py-2 duration-300 border rounded bg-sky-800 hover:bg-sky-900 active:bg-sky-950"
			>
				Favorite Tasks
			</button>
		</nav>

		<Loader v-if="isLoading" />

		<ul
			class="flex flex-col w-full max-w-3xl gap-5"
			v-if="filter === 'all'"
		>
			<p class="text-center">All Tasks: {{ allTasks.length }}</p>
			<li
				v-for="(task, index) in allTasks"
				:key="task.id"
				class="flex flex-col justify-between gap-10 px-5 py-2 border rounded-xl bg-slate-800"
			>
				<TaskDetails :index="index" :task="task" />
			</li>
		</ul>

		<ul
			class="flex flex-col w-full max-w-3xl gap-5"
			v-if="filter === 'favorites'"
		>
			<p class="text-center">
				Favorite Tasks: {{ favoriteTasks.length }}
			</p>
			<li
				v-for="(task, index) in favoriteTasks"
				:key="task.id"
				class="flex flex-col justify-between gap-10 px-5 py-2 border rounded-xl bg-slate-800"
			>
				<TaskDetails :index="index" :task="task" />
			</li>
		</ul>
	</main>
</template>
