<script>
	import Chart from '$lib/components/Chart.svelte';
	let { result } = $props();
</script>

<div class="chartResults">
	<div class="chartWrapper">
		<Chart config={result.config} />
	</div>
</div>

<style lang="scss">
	.chartResults {
		gap: 1rem;
		display: flex;
		flex-direction: column;

		& .chartWrapper {
			width: 100%;
			height: 250px;
		}

		& p {
			font-size: 1rem;
			color: $primary;
			padding: 0.6rem;
			border: 1px solid $primary;
			border-radius: 7px;
			background-color: $primary-ghost;
		}
	}
</style>
