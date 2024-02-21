<script setup>	
	defineProps({
		index: Number,
		task: Object,
	});
</script>

<template>
	<li class="flex items-center justify-between gap-10 text-xl">
		<p class="text-yellow-500">{{ index + 1 }}</p>
		<h3
			class="flex-1 font-medium duration-300 cursor-pointer hover:text-slate-500 active:text-slate-600"
		>
			{{ task.title }}
		</h3>
		<div class="flex gap-5">
			<i
				class="text-3xl text-green-500 duration-300 cursor-pointer material-symbols-outlined hover:text-green-600 active:text-green-700"
				>delete</i
			>
			<i
				class="text-3xl text-pink-500 duration-300 cursor-pointer material-symbols-outlined hover:text-pink-600 active:text-pink-700"
				>favorite</i
			>
		</div>
	</li>
</template>
