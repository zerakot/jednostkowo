<script>
	import Input from '$lib/components/Input.svelte';
	import Select from '$lib/components/Select.svelte';

	export let number;
	export let unitRatio;
	export let converters;
</script>

<div class="controls">
	<Input type="number" bind:value={number} />

	<Select bind:value={unitRatio} halfWidth={true}>
		{#each converters as converter}
			<option value={converter.ratio}>[{converter.symbol}] - {converter.label}</option>
		{/each}
	</Select>
</div>

<style lang="scss">
	.controls {
		display: flex;
		gap: 1rem;
	}
</style>
