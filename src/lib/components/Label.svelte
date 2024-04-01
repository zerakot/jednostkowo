<script>
	export let htmlFor;
</script>

<label for={htmlFor}><slot /></label>

<style lang="scss">
	label {
		flex-shrink: 0;
		font-size: 1em;
		@include sm {
			font-size: 1em;
		}
	}
</style>
