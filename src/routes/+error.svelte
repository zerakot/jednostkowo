<script>
	import { page } from '$app/stores';
</script>

<div class="container">
	<hgroup>
		<h1>{$page.status}</h1>
		<p>{$page.error.message}</p>
	</hgroup>
	<a href={$page.error?.returnHref || '/'}
		>Powrót do {$page.error?.returnLabel || 'strony głównej'}</a
	>
</div>

<style lang="scss">
	.container {
		height: 90vh;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;

		& hgroup {
			margin-top: 10rem;
			text-align: center;
			& h1 {
				line-height: 11rem;
				font-size: 12rem;
				color: $primary;
			}
			& p {
				color: $text-light;
				font-size: 2rem;
			}
		}

		& a {
			color: $primary;
			font-weight: bold;
		}
	}
</style>
