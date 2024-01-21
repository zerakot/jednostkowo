<script>
	import Select from '$lib/components/Select.svelte';
	import Input from '$lib/components/Input.svelte';

	export let options;
</script>

<div class="options">
	<div class="option">
		<Select bind:value={options.decimals} label="Zaokrąglenie po przecinku" inlineLabel={true}>
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
			<option value="10">10</option>
		</Select>
	</div>
	<div class="option">
		<Input
			type="checkbox"
			bind:checked={options.scientificNotation}
			label="Notacja naukowa"
			inlineLabel={true}
		/>
	</div>
</div>

<style lang="scss">
	.options {
		gap: 0.5rem;
		display: flex;
		padding: 0 1rem 0 0;
		align-items: flex-end;
		flex-direction: column;

		& .option {
			display: flex;
			justify-content: flex-end;
			align-items: center;
			gap: 0.5rem;
		}
	}
</style>
