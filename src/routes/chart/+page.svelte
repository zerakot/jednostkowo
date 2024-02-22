<script>
	import Chart from '../../lib/components/Chart.svelte';
</script>

<Chart
	data={{
		labels: Array.from({ length: 5 }, (_, i) => `Okres ${i + 1}`),
		datasets: [
			{
				label: 'Kwota',
				data: [1, 2, 4, 6, 8],
				borderColor: '#ff9999',
				stepped: true
			}
		]
	}}
/>
