<script>
	let { size = '', variant = '', children } = $props();
</script>

<span class="material-symbols-rounded notranslate {variant}" style="--size: {size}">{@render children?.()} </span>

<style lang="scss">
	.material-symbols-rounded.notranslate {
		font-size: var(--size, 1.15rem);
		color: $text;

		&.primary {
			color: $primary;
		}
	}
</style>
