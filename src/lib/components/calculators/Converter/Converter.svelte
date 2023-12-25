<script>
	import Controls from './Controls.svelte';
	import Results from './Results.svelte';
	import Decimals from './Decimals.svelte';

	export let page;

	let number = 1;
	let decimals = '2';
	let targetUnitLabel = '';
	let baseUnitLabel = page.converters.reduce((foundUnit, converter) => {
		return foundUnit || converter.units.find((unit) => unit.default === true)?.label;
	}, '');
</script>

<section class="converter">
	<Controls converters={page?.converters} bind:number bind:baseUnitLabel bind:targetUnitLabel />
	<Results converters={page?.converters} {number} {baseUnitLabel} {targetUnitLabel} {decimals} />
	<Decimals bind:decimals />
</section>

<style lang="scss">
	.converter {
		gap: 1rem;
		display: flex;
		flex-direction: column;
	}
</style>
