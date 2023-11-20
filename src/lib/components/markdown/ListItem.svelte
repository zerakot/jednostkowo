<script>
	import Icon from '../Icon.svelte';
</script>

<li><Icon name="check" fill="primary" /><slot /></li>

<style lang="scss">
	li {
		gap: 0.3rem;
		align-items: center;
		display: flex;
	}
</style>
