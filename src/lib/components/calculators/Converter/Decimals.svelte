<script>
	import Select from '$lib/components/Select.svelte';

	export let decimals;
</script>

<div class="decimals">
	Ilość miejsc po przecinku
	<Select bind:value={decimals}>
		<option value="0">0</option>
		<option value="1">1</option>
		<option value="2">2</option>
		<option value="3">3</option>
		<option value="4">4</option>
		<option value="5">5</option>
		<option value="6">6</option>
		<option value="7">7</option>
		<option value="8">8</option>
		<option value="9">9</option>
	</Select>
</div>

<style>
	.decimals {
		padding: 0 1rem 0 0;
		justify-content: flex-end;
		align-items: center;
		gap: 0.5rem;
		display: flex;
	}
</style>
