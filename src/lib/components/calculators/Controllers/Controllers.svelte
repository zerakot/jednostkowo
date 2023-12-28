<script>
	import Select from '$lib/components/Select.svelte';
	import Input from '$lib/components/Input.svelte';
	import Scale from './Scale.svelte';
	import Button from '../../Button.svelte';

	export let pageData;

	let result;
	let errorMessage = '';
	let dataset = pageData.controllers.reduce((res, controller) => {
		res[controller.id] = controller.defaultValue;
		return res;
	}, {});

	const calculate = () => {
		const formulaResult = pageData.formula(dataset);
		errorMessage = formulaResult?.error;
		if (formulaResult?.error) return;

		if (pageData?.overwrite) dataset = formulaResult;
		else result = formulaResult;
	};
	const reset = () => {
		dataset = pageData.controllers.reduce((res, controller) => {
			res[controller.id] = controller.defaultValue;
			return res;
		}, {});
		result = null;
	};
</script>

<section class="container">
	{#if errorMessage}
		<div class="error">{errorMessage}</div>
	{/if}

	{#each pageData?.controllers as controller}
		{#if controller?.element === 'select'}
			<Select bind:value={dataset[controller?.id]} label={controller?.label}>
				{#each controller?.options as option}
					<option value={option?.name}>{option?.label}</option>
				{/each}
			</Select>
		{/if}
		{#if controller?.element === 'input'}
			<Input
				{...controller?.attributes}
				bind:value={dataset[controller?.id]}
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
	{:else if result?.value && !pageData?.overwrite}
		<div class="result">
			Wynik: <span style="--color: {result?.color || null}">{result?.value}</span>
		</div>
	{/if}

	<div class="actions">
		<Button variant="ghost" on:click={reset}>Resetuj</Button>
		<Button on:click={calculate}>Oblicz</Button>
	</div>
</section>

<style lang="scss">
	.container {
		gap: 1rem;
		width: 100%;
		align-items: flex-end;
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

		@include xl {
			width: 70%;
		}
	}
</style>
