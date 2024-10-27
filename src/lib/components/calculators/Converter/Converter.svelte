<script>
	import Controls from './Controls.svelte';
	import Results from './Results.svelte';
	import Options from './Options.svelte';

	let { calculator } = $props();

	let results = $state([]);
	let options = $state({ decimals: '2' });
</script>

<section class="converter">
	<Controls converters={calculator?.converters} {options} bind:results />
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
