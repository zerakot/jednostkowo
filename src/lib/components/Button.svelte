<script>
	export let variant = '';
</script>

<button class={variant} on:click><slot /></button>

<style lang="scss">
	button {
		color: white;
		background-color: $primary;
		cursor: pointer;
		width: fit-content;
		font-size: 0.9rem;
		border: none;
		padding: 0.5rem 1rem;
		border-radius: 5px;

		&:hover {
			background-color: $primary-hover;
		}

		&.ghost {
			color: $primary;
			background-color: transparent;

			&:hover {
				background-color: $primary-ghost;
			}
		}
	}
</style>
