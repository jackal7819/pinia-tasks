<script setup>
	import { useTasksStore } from '@/stores/TasksStore';

	defineProps({
		index: Number,
		task: Object,
	});

	const { toggleTask, toggleFavorite, removeTask } = useTasksStore();
</script>

<template>
	<li class="flex items-center justify-between gap-10 text-xl">
		<p class="text-yellow-500">{{ index + 1 }}</p>
		<h3
			@click="toggleTask(task.id)"
			:class="{ 'line-through': task.completed }"
			class="flex-1 font-medium duration-300 cursor-pointer hover:text-slate-500 active:text-slate-600"
		>
			{{ task.title }}
		</h3>
		<div class="flex gap-5">
			<i
				@click="removeTask(task.id)"
				class="text-3xl text-green-500 duration-300 cursor-pointer material-symbols-outlined hover:text-green-600 active:text-green-700"
				>delete</i
			>
			<i
				@click="toggleFavorite(task.id)"
				:class="{ 'text-pink-400': task.isFavorite }"
				class="text-3xl duration-300 cursor-pointer material-symbols-outlined hover:text-pink-500 active:text-pink-600"
				>favorite</i
			>
		</div>
	</li>
</template>
