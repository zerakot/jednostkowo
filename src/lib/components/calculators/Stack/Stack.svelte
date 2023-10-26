<script>
	import { getRandomId } from '$lib/utils';
	import Input from '$lib/components/Input.svelte';

	export let page;

	let result;
	let rows = [];
	let controlsValues = {};

	const addRow = () => {
		rows = [...rows, { ...controlsValues, id: getRandomId(5) }];
		console.log(rows);
		controlsValues = {};
	};

	const deleteRow = (id) => {
		const newRows = rows.filter((r) => r?.id !== id);
		rows = newRows;
	};

	$: result = page?.formula(rows);
</script>

<div class="container">
	<div class="result">Wynik: <span>{result}</span></div>
	<div class="controls">
		{#each page?.fields as field}
			<Input {...field} bind:value={controlsValues[field?.name]} placeholder={field?.name} />
		{/each}
		<button on:click={addRow}>Dodaj</button>
	</div>

	<table class="rows">
		<thead>
			<tr>
				{#each page?.fields as field}
					<th>{field?.name}</th>
				{/each}
				<th />
			</tr>
		</thead>

		<tbody>
			{#each rows as row}
				<tr class="row">
					{#each page?.fields as field}
						<td>{row[field?.name]}</td>
					{/each}
					<td class="fitwidth">
						<button class="delete" on:click={() => deleteRow(row?.id)}
							><span class="material-symbols-rounded"> delete </span></button
						>
					</td>
				</tr>
			{/each}
			{#if rows.length === 0}
				<tr>
					<td colspan={page?.fields?.length}>Brak danych</td>
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
		padding: 1rem;
		border-radius: 10px;
		border: 1px solid $secondary;
		box-shadow: 4px 4px 12px $secondary;

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
				border-radius: 50%;

				& span {
					color: $accent;
				}

				&:hover span {
					color: red;
				}
			}
		}

		@include md {
			width: 70%;
		}
	}
</style>
