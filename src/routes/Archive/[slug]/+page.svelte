<script lang="ts">
	import { marked } from "marked";
	import { formatDate } from "$lib/utils";
	import Utterances from "$lib/components/Utterances.svelte";
	let { data } = $props();
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<article>
	<h1>{data.meta.title}</h1>
	<div class="metadata">
		<p>{formatDate(data.meta.date)}</p>
		<a href="/Archive" class="back-link">← Back to Archive</a>
	</div>

	<!-- ✅ Markdown 렌더링 -->
	<div class="content">
		{@html marked.parse(data.content)}
	</div>
</article>

<div class="comments">
	<hr />
	<Utterances repo="0xwonj/comments" issueTerm="pathname" theme="github-dark" label="comment"/>
</div>

<style>
	article {
		max-width: 48rem;
		margin: 3rem auto;
		color: #eaf9ff;
	}
	.metadata {
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 0.9rem;
		color: #aaa;
		margin-bottom: 2rem;
	}
	.content :global(p) {
		line-height: 1.7;
		margin-bottom: 1rem;
	}
	.comments {
		margin-top: 4rem;
	}
</style>
