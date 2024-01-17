<script>
	import { calculators } from '$lib/assets/calculators';

	import Icon from '$lib/components/Icon.svelte';
	import { getRandomId } from '$lib/utils.js';
	import { page } from '$app/stores';
	import { fly } from 'svelte/transition';

	let currentcalculatorData;
	let id = getRandomId();
	let moreVisible = false;

	$: currentcalculatorData =
		calculators?.find((item) => item?.id === $page.params?.id) || calculators[0];
</script>

{#key currentcalculatorData?.type}
	<aside in:fly|global={{ x: -150, delay: 150 }}>
		<div class="trigger">
			<label for={id}>
				<span class="category">Kategoria:</span>
				<div class="wrapper">
					<Icon name={currentcalculatorData?.icon} />
					{currentcalculatorData?.name}
				</div>
			</label>

			<button {id} on:click={() => (moreVisible = !moreVisible)}>
				Zmień {currentcalculatorData?.type}
			</button>
		</div>

		<ul class:hidden={!moreVisible}>
			{#each calculators.filter((el) => el?.type === currentcalculatorData?.type) as calculator}
				<a href={`/${calculator?.id}`} on:click={() => (moreVisible = false)}>
					<li class:active={currentcalculatorData?.id === calculator?.id}>
						<Icon name={calculator?.icon} />
						{calculator?.name?.charAt(0).toUpperCase() + calculator?.name?.slice(1)}
					</li>
				</a>
			{/each}
		</ul>
	</aside>
{/key}

<style lang="scss">
	aside {
		& .trigger {
			font-size: 0.9rem;
			border-radius: 5px;
			padding: 0.5rem 1rem;
			background-color: $gray-light;
			display: flex;
			width: 100%;
			justify-content: space-between;
			border: 1px solid $gray-dark;

			& label {
				gap: 0.5rem;
				align-items: center;
				display: flex;

				& .category {
					display: none;
				}

				& .wrapper {
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
			grid-template-columns: 1fr;
			border-bottom: 2px solid $gray-light;

			&.hidden {
				display: none;
			}

			& a li {
				gap: 0.3rem;
				border-radius: 5px;
				padding: 0.4rem 3rem 0.4rem 0.5rem;
				display: flex;
				align-items: center;
				font-size: 0.9rem;
				white-space: pre;

				&:hover,
				&.active {
					background-color: $gray-light;
				}

				& span {
					font-size: 1.3rem;
				}
			}
		}

		@include md {
			& .trigger label .category {
				display: block;
			}
			& ul {
				grid-template-columns: 1fr 1fr;
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
