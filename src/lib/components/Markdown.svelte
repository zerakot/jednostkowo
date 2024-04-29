<script>
	import { marked } from 'marked';

	export let source;
</script>

<div class="markdown">
	{@html marked(source, { mangle: false })}
</div>

<style lang="scss">
	.markdown {
		& :global(h2) {
			margin-top: 1rem;
		}
		& :global(h3) {
			margin-top: 1.25rem;
		}
		& :global(h4) {
			margin-top: 1rem;
		}
		& :global(a) {
			font-weight: bold;
			color: $primary;
		}
		& :global(ul),
		& :global(ol) {
			line-height: 1.75rem;
			padding-left: 1.5rem;
			width: fit-content;
			list-style-type: none;
		}
		& :global(li) {
			gap: 0.3rem;
			align-items: center;
			display: flex;
			background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='20' width='20' viewBox='0 -960 960 960'%3E%3Cpath fill='%23026700' d='m382-388 321-321q19-19 45-19t45 19q19 19 19 45t-19 45L427-253q-19 19-45 19t-45-19L167-423q-19-19-19-45t19-45q19-19 45-19t45 19l125 125Z'%3E%3C/path%3E%3C/svg%3E");
			background-position: left;
			background-repeat: no-repeat;
			padding: 0 0 0 24px;
		}
		& :global(p) {
			margin-top: 0.4rem;
		}
		& :global(math) {
			font-size: 1.3rem;
		}
		& :global(img) {
			max-width: 90%;
			max-height: 80px;
			margin: 0.5rem 0;
			padding: 0.7rem;
			border-radius: 10px;
			border: 1px solid $gray-dark;
			background: $gray-light;
		}
	}
</style>
