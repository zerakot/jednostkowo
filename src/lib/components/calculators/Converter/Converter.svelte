<script>
	import Controls from './Controls.svelte';
	import Results from './Results.svelte';
	import Decimals from './Decimals.svelte';

	export let page;

	let unitRatio = 1;
	let number = 0;
	let decimals = '2';
</script>

<div class="converter">
	<Controls converters={page?.converters} bind:number bind:unitRatio />
	<Results {number} {unitRatio} {decimals} converters={page?.converters} />
	<Decimals bind:decimals />
</div>

<style lang="scss">
	.converter {
		gap: 1rem;
		display: flex;
		flex-direction: column;
	}
</style>
