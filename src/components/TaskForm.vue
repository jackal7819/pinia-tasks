<script setup>
	import { ref } from 'vue';
	import { useTasksStore } from '../stores/TasksStore';

	const { addTask } = useTasksStore();
	const title = ref('');
</script>

<template>
	<form @submit.prevent="addTask(title)" class="flex w-full">
		<input
			type="text"
			placeholder="Add Task"
			v-model="title"
			class="w-full px-2 border rounded-l outline-none text-slate-800 focus:border-sky-400"
		/>
		<button
			class="px-5 py-2 duration-300 border rounded-r bg-sky-800 hover:bg-sky-900 active:bg-sky-950"
		>
			Add
		</button>
	</form>
</template>
