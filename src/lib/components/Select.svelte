<script>
	import { getRandomId } from '$lib/utils';
	import Label from './Label.svelte';

	/** @type {Record<string, any>} */
	let {
		value = $bindable(),
		label,
		autoWidth = false,
		inlineLabel = '',
		children,
		...rest
	} = $props();

	let id = getRandomId(10);
</script>

<div class="wrapper" class:autoWidth class:inlineLabel>
	{#if label}
		<Label htmlFor={id}>{label}</Label>
	{/if}

	<select {id} {...rest} bind:value>
		{@render children?.()}
	</select>
</div>

<style lang="scss">
	.wrapper {
		width: 100%;
		gap: 0.1rem;
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

		& select {
			@include input;

			& :global(option.category) {
				color: #000000;
				font-weight: bold;
			}
		}
	}
</style>
