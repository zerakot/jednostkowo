<script>
	import { browser } from '$app/environment';

	export let variant = '';
</script>

<button class={variant} on:click disabled={!browser} {...$$restProps}><slot /></button>

<style lang="scss">
	button {
		color: white;
		background-color: $primary;
		cursor: pointer;
		width: fit-content;
		font-size: 0.8rem;
		border: none;
		padding: 0.3rem 0.8rem;
		border-radius: 5px;
		display: flex;
		align-items: center;
		font-size: 1em;

		&:hover {
			background-color: darken($primary, 2.2);
		}
		&:active {
			background-color: darken($primary, 4.2);
		}
		&:disabled {
			background-color: $gray-dark;
		}

		&.ghost {
			color: $primary;
			background-color: transparent;

			&:hover {
				background-color: $primary-ghost;
			}
		}

		&.text {
			font-weight: bold;
			color: $primary;
			padding: 0;
			border-radius: 0;
			background-color: transparent;
		}

		@include md {
			padding: 0.5rem 1rem;
		}
	}
</style>
