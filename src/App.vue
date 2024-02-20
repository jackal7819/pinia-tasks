<script setup>
	import { useTasksStore } from './stores/TasksStore';
	import TaskDetails from './components/TaskDetails.vue';

	const tasksStore = useTasksStore();
</script>

<template>
	<main
		class="flex flex-col items-center justify-center min-h-screen gap-10 p-10 bg-slate-900 text-slate-400"
	>
		<header class="flex items-end gap-10 p-10 border-b">
			<img src="./assets/pinia.svg" alt="pinia" class="w-20" />
			<h1 class="text-3xl font-bold">{{ tasksStore.name }}</h1>
		</header>
		<ul class="flex flex-col w-full max-w-3xl gap-5">
			<li
				v-for="task in tasksStore.tasks"
				:key="task.id"
				class="flex flex-col justify-between gap-10 px-5 py-2 border rounded-2xl bg-slate-800"
			>
				<TaskDetails :task="task" />
			</li>
		</ul>
	</main>
</template>
