<script>
	import Controls from './Controls.svelte';
	import Results from './Results.svelte';
	import Options from './Options.svelte';

	export let calculatorData;

	let results = [];
	let options = { decimals: '2' };
</script>

<section class="converter">
	<Controls converters={calculatorData?.converters} {options} bind:results />
	<Results {results} decimals={options.decimals} />
	<Options bind:options />
</section>

<style lang="scss">
	.converter {
		gap: 1rem;
		display: flex;
		flex-direction: column;
	}
</style>
