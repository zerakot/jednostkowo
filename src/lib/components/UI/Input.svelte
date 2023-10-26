<script>
	import { getRandomId } from '$lib/utils';
	export let variant = '';
	export let label = '';
	export let value = '';

	let id = getRandomId(10);
</script>

<div class="wrapper">
	{#if label}
		<label for={id}>{label}</label>
	{/if}
	<input {...$$restProps} bind:value class={variant} {id} on:input />
</div>

<style lang="scss">
	.wrapper {
		width: 100%;
		gap: 0.2rem;
		display: flex;
		flex-direction: column;

		& label {
			font-size: 0.9rem;
		}
		& input {
			width: 100%;
			font-size: 0.95rem;
			padding: 0.5rem 0.8rem;
			border-radius: 5px;
			border: 1px solid $accent;
		}
	}
</style>
