<script>
	import { getRandomId } from '$lib/utils';
	import Label from './Label.svelte';

	export let value;
	export let type;
	export let checked = false;
	export let label = '';
	export let inlineLabel = false;

	let id = getRandomId(10);
</script>

<div class="wrapper" class:inlineLabel>
	{#if label}
		<Label htmlFor={id}>{label}</Label>
	{/if}

	{#if type === 'checkbox'}
		<input type="checkbox" {id} {...$$restProps} bind:checked />
	{:else}
		<input {type} {id} {value} on:input={(e) => (value = e.target.value)} {...$$restProps} />
	{/if}
</div>

<style lang="scss">
	.wrapper {
		width: 100%;
		gap: 0.2rem;
		display: flex;
		flex-direction: column;

		&.inlineLabel {
			gap: 0.4rem;
			align-items: center;
			flex-direction: row;
		}

		& input {
			width: 100%;
			font-size: 0.95rem;
			padding: 0.5rem 0.8rem;
			border-radius: 5px;
			border: 1px solid $gray-dark;
		}
	}
</style>
