<script>
	import { browser } from '$app/environment';
	import { getRandomId } from '$lib/utils';
	import Label from './Label.svelte';

	export let value = '';
	export let type = 'text';
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
		<input type="checkbox" {id} {...$$restProps} disabled={!browser} bind:checked />
	{:else}
		<input
			{id}
			{type}
			{value}
			step="any"
			disabled={!browser}
			on:input={(e) => (value = e.target.value)}
			{...$$restProps}
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
