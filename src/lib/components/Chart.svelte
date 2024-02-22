<script>
	import Chart from 'chart.js/auto';
	import { onMount } from 'svelte';

	export let height = 200;
	export let config = {};

	let ctx;
	let myChart;

	$: if (myChart) {
		myChart.data = config.data;
		myChart.update();
	}

	onMount(async () => {
		myChart = new Chart(ctx, config);
	});
</script>

<canvas bind:this={ctx} {height} />

<style>
	canvas {
		width: 100%;
	}
</style>
