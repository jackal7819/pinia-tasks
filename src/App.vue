<script setup>
	import { ref } from 'vue';
	import { useTasksStore } from './stores/TasksStore';
	import TaskDetails from './components/TaskDetails.vue';
	import TaskForm from './components/TaskForm.vue';

	const { tasks, name, getAllTasks, getFavoriteTasks } = useTasksStore();
	const filter = ref('all');
</script>

<template>
	<main
		class="flex flex-col items-center justify-center min-h-screen gap-10 p-10 bg-slate-900 text-slate-400"
	>
		<header class="flex items-end gap-10 p-10 border-b">
			<img src="./assets/pinia.svg" alt="pinia" class="w-20" />
			<h1 class="text-3xl font-bold">{{ name }}</h1>
		</header>

		<TaskForm />

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

		<ul
			class="flex flex-col w-full max-w-3xl gap-5"
			v-if="filter === 'all'"
		>
			<p class="text-center">All Tasks: {{ getAllTasks.length }}</p>
			<li
				v-for="(task, index) in getAllTasks"
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
				Favorite Tasks: {{ getFavoriteTasks.length }}
			</p>
			<li
				v-for="(task, index) in getFavoriteTasks"
				:key="task.id"
				class="flex flex-col justify-between gap-10 px-5 py-2 border rounded-xl bg-slate-800"
			>
				<TaskDetails :index="index" :task="task" />
			</li>
		</ul>
	</main>
</template>
