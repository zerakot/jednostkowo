<script>
	import Select from '$lib/components/Select.svelte';
	import Input from '$lib/components/Input.svelte';

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

	<div class="result">
		{#if typeof result === 'string' || typeof result === 'number'}
			Wynik: <span>{isNaN(result) || !isFinite(result) ? '----' : result}</span>
		{:else if typeof result === 'object'}
			<table>
				<thead>
					<tr>
						{#each Object.keys(result[0]) as key}
							<th>{key}</th>
						{/each}
					</tr>
				</thead>
				<tbody>
					{#each result as row}
						<tr>
							{#each Object.values(row) as value}
								<td>{value}</td>
							{/each}
						</tr>
					{/each}
				</tbody>
			</table>
		{/if}
	</div>
</section>

<style lang="scss">
	.container {
		gap: 1rem;
		width: 100%;
		display: flex;
		flex-direction: column;
		@include calculator;

		& .result {
			font-size: 1.1rem;

			& span {
				font-weight: bold;
				color: $primary;
			}

			& table {
				@include table;
			}
		}

		@include md {
			width: 70%;
		}
	}
</style>
