<script>
	import { getRandomId } from '$lib/utils';
	import Input from '$lib/components/Input.svelte';
	import Icon from '../../Icon.svelte';
	import Button from '../../Button.svelte';

	export let pageData;

	let result;
	let rows = [];
	let initialValues = pageData.fields.reduce((result, field) => {
		result[field.name] = field.defaultValue;
		return result;
	}, {});
	let controlsValues = { ...initialValues };

	const addRow = () => {
		rows = [...rows, { ...controlsValues, id: getRandomId(5) }];
		controlsValues = { ...initialValues };
	};
	const deleteRow = (id) => {
		const newRows = rows.filter((r) => r?.id !== id);
		rows = newRows;
	};

	$: result = pageData?.formula(rows);
</script>

<div class="container">
	<div class="result">Wynik: <span>{result}</span></div>
	<div class="controls">
		{#each pageData?.fields as field}
			<Input {...field} bind:value={controlsValues[field.name]} placeholder={field?.name} />
		{/each}
		<Button on:click={addRow}>Dodaj</Button>
	</div>

	<table>
		<thead>
			<tr>
				{#each pageData?.fields as field}
					<th>{field?.name}</th>
				{/each}
				<th />
			</tr>
		</thead>

		<tbody>
			{#each rows as row}
				<tr class="row">
					{#each pageData?.fields as field}
						<td>{row[field?.name]}</td>
					{/each}
					<td class="fitwidth">
						<button class="delete" on:click={() => deleteRow(row.id)}>
							<Icon name="delete" />
						</button>
					</td>
				</tr>
			{/each}
			{#if rows.length === 0}
				<tr>
					<td colspan={pageData?.fields?.length}>Brak danych</td>
					<td />
				</tr>
			{/if}
		</tbody>
	</table>
</div>

<style lang="scss">
	.container {
		width: 100%;
		gap: 1rem;
		display: flex;
		flex-direction: column;
		@include calculator;

		& .result {
			font-size: 1.1rem;
			& span {
				font-weight: bold;
				color: $primary;
			}
		}

		& .controls {
			gap: 1rem;
			display: flex;

			& button {
				cursor: pointer;
				color: white;
				background-color: $primary;
				border-radius: 5px;
				border: none;
				padding: 0 1rem;
			}
		}

		& table {
			@include table;

			& tbody tr td button.delete {
				padding: 0;
				margin: 0;
				border: none;
				cursor: pointer;
				background: transparent;
			}
		}

		@include xl {
			width: 70%;
		}
	}
</style>
