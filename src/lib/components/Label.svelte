<script>
	/** @type {{htmlFor: any, children?: import('svelte').Snippet}} */
	let { htmlFor, children } = $props();
</script>

<label for={htmlFor}>{@render children?.()}</label>

<style lang="scss">
	label {
		flex-shrink: 0;
		font-size: 0.7rem;
		color: $text-light;

		@include sm {
			font-size: 0.85rem;
		}
	}
</style>
