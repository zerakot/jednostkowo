<script>
	import Operation from './Operation.svelte';

	export let page;
</script>

<div class="operations">
	{#each page?.operations as operation}
		<Operation {operation} />
	{/each}
</div>

<style>
	.operations {
		gap: 1.4rem;
		display: flex;
		flex-direction: column;
	}
</style>
