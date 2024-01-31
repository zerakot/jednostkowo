<script>
	import { getUnit, sortUnits } from '$lib/utils';
	import { page } from '$app/stores';
	import { convert } from '$lib/utils';
	import Input from '$lib/components/Input.svelte';
	import Select from '$lib/components/Select.svelte';

	export let results;
	export let options;
	export let converters;

	let number = 1;
	let baseUnitLabel =
		getUnit({ label: $page.url.searchParams.get('from') }, converters)?.label ||
		getUnit({ default: true }, converters)?.label;
	let targetUnitLabel = '';

	$: results = convert(number, baseUnitLabel, targetUnitLabel, converters, options);
</script>

<div class="controls">
	<Input type="number" bind:value={number} label="Liczba" />

	<Select bind:value={baseUnitLabel} label="Jednostka podstawowa">
		{#each converters as converter, i}
			{#if converter?.category}
				{#if i !== 0}
					<option disabled>&nbsp;</option>
				{/if}
				<option class="category" disabled>{converter.category}</option>
			{/if}

			{#each sortUnits(converter.units) as unit}
				<option value={unit.label}>{unit.label} - [{unit.symbol}]</option>
			{/each}
		{/each}
	</Select>

	<Select bind:value={targetUnitLabel} label="Jednostka docelowa">
		<option value="">Brak</option>
		{#each converters as converter}
			{#if converter?.category}
				<option disabled>&nbsp;</option>
				<option class="category" disabled>{converter.category}</option>
			{/if}

			{#each converter.units as unit}
				<option value={unit.label}>{unit.label} - [{unit.symbol}]</option>
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
