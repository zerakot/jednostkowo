<script>
	let { result } = $props();
</script>

<p class="description">{@html result?.description}</p>

<style lang="scss">
	.description {
		padding: 0.7rem;
		border: 1px solid $gray-medium;
		border-radius: 5px;
		background-color: #f9f9f9;
	}
</style>
