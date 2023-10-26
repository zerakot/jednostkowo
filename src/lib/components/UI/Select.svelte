<script>
	import { getRandomId } from '$lib/utils';

	export let value;
	export let label = '';
	export let halfWidth = false;
	let id = getRandomId(10);
</script>

<div class="wrapper" class:halfWidth>
	{#if label}
		<label for={id}>{label}</label>
	{/if}
	<select {...$$restProps} bind:value>
		<slot />
	</select>
</div>

<style lang="scss">
	.wrapper {
		gap: 0.2rem;
		display: flex;
		flex-direction: column;

		&.halfWidth {
			max-width: 50%;
		}

		& label {
			font-size: 0.9rem;
		}
		& select {
			font-size: 0.95rem;
			padding: 0.5rem 0.8rem;
			border-radius: 5px;
			border: 1px solid $accent;
		}
	}
</style>
