<script>
	import Chart from 'chart.js/auto';
	import { onMount } from 'svelte';

	export let width = 60;
	export let height = 60;
	export let config = {};
	export let autoWidth = true;

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

<canvas class:autoWidth bind:this={ctx} {height} {width} />

<style lang="scss">
	canvas {
		&.autoWidth {
			width: 100%;
		}
	}
</style>
