<script>
	import { getRandomId } from '$lib/utils';
	import Label from './Label.svelte';

	export let value;
	export let label;
	export let autoWidth = false;
	export let inlineLabel;

	let id = getRandomId(10);
</script>

<div class="wrapper" class:autoWidth class:inlineLabel>
	{#if label}
		<Label htmlFor={id}>{label}</Label>
	{/if}

	<select {...$$restProps} bind:value>
		<slot />
	</select>
</div>

<style lang="scss">
	.wrapper {
		width: 100%;
		gap: 0.2rem;
		display: flex;
		flex-direction: column;

		&.inlineLabel {
			gap: 0.4rem;
			flex-direction: row;
			align-items: center;
		}

		&.autoWidth {
			width: auto;
		}

		& label {
			font-size: 0.85rem;
		}
		& select {
			width: 100%;
			font-size: 0.95rem;
			padding: 0.5rem 0.8rem;
			border-radius: 5px;
			border: 1px solid $gray-dark;
		}
	}
</style>
