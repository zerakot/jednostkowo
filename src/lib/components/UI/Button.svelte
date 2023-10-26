<script>
	export let variant = '';
</script>

<button {...$$restProps} class={variant} on:click on:load>
	<slot name="icon" />
	<slot name="label" />
</button>

<style lang="scss">
	button {
		width: 100%;
		color: white;
		gap: 0.5rem;

		border-radius: 5px;
		display: flex;
		padding: 0.5rem;

		white-space: nowrap;
		background-color: $accent;
		border: none;
		cursor: pointer;
		font-size: 1rem;

		&.ghost {
			color: $primary;
			background-color: transparent;

			&:hover {
				background-color: transparentize($accent, 0.85);
			}
		}
	}
</style>
