<script>
	import { getChartConfig } from '../../../routes/test/utils';
	import Button from '../Button.svelte';
	import Chart from '../Chart.svelte';

	export let reset;
	export let score = [];

	let chartConfig;

	$: chartConfig = getChartConfig(score);
</script>

<div class="summary">
	<h4>Podsumowanie</h4>
	<div class="stats">
		<div class="stat">
			<div class="title">Punktacja</div>
			<div class="value">
				<Chart config={chartConfig} width={80} height={80} autoWidth={false} />
			</div>
		</div>
		<div class="stat green">
			<div class="title">Poprawne odpowiedzi</div>
			<div class="value">{score.filter((i) => i === 1).length}</div>
		</div>
		<div class="stat red">
			<div class="title">Błędne odpowiedzi</div>
			<div class="value">{score.filter((i) => i === 0).length}</div>
		</div>
		<div class="stat green">
			<div class="title">Całkowita ilość pytań</div>
			<div class="value">{score.length}</div>
		</div>
	</div>
	<div class="controls">
		<Button on:click={reset}>Zagraj ponownie</Button>
	</div>
</div>

<style lang="scss">
	.summary {
		gap: 0.5rem;
		flex-direction: column;
		display: flex;
		width: 100%;
		height: 100%;
		background-color: white;

		& .stats {
			gap: 0.5rem;
			display: grid;
			grid-template-rows: 2fr;
			grid-template-columns: repeat(2, 1fr);

			& .stat {
				gap: 0.2rem;
				text-align: center;
				display: flex;
				flex-direction: column;
				border-radius: 5px;
				border: 1px solid $gray-medium;
				padding: 0.7rem 1rem 0.4rem 1rem;

				&:nth-last-of-type(-n + 2) {
					display: none;
				}

				&.green {
					color: $primary;
				}
				&.red {
					color: $error;
				}

				& .title {
					line-height: 1.2rem;
					font-weight: bold;
				}

				& .value {
					font-weight: bold;
					font-size: 3rem;
					line-height: 3rem;
				}
			}
		}

		& .controls {
			display: flex;
			justify-content: flex-end;
		}

		@include sm {
			& .stats {
				gap: 1rem;
				grid-template-columns: repeat(3, 1fr);
				& .stat {
					&:nth-last-child(2) {
						display: flex;
					}
				}
			}
		}
		@include lg {
			gap: 1rem;

			& .stats {
				grid-template-rows: 1fr;
				grid-template-columns: repeat(4, 1fr);

				& .stat {
					&:last-child {
						display: flex;
					}
					& .title {
						line-height: 1.3rem;
						font-weight: bold;
					}
					& .value {
						font-size: 4rem;
						line-height: 4rem;
					}
				}
			}
		}
	}
</style>
