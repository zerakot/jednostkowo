<script>
	import { browser } from '$app/environment';
	import { getRandomId } from '$lib/utils';
	import Label from './Label.svelte';

	/** @type {Record<string, any>} */
	let {
		value = $bindable(''),
		type = 'text',
		checked = $bindable(false),
		label = '',
		inlineLabel = false,
		...rest
	} = $props();

	let id = getRandomId(10);
</script>

<div class="wrapper" class:inlineLabel>
	{#if label}
		<Label htmlFor={id}>{label}</Label>
	{/if}

	{#if type === 'checkbox'}
		<input type="checkbox" {id} {...rest} disabled={!browser} bind:checked />
	{:else}
		<input
			{id}
			{type}
			{value}
			step="any"
			disabled={!browser}
			oninput={(e) => (value = e.target.value)}
			{...rest}
		/>
	{/if}
</div>

<style lang="scss">
	.wrapper {
		width: 100%;
		gap: 0.1rem;
		display: flex;
		flex-direction: column;

		&.inlineLabel {
			align-items: center;
			flex-direction: row;
		}

		& input {
			@include input;
		}
	}
</style>
