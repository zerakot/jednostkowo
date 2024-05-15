<script>
	export let content = '';
	export let decimals = 0;

	let decimalsString = '';
	$: decimalsString =
		decimals === 0
			? 'liczb całkowitych'
			: decimals === 1
			? 'jednego miejsca po przecinku'
			: `${decimals} miejsc po przecinku`;
</script>

<div class="content">
	<p>{content} Wynik zaokrąglij do {decimalsString}.</p>
</div>

<style lang="scss">
	.content {
		gap: 0.1rem;
		display: flex;
		flex-direction: column;

		& .decimals {
			color: #5c5c5c;
			font-size: 0.8rem;
		}
	}
</style>
