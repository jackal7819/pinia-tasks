<template>
	<div>
		<button
			type="button"
			class="relative flex items-center gap-5 px-5 py-2 text-xl duration-300 rounded bg-sky-700 text-slate-200"
			disabled
		>
			<span class="absolute flex h-3 -right-1 -top-1 w-e3">
				<span
					class="absolute inline-flex w-full h-full rounded-full opacity-75 animate-ping bg-sky-100"
				></span>
				<span
					class="relative inline-flex w-3 h-3 rounded-full bg-sky-500"
				></span>
			</span>
			Loading
		</button>
	</div>
</template>
