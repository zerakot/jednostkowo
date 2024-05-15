<script>
	import { calculators } from '$lib/assets/calculators';
	import Quiz from './Quiz.svelte';

	let calculatorData = calculators.find((c) => c.id === 'kalkulator-proporcji');
</script>

<Quiz {calculatorData} />
