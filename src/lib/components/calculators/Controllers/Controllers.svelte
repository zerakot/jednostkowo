<script>
	import Controls from './Controls.svelte';
	import Results from './Results.svelte';

	export let calculatorData;

	let results;
	let animation = false;

	const runSubmitAnimation = () => {
		animation = true;
		setTimeout(() => {
			animation = false;
		}, 600);
	};
</script>

<section class="container" class:animation>
	<Controls
		bind:results
		{runSubmitAnimation}
		layout={calculatorData.layout}
		formula={calculatorData.formula}
		controllers={calculatorData.controllers}
	/>
	<Results {results} />
</section>

<style lang="scss">
	.container {
		gap: 1rem;
		display: flex;
		flex-direction: column;
		@include calculator;

		@include xl {
			width: 70%;
		}
	}
</style>
