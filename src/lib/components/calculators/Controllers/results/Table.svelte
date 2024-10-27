<script>
	let { result } = $props();
</script>

<div class="tableWrapper customScrollbar">
	<table class={result.sameWidth ? 'sameWidth' : ''}>
		<thead>
			<tr>
				{#each result?.table?.keys as key}
					<th>{key}</th>
				{/each}
			</tr>
		</thead>
		<tbody>
			{#each result?.table?.values as row}
				<tr>
					{#each row as value}
						<td>{value}</td>
					{/each}
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<style lang="scss">
	.tableWrapper {
		overflow-y: auto;
		max-height: 300px;
		display: block;
		padding: 0 0.4rem 0 0;

		& table {
			@include table;
		}
	}
</style>
