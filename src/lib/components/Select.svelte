<script>
	import { getRandomId } from '$lib/utils';

	export let value;
	export let label = '';
	export let autoWidth = false;
	let id = getRandomId(10);
</script>

<div class="wrapper" class:autoWidth>
	{#if label}
		<label for={id}>{label}</label>
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

		&.autoWidth {
			width: auto;
		}

		& label {
			font-size: 0.9rem;
		}
		& select {
			font-size: 0.95rem;
			padding: 0.5rem 0.8rem;
			border-radius: 5px;
			border: 1px solid $gray-dark;
		}
	}
</style>
