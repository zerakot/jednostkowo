<script>
	import { website } from '$lib/assets/seo';
	import { calculators } from '$lib/assets/calculators';
	import slugify from 'slugify';

	export let calculatorId = '';

	let calculator = calculators.find((item) => item.id === calculatorId);
</script>

<aside class="calculatorBanner">
	<h2>
		{`Wypróbuj nasz ${calculator?.type} ${calculator?.name}!`}
	</h2>

	<a href={`${website.baseUrl}/${slugify(calculator?.title, { lower: true })}`}>Wypróbuj</a>
</aside>

<style lang="scss">
	.calculatorBanner {
		display: none;
		top: 20px;
		position: sticky;
		gap: 5rem;
		padding: 0.5rem;

		height: fit-content;
		flex-direction: column;
		border: 2px solid $primary;
		border-radius: 10px;
		grid-area: widget;
		background-color: transparentize($primary, 0.9);
		@include lg {
			display: flex;
		}

		&::before {
			top: 0;
			left: 0;
			content: '';
			width: 100%;
			height: 70%;
			z-index: -1;
			background-color: transparentize($primary, 0.9);
			position: absolute;
			clip-path: ellipse(80% 90% at 50% 0%);
		}
		&::after {
			top: 0;
			left: 0;
			content: '';
			width: 100%;
			height: 82%;
			z-index: -1;
			background-color: transparentize($primary, 0.9);
			position: absolute;
			clip-path: ellipse(90% 90% at 50% 0%);
		}

		& h2 {
			color: #153d00;
		}

		& a {
			color: white;
			font-weight: bold;
			text-align: center;
			border-radius: 8px;
			font-size: 1rem;
			background-color: $primary;
			padding: 0.5rem 1rem;
		}
	}
</style>
