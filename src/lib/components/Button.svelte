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
		padding: 0.5rem 1rem;
		border-radius: 5px;
		display: flex;
		align-items: center;

		&:hover {
			background-color: darken($primary, 2.2);
		}
		&:active {
			background-color: darken($primary, 4.2);
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
			font-size: 0.75rem;
			background-color: transparent;

			@include md {
				font-size: 0.85rem;
			}
		}

		@include md {
			font-size: 0.9rem;
		}
	}
</style>
