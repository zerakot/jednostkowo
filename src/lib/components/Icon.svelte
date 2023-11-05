<script>
	import icons from '$lib/assets/icons.json';

	export let name;
	export let width = '20';
	export let height = '20';

	$: icon = icons.find((item) => item.name === name);
</script>

<svg xmlns="http://www.w3.org/2000/svg" {height} {width} viewBox="0 -960 960 960">
	<path d={icon?.path} />
</svg>
