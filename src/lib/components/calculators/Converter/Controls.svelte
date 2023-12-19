<script>
	import Input from '$lib/components/Input.svelte';
	import Select from '$lib/components/Select.svelte';

	export let number;
	export let unitRatio;
	export let converters;
</script>

<div class="controls">
	<Input type="number" bind:value={number} label="Liczba" />

	<Select bind:value={unitRatio} label="Jednostka podstawowa">
		{#each converters as converter}
			{#if converter?.name}
				<option disabled>{converter.name}</option>
			{/if}

			{#each converter.units as unit}
				<option value={unit.ratio}>[{unit.symbol}] - {unit.label}</option>
			{/each}
		{/each}
	</Select>
	<!-- <Select value="" label="Jednostka docelowa">
		<option value="">Brak</option>
	</Select> -->
</div>

<style lang="scss">
	.controls {
		display: flex;
		gap: 1rem;
	}
</style>
