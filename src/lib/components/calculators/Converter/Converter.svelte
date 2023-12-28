<script>
	import Controls from './Controls.svelte';
	import Results from './Results.svelte';
	import Options from './Options.svelte';

	export let pageData;

	let results = [];
	let options = { decimals: '2', scientificNotation: true };
</script>

<section class="converter">
	<Controls converters={pageData?.converters} {options} bind:results />
	<Results {results} />
	<Options bind:options />
</section>

<style lang="scss">
	.converter {
		gap: 1rem;
		display: flex;
		flex-direction: column;
	}
</style>
