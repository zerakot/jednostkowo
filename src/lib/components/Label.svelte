<script>
	export let htmlFor;
</script>

<label for={htmlFor}><slot /></label>

<style lang="scss">
	label {
		flex-shrink: 0;
		font-size: 0.85rem;
		@include md {
			font-size: 0.9rem;
		}
	}
</style>
