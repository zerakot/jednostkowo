<script>
	export let size = '';
	export let variant = '';
</script>

<span class="material-symbols-rounded notranslate {variant}" style="--size: {size}"><slot /> </span>

<style lang="scss">
	.material-symbols-rounded.notranslate {
		font-size: var(--size, 1.15rem);
		color: $text;

		&.primary {
			color: $primary;
		}
	}
</style>
