<script lang="ts">
	import { onMount } from "svelte";

	export let repo: string = "kante7jeong/blog-comments";
	export let issueTerm: string = "pathname";
	export let label: string = "comment";
	export let theme: "github-light" | "github-dark" | "preferred-color-scheme" = "preferred-color-scheme";

	let container: HTMLElement | null = null;

	onMount(() => {
		if (!repo) {
			console.error("Utterances: 'repo' prop is required.");
			return;
		}

		// 중복 방지
		if (container?.hasChildNodes()) return;

		const script = document.createElement("script");
		script.src = "https://utteranc.es/client.js";
		script.async = true;
		script.crossOrigin = "anonymous";
		script.setAttribute("repo", repo);
		script.setAttribute("issue-term", issueTerm);
		script.setAttribute("theme", theme);
		script.setAttribute("label", label);
		script.setAttribute("id", "utterances-comments");

		container?.appendChild(script);
	});
</script>

<div class="utterances-container" bind:this={container}></div>

<style>
	.utterances-container {
		margin: 4rem auto;
		padding: 2rem;
		width: 90%;
		max-width: 60rem;
		border-radius: 1rem;
		background: rgba(255, 255, 255, 0.07);
		backdrop-filter: blur(10px);
		box-shadow: 0 0 20px rgba(255, 255, 255, 0.08);
		color: #eaf9ff;
		font-family: "Inter", sans-serif;
		transition: background 0.4s ease, box-shadow 0.4s ease;
	}

	.utterances-container:hover {
		background: rgba(255, 255, 255, 0.12);
		box-shadow: 0 0 25px rgba(255, 255, 255, 0.15);
	}

	/* Utterances iframe 내부 색상 조정용 (postMessage로 연동됨) */
	iframe.utterances-frame {
		filter: brightness(1.2) saturate(1.2);
	}
</style>
