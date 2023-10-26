<script>
	import { pages } from '$lib/CMS';
	import { page } from '$app/stores';

	let currentPageData;
	$: currentPageData = pages?.find(
		(item) => item?.id === $page.params?.id && item?.type === $page.params?.type
	);

	let moreVisible = false;
</script>

<aside>
	<div class="trigger">
		<div class="category">
			Kategoria:
			<div class="label">
				<span class="material-symbols-rounded">{currentPageData?.icon}</span>
				{currentPageData?.name}
			</div>
		</div>

		<button on:click={() => (moreVisible = !moreVisible)}>Zmień {currentPageData?.type}</button>
	</div>

	<ul class:hidden={!moreVisible}>
		{#each pages.filter((el) => el?.type === currentPageData?.type) as page}
			<a href={`/${page?.type}-${page?.id}`} on:click={() => (moreVisible = false)}>
				<li
					class:active={currentPageData?.id === page?.id && currentPageData?.type === page?.type}
					style="--color: {page?.color}"
				>
					<span class="material-symbols-rounded">
						{page?.icon}
					</span>

					{page?.name}
				</li>
			</a>
		{/each}
	</ul>
</aside>

<style lang="scss">
	aside {
		& .trigger {
			font-size: 0.9rem;
			border-radius: 5px;
			padding: 0.5rem 1rem;
			background-color: $secondary;
			display: flex;
			width: 100%;
			justify-content: space-between;
			border: 1px solid $accent;

			& .category {
				gap: 0.5rem;
				align-items: center;
				display: flex;

				& .label {
					align-items: center;
					font-weight: bold;
					gap: 0.2rem;
					display: flex;
					text-transform: capitalize;
				}
			}

			& button {
				cursor: pointer;
				font-size: 0.8rem;
				border-radius: 5px;
				color: white;
				border: none;
				background-color: $primary;
				padding: 0.2rem 0.5rem;
			}
		}

		& ul {
			padding: 0.5rem;
			gap: 0.2rem 1rem;
			display: grid;
			flex-direction: column;
			list-style: none;
			grid-template-columns: 1fr 1fr;
			border-bottom: 2px solid $secondary;

			&.hidden {
				display: none;
			}

			& a li {
				gap: 0.3rem;
				border-radius: 5px;
				padding: 0.4rem 3rem 0.4rem 0.5rem;
				display: flex;
				align-items: center;
				text-transform: capitalize;
				font-size: 0.9rem;
				white-space: pre;

				&:hover,
				&.active {
					background-color: $secondary;
				}

				& span {
					font-size: 1.3rem;
				}
			}
		}

		@include md {
			& ul {
				grid-template-columns: 1fr 1fr 1fr;
			}
		}
		@include lg {
			& .trigger {
				display: none;
			}
			& ul {
				padding: 0;
				gap: 0.1rem;
				grid-template-columns: 1fr;
				border-bottom: none;

				&.hidden {
					display: flex !important;
				}
			}
		}
	}
</style>
