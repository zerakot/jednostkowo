<script>
	import Chart from 'chart.js/auto';
	import { onMount } from 'svelte';

	let { width = 60, height = 60, config = {}, autoWidth = true } = $props();

	let ctx = $state();
	let myChart = $state();

	$effect(() => {
		if (myChart) {
			myChart.data = config.data;
			myChart.update();
		}
	});

	onMount(async () => {
		myChart = new Chart(ctx, config);
	});
</script>

<canvas class:autoWidth bind:this={ctx} {height} {width}></canvas>

<style lang="scss">
	canvas {
		&.autoWidth {
			width: 100%;
		}
	}
</style>
