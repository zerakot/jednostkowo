<script>
	export let ordered;
	export let start;
</script>

{#if ordered}
	<ol {start}><slot /></ol>
{:else}
	<ul><slot /></ul>
{/if}

<style lang="scss">
	ul,
	ol {
		line-height: 1.75rem;
		padding-left: 1.5rem;
		width: fit-content;
		list-style-type: none;
	}
</style>
