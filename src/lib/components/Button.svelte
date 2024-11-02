<script>
	import { browser } from '$app/environment';

	let { variant, children, ...rest } = $props();
</script>

<button class={variant} disabled={!browser} {...rest}>{@render children()}</button>

<style lang="scss">
	@use 'sass:color';
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

		&:active,
		&:hover {
			background-color: color.adjust($primary, $lightness: -2%);
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

		&.outline {
			color: $primary;
			background-color: transparent;
			border: 1px solid $primary;

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
