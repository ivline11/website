<script lang="ts">
  	import { goto } from '$app/navigation';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>


<section>
	<h1>Taejeong Kang's Website</h1>
    <main>
		<nav>
			<button class="link-button" on:click={() => goto('About')}>About</button>
			<button class="link-button" on:click={() => goto('Experience')}>Experience</button>
			<button class="link-button" on:click={() => goto('Links')}>Links</button>
		</nav>
	</main>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin: 3rem auto;
	}

	h1 {
		color: var(--color-theme-dynamic);
		animation: color-rotate 40s infinite ease-in-out alternate;
		margin: 2rem 0;
		font-size: 4rem;
	}

	nav {
		margin-top: 2rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 50px;
	}

	.link-button {
		background: none;
		border: none;
		color: var(--color-theme-dynamic);
		text-decoration: none;
		cursor: pointer;
		position: relative;
		padding-left: 20px;
		font-size: 2.5rem;
		padding: 1rem;
	}

	.link-button:hover {
		text-decoration: none;
		animation: blink 1s steps(1) infinite;
	}

	.link-button:hover::before {
		content: '>';
		position: absolute;
		left: -1rem;
		color: var(--color-theme-dynamic);
	}

	@keyframes color-rotate {
		0% {
			filter: hue-rotate(0deg);
		}
		100% {
			filter: hue-rotate(360deg);
		}
	}

	@media (max-width: 768px) {
		section {
			margin: 0 auto;

			h1 {
				margin: 1rem auto;
			}

			nav {
				margin: 1rem auto;
			}
		}
	}
</style>