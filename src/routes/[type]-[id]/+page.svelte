<script>
	import { pages } from '$lib/CMS';
	import { page } from '$app/stores';

	let pageData;
	$: pageData = pages?.find(
		(item) => item.id === $page.params.id && item.type === $page.params.type
	);
</script>

{#key pageData?.id}
	<svelte:component this={pageData?.component} page={pageData} />
{/key}
