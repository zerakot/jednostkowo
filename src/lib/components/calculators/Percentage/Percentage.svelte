<script>
	import Operation from './Operation.svelte';

	export let page;
</script>

<section class="operations">
	{#each page?.operations as operation}
		<Operation {operation} />
	{/each}
</section>

<style>
	.operations {
		gap: 1.4rem;
		display: flex;
		flex-direction: column;
	}
</style>
