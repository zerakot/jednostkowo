<script>
	import Input from '$lib/components/Input.svelte';
	import Select from '$lib/components/Select.svelte';

	export let number;
	export let converters;
	export let baseUnitLabel;
	export let targetUnitLabel;
</script>

<div class="controls">
	<Input type="number" bind:value={number} label="Liczba" />

	<Select bind:value={baseUnitLabel} label="Jednostka podstawowa">
		{#each converters as converter}
			{#if converter?.name}
				<option disabled>{converter.name}</option>
			{/if}

			{#each converter.units as unit}
				<option value={unit.label}>[{unit.symbol}] - {unit.label}</option>
			{/each}
		{/each}
	</Select>

	<Select bind:value={targetUnitLabel} label="Jednostka docelowa">
		<option value="">Brak</option>
		{#each converters as converter}
			{#if converter?.name}
				<option disabled>{converter.name}</option>
			{/if}

			{#each converter.units as unit}
				<option value={unit.label}>[{unit.symbol}] - {unit.label}</option>
			{/each}
		{/each}
	</Select>
</div>

<style lang="scss">
	.controls {
		display: flex;
		gap: 1rem;
		align-items: flex-end;
	}
</style>
