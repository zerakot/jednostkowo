<script>
	import Select from '$lib/components/Select.svelte';
	import Input from '$lib/components/Input.svelte';
	import Scale from './Scale.svelte';

	export let page;

	let controlsValues = {};
	let result;

	$: result = page?.formula(controlsValues);
</script>

<section class="container">
	{#each page?.controllers as controller}
		{#if controller?.element === 'select'}
			<Select bind:value={controlsValues[controller?.id]} label={controller?.label}>
				{#each controller?.options as option}
					<option value={option?.name}>{option?.label}</option>
				{/each}
			</Select>
		{/if}
		{#if controller?.element === 'input'}
			<Input
				{...controller?.attributes}
				bind:value={controlsValues[controller?.id]}
				label={controller?.label}
			/>
		{/if}
	{/each}

	{#if result?.type === 'scale'}
		<Scale data={result} />
	{:else if result?.type === 'table'}
		<table>
			<thead>
				<tr>
					{#each Object.keys(result?.value[0]) as key}
						<th>{key}</th>
					{/each}
				</tr>
			</thead>
			<tbody>
				{#each result?.value as row}
					<tr>
						{#each Object.values(row) as value}
							<td>{value}</td>
						{/each}
					</tr>
				{/each}
			</tbody>
		</table>
	{:else}
		<div class="result">
			Wynik: <span style="--color: {result?.color || null}">{result?.value}</span>
		</div>
	{/if}
</section>

<style lang="scss">
	.container {
		gap: 1rem;
		width: 100%;
		display: flex;
		flex-direction: column;
		@include calculator;

		& table {
			@include table;
		}

		& .result {
			font-size: 1.1rem;

			& span {
				font-weight: bold;
				color: var(--color, $primary);
			}
		}

		@include md {
			width: 70%;
		}
	}
</style>
