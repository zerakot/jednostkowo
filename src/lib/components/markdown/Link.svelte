<script>
	export let href = '';
	export let title = undefined;
</script>

<a {href} {title}><slot /></a>

<style lang="scss">
	a {
		font-weight: inherit;
		color: $primary;
	}
</style>
