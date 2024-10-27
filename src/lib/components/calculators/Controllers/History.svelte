<script>
	import Separator from '../../Separator.svelte';

	let { onHistoryRemove, history, template } = $props();

	const fillTemplate = (dataset) => {
		return template.text.replace(/{(\w+)}/g, (match, key) => {
			return dataset[key] ? dataset[key] : 0;
		});
	};

	const getIconData = (operation) => {
		const key = template.icon.key.toString();
		const values = template.icon.values;

		return values[operation[key]];
	};
</script>

<div class="history">
	<Separator label="Historia" />

	<div class="list">
		{#each history as operation, i}
			{@const iconData = getIconData(operation)}

			<div class="row">
				<div class="data">
					<div class="icon {iconData.color}">
						<span class="material-symbols-rounded"> {iconData?.name} </span>
					</div>
					<p>{@html fillTemplate(operation)}</p>
				</div>

				<button onclick={() => onHistoryRemove(i)}>Usuń</button>
			</div>
		{/each}
	</div>
</div>

<style lang="scss">
	.history {
		gap: 0.5rem;
		display: flex;
		flex-direction: column;

		& h3 {
			line-height: 1rem;
			font-size: 1.1rem;
			font-weight: bold;
		}

		& .list {
			gap: 0.7rem;
			display: flex;
			flex-direction: column;

			& .row {
				gap: 0.7rem;
				align-items: flex-start;
				padding: 0.8rem;
				display: flex;
				border-radius: 10px;
				background-color: #f9f9f9;
				border: 1px solid $gray-medium;

				& .data {
					gap: 0.6rem;
					display: flex;
					align-items: center;
					flex-direction: row;

					& .icon {
						border-radius: 5px;
						width: 1.8rem;
						height: 1.8rem;
						display: flex;
						flex-direction: column;
						align-items: center;
						justify-content: center;
						color: white;

						&.green {
							background-color: $success;
						}
						&.red {
							background-color: $error;
						}
					}

					& p {
						font-size: 0.9rem;

						& b {
							font-weight: 600;
						}
					}
				}

				& button {
					margin-left: auto;
					font-weight: 600;
					font-size: 0.8rem;
					padding: 0.2rem 0.8rem;
					border-radius: 5px;
					border: 1px solid $gray-dark;
					background-color: $gray-medium;
				}
			}
		}
	}
</style>
